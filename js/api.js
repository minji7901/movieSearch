import { createModal } from "./modal.js";
import { getMovieDataElement } from "./movieList.js";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDhhOGQ0ZGNkYjE0YTg1YmI1ZDNhY2Y5MGE1MzRjZCIsIm5iZiI6MTcyODk3NTkyNS40MTA2ODcsInN1YiI6IjY3MGRlMGQxMGI4MDA1MzdkNzVjYmUzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xrOujR-_FTquDf1EWvoJluQ92SntT4Fr3PQDQ660ces",
  },
};
const BASE_URL = "https://api.themoviedb.org/3";
const LANGUAGE_PARAM = "language=ko-kr";

export async function getMovieData(keyword, videoId) {
  const randomNum = Math.floor(Math.random() * 31 + 1);
  const url = videoId
    ? `${BASE_URL}/movie/${videoId}?${LANGUAGE_PARAM}`
    : `${BASE_URL}/${
        keyword
          ? `search/movie?${LANGUAGE_PARAM}&query=${keyword}`
          : `movie/popular?${LANGUAGE_PARAM}&page=${randomNum}`
      }`;
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(res.status);
    }
    let data = await res.json();
    if (!videoId) {
      data = data.results
      document.querySelector(".section__list").innerHTML = "";
      await getMovieDataElement(data);
    } else {
      createModal(data);
    }
  } catch (error) {
    console.error(error.message);
  }
}
