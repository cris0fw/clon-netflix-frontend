import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Browse from "../pages/Browse";
import Register from "../pages/Register";
import Home from "../pages/Home";
import ProtectedRoutes from "./ProtectedRoutes";
import MovieDetails from "../pages/MovieDetails";
import OpenRoutes from "./OpenRoutes";
import MyList from "../pages/MyList";
import SearchMovieOrSerie from "../pages/SearchMovieOrSerie";
import Movies from "../pages/Movies";
import Series from "../pages/Series";
import VideoMovies from "../pages/VideoMovies";
import SerieDetails from "../pages/SerieDetails";
import VideoSeries from "../pages/VideoSeries";
import Profile from "../pages/Profile";

const Body = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <OpenRoutes>
              <Home />
            </OpenRoutes>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <OpenRoutes>
              <Login />
            </OpenRoutes>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <OpenRoutes>
              <Register />
            </OpenRoutes>
          }
        ></Route>

        <Route
          path="/browse"
          element={
            <ProtectedRoutes>
              <Browse />
            </ProtectedRoutes>
          }
        ></Route>

        <Route
          path="/movie-detail/:id"
          element={
            <ProtectedRoutes>
              <MovieDetails />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/serie-detail/:id"
          element={
            <ProtectedRoutes>
              <SerieDetails />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/my-list"
          element={
            <ProtectedRoutes>
              <MyList />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/search"
          element={
            <ProtectedRoutes>
              <SearchMovieOrSerie />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/movies"
          element={
            <ProtectedRoutes>
              <Movies />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/series"
          element={
            <ProtectedRoutes>
              <Series />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/video-background/:id"
          element={
            <ProtectedRoutes>
              <VideoMovies />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/serie-background/:id"
          element={
            <ProtectedRoutes>
              <VideoSeries />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
