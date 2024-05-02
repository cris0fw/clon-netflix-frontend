import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SeriesService } from "../series/seriesService";

export const seriePopular = createAsyncThunk(
  "serie/populares",
  async (thunkAPI) => {
    try {
      return await SeriesService.seriesPopular();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const searchToSerie = createAsyncThunk(
  "serie/search",
  async (nameSerie, thunkAPI) => {
    try {
      return await SeriesService.searchSerie(nameSerie);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const serieTopRated = createAsyncThunk(
  "serie/top-rated",
  async (page, thunkAPI) => {
    try {
      return await SeriesService.seriesTopRated(page);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const seriesDetails = createAsyncThunk(
  "serie/details",
  async (serieId, thunkAPI) => {
    try {
      return await SeriesService.detailsSerie(serieId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const seriesAndReviews = createAsyncThunk(
  "serie/reviews",
  async (serieId, thunkAPI) => {
    try {
      return await SeriesService.seriesReviews(serieId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const serieRecommendations = createAsyncThunk(
  "serie/recommendations",
  async (serieId, thunkAPI) => {
    try {
      return await SeriesService.seriesRecommendations(serieId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const serieSimilar = createAsyncThunk(
  "serie/similar",
  async (serieId, thunkAPI) => {
    try {
      return await SeriesService.seriesSimilar(serieId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSeriesGenres = createAsyncThunk(
  "serie/genres",
  async (thunkAPI) => {
    try {
      return await SeriesService.seriesGenres();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const serieVideo = createAsyncThunk(
  "serie/video",
  async (serieId, thunkAPI) => {
    try {
      return await SeriesService.serieVideo(serieId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  seriesPopular: [],
  seriesTopRated: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const SeriesSlice = createSlice({
  name: "Serie",
  initialState: initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(seriePopular.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(seriePopular.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.seriesPopular = action.payload;
      })
      .addCase(seriePopular.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(serieTopRated.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(serieTopRated.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.seriesTopRated = action.payload;
      })
      .addCase(serieTopRated.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(searchToSerie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchToSerie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.searchSerie = action.payload;
      })
      .addCase(searchToSerie.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(seriesDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(seriesDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.detailsOfSerie = action.payload;
      })
      .addCase(seriesDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(seriesAndReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(seriesAndReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.comments = action.payload;
      })
      .addCase(seriesAndReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(serieRecommendations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(serieRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.recommendations = action.payload;
      })
      .addCase(serieRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(serieSimilar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(serieSimilar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.similar = action.payload;
      })
      .addCase(serieSimilar.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      })

      .addCase(getSeriesGenres.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSeriesGenres.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.genres = action.payload;
      })
      .addCase(getSeriesGenres.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(serieVideo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(serieVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.serieVideo = action.payload;
      })
      .addCase(serieVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      });
  },
});

export default SeriesSlice.reducer;
