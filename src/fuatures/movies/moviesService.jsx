import axios from "axios";
import {
  API_KEY,
  base_url,
  base_url_TMDB,
  config,
  options,
} from "../../utils/constants";

const popularMovie = async () => {
  try {
    const res = await axios.get(`${base_url_TMDB}movie/popular`, options);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const topRated = async (page) => {
  try {
    const res = await axios.get(
      `${base_url_TMDB}movie/top_rated?api_key=${API_KEY}&page=${page}`,
      options
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const upcoming = async () => {
  try {
    const res = await axios.get(`${base_url_TMDB}movie/upcoming`, options);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const videosMovies = async (movieID) => {
  try {
    const res = await axios.get(
      `${base_url_TMDB}movie/${movieID}/videos`,
      options
    );
    return res.data.results.filter((video) => video.type === "Trailer");
  } catch (error) {
    console.log(error);
  }
};

const searchToMovie = async (nameMovie) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${nameMovie}&include_adult=false&language=en-US&page=1`,
      options
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const movieId = async (id) => {
  try {
    const res = await axios.get(`${base_url_TMDB}movie/${id}`, options);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const addToFavorites = async (data) => {
  try {
    const res = await axios.post(`${base_url}auth/addFavorites`, data, config);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getFavoriteMovie = async () => {
  try {
    const res = await axios.get(`${base_url}auth/moviesFavorites`, config);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteFavoriteMovie = async (id) => {
  try {
    const res = await axios.delete(`${base_url}auth/deleteAdd/${id}`, config);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const moviesReviews = async (movieId) => {
  try {
    const res = await axios.get(
      `${base_url_TMDB}movie/${movieId}/reviews`,
      options
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const moviesRecommendations = async (movieId) => {
  try {
    const res = await axios.get(
      `${base_url_TMDB}movie/${movieId}/recommendations`,
      options
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const movieGenres = async () => {
  try {
    const res = await axios.get(`${base_url_TMDB}genre/movie/list`, options);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const MovieService = {
  popularMovie,
  upcoming,
  videosMovies,
  searchToMovie,
  movieId,
  addToFavorites,
  getFavoriteMovie,
  deleteFavoriteMovie,
  moviesReviews,
  moviesRecommendations,
  topRated,
  movieGenres,
};
