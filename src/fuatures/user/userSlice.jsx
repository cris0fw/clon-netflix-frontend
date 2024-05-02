import { createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (thunkAPI) => {
  try {
    return await authService.logout();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const editProfile = createAsyncThunk(
  "auth/profile",
  async (userData, thunkAPI) => {
    try {
      return await authService.editProfile(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const uploading = createAsyncThunk(
  "auth/images",
  async (data, thunkAPI) => {
    try {
      const formData = new FormData();

      formData.append("image", data);

      return await authService.uploading(formData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset-all");

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("customer");
  return user ? JSON.parse(user) : null;
};

const initialState = {
  user: getUserFromLocalStorage(),
  upload: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.createdUser = action.payload;

        if (state.isSuccess === true) {
          toast.success("Cuenta creada satisfactoriamente");
        }
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload.data.message;

        if (state.isError === true) {
          toast.error(action.payload.data.message);
        }
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;

        if (state.isSuccess === true) {
          toast.success("Usted se ha logueado correctamente");
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload.data.message;

        if (state.isError === true) {
          toast.error(action.payload.data.message);
        }
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        if (state.isSuccess === true) {
          toast.success("Has cerrado cesion");
        }
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;

        if (state.isError === true) {
          toast.error("Funcionando mal con cerrar sesion");
        }
      })

      .addCase(editProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.profile = action.payload;

        if (state.isSuccess === true) {
          let currentUserData = JSON.parse(localStorage.getItem("customer"));
          let currentTokenData = localStorage.getItem("token");

          let newUserData = {
            _id: currentUserData?.id,
            fullName: action?.payload?.fullName,
            email: action?.payload?.email,
            imagen: [],
            token: currentTokenData,
          };

          if (state.upload) {
            const imageUrl = state.upload[0]?.url;

            if (newUserData?.imagen.length === 0) {
              newUserData?.imagen.push(imageUrl);
            } else {
              newUserData?.imagen.shift();
              newUserData?.imagen.push(imageUrl);
            }
          }

          localStorage.setItem("customer", JSON.stringify(newUserData));
          state.user = newUserData;
          toast.success("User updated successfully");
        }
      })
      .addCase(editProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;

        if (state.isError === true) {
          toast.error("Could not update user changes");
        }
      })
      .addCase(uploading.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploading.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.upload = action.payload;
      })
      .addCase(uploading.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;

        if (state.isError === true) {
          toast.error("Could not update user changes");
        }
      })

      .addCase(resetState, () => initialState);
  },
});

export default AuthSlice.reducer;
