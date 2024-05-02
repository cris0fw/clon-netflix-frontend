import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../fuatures/user/userSlice";
import MovieReducer from "../fuatures/movies/moviesSlice";
import seriesReducer from "../fuatures/series/seriesSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    movie: MovieReducer,
    serie: seriesReducer,
  },
});
