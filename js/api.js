import { getMovieDataElement } from "./movieList.js";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDhhOGQ0ZGNkYjE0YTg1YmI1ZDNhY2Y5MGE1MzRjZCIsIm5iZiI6MTcyODk3NTkyNS40MTA2ODcsInN1YiI6IjY3MGRlMGQxMGI4MDA1MzdkNzVjYmUzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xrOujR-_FTquDf1EWvoJluQ92SntT4Fr3PQDQ660ces",
  },
};

export async function getMovieData(keyword) {
  const randomNum = Math.floor(Math.random() * 31 + 1);
  const url = `https://api.themoviedb.org/3/${
    keyword
      ? `search/movie?language=ko&query=${keyword}`
      : `movie/popular?language=ko&page=${randomNum}`
  }`;
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(res.status);
    }
    let data = await res.json();
    data = data.results;
    console.log(data)
    document.querySelector(".section__list").innerHTML = "";
    await getMovieDataElement(data);
  } catch (error) {
    console.error(error.message);
  }
}
