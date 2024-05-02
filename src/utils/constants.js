export const base_url = "https://clon-netflix-backend.vercel.app/api/v1/";
const getTokenFromLocalStorage = localStorage.getItem("token");

export const API_KEY = "02ede0b47f66b6b147bd29fbc28b4eb5";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmVkZTBiNDdmNjZiNmIxNDdiZDI5ZmJjMjhiNGViNSIsInN1YiI6IjY2MGExNWQxYTBiZTI4MDE3ZDcxOTFhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.erYQf-pCGpcbrMD-ZzsjGlUqn0g2efdMybAkISxqDAw",
  },
};

export const config = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage || ""}`,
    Accept: "application/json",
    "Cache-control": "no-cache",
  },
};

export const base_url_TMDB = "https://api.themoviedb.org/3/";

export const TMDB_URL_IMAGE = "https://image.tmdb.org/t/p/w500";
