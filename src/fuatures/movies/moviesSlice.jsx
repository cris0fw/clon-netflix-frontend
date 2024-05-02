import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { MovieService } from "./moviesService";
import { toast } from "react-toastify";

export const getAllPopularMovie = createAsyncThunk(
  "movie/popular",
  async (thunkAPI) => {
    try {
      return await MovieService.popularMovie();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getTopRated = createAsyncThunk(
  "movie/topRated",
  async (page, thunkAPI) => {
    try {
      return await MovieService.topRated(page);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllUpcomingMovie = createAsyncThunk(
  "movie/upcoming",
  async (thunkAPI) => {
    try {
      return await MovieService.upcoming();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const videosMovies = createAsyncThunk(
  "movie/videos",
  async (moviesID, thunkAPI) => {
    try {
      return await MovieService.videosMovies(moviesID);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const searchAmovie = createAsyncThunk(
  "movie/search",
  async (nameSearch, thunkAPI) => {
    try {
      return await MovieService.searchToMovie(nameSearch);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const movieDetailID = createAsyncThunk(
  "movie/details",
  async (id, thunkAPI) => {
    try {
      return await MovieService.movieId(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addFavoriteMovie = createAsyncThunk(
  "movie/favorite",
  async (data, thunkAPI) => {
    try {
      return await MovieService.addToFavorites(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getFavoritesMovie = createAsyncThunk(
  "movie/get-favorites",
  async (thunkAPI) => {
    try {
      return await MovieService.getFavoriteMovie();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteFavoriteMovie = createAsyncThunk(
  "movie/delete-favorite-movie",
  async (id, thunkAPI) => {
    try {
      return await MovieService.deleteFavoriteMovie(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const movieReviews = createAsyncThunk(
  "movie/reviews",
  async (movieId, thunkAPI) => {
    try {
      return await MovieService.moviesReviews(movieId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const movieRecommendations = createAsyncThunk(
  "movie/recommendations",
  async (movieId, thunkAPI) => {
    try {
      return await MovieService.moviesRecommendations(movieId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const genreMovies = createAsyncThunk(
  "movie/genres",
  async (thunkAPI) => {
    try {
      return await MovieService.movieGenres();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetSeriesState = createAction("Reset-all");

const initialState = {
  popular: [],
  upcoming: [],
  topRated: [],
  currentPage: 1,
  totalPage: 0,
  isError: false,
  isSuccess: false,
  isLoading: false,
  search: false,
  message: "",
};

export const MovieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    searchMoviesState: (state) => {
      state.search = !state.search;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPopularMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPopularMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.popular = action.payload;
      })
      .addCase(getAllPopularMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(getAllUpcomingMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUpcomingMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.upcoming = action.payload;
      })
      .addCase(getAllUpcomingMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      })

      .addCase(getTopRated.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTopRated.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.topRated = action.payload;
      })
      .addCase(getTopRated.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      })

      .addCase(videosMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(videosMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.videoMovies = action.payload;
      })
      .addCase(videosMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(searchAmovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchAmovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.finalQuest = action.payload;
      })
      .addCase(searchAmovie.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(movieDetailID.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(movieDetailID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.details = action.payload;
      })
      .addCase(movieDetailID.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(addFavoriteMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addFavoriteMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.movieFavorite = action.payload;

        if (state.isSuccess) {
          toast.success("Agregada a favoritos");
        }
      })
      .addCase(addFavoriteMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;

        if (state.isError) {
          toast.error("La pelicula no se pudo agregar");
        }
      })
      .addCase(getFavoritesMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFavoritesMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.myFavoritesMovies = action.payload;
      })
      .addCase(getFavoritesMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(deleteFavoriteMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteFavoriteMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deleteMovie = action.payload;

        if (state.isSuccess) {
          toast.success("Se quito de la lista de deseos");
        }
      })
      .addCase(deleteFavoriteMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(movieReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(movieReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.comments = action.payload;
      })
      .addCase(movieReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(movieRecommendations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(movieRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.recommendations = action.payload;
      })
      .addCase(movieRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      })

      .addCase(genreMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(genreMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.genres = action.payload;
      })
      .addCase(genreMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(resetSeriesState, () => initialState);
  },
});

export const { searchMoviesState } = MovieSlice.actions;
export default MovieSlice.reducer;
