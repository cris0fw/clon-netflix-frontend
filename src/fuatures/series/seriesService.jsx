import axios from "axios";
import { options, API_KEY, base_url_TMDB } from "../../utils/constants";

const seriesPopular = async () => {
  try {
    const res = await axios.get(`${base_url_TMDB}tv/popular`, options);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const seriesTopRated = async (page) => {
  try {
    const res = await axios.get(
      `${base_url_TMDB}tv/top_rated?api_key=${API_KEY}&page=${page}`,
      options
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const searchSerie = async (nameSerie) => {
  try {
    const res = await axios.get(
      `${base_url_TMDB}search/tv?query=${nameSerie}&include_adult=false&language=en-US&page=1`,
      options
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const detailsSerie = async (idSerie) => {
  try {
    const res = await axios.get(`${base_url_TMDB}tv/${idSerie}`, options);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const seriesReviews = async (idSerie) => {
  try {
    const res = await axios.get(
      `${base_url_TMDB}tv/${idSerie}/reviews`,
      options
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const seriesRecommendations = async (idSerie) => {
  try {
    const res = await axios.get(
      `${base_url_TMDB}tv/${idSerie}/recommendations`,
      options
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const seriesSimilar = async (idSerie) => {
  try {
    const res = await axios.get(
      `${base_url_TMDB}tv/${idSerie}/similar`,
      options
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const seriesGenres = async () => {
  try {
    const res = await axios.get(`${base_url_TMDB}genre/tv/list`, options);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const serieVideo = async (idSerie) => {
  try {
    const res = await axios.get(
      `${base_url_TMDB}tv/${idSerie}/videos`,
      options
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const SeriesService = {
  seriesPopular,
  seriesTopRated,
  searchSerie,
  detailsSerie,
  seriesReviews,
  seriesRecommendations,
  seriesSimilar,
  seriesGenres,
  serieVideo,
};
