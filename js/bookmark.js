import { getMovieDataElement } from "./movieList.js";

export function getBookmark() {
  if (!localStorage.key(0)) {
    alert("저장된 북마크가 없습니다");
    return;
  } else {
    const bookmarkData = Array.from({ length: localStorage.length }, (_, i) => {
      const key = localStorage.key(i);
      return JSON.parse(localStorage.getItem(key));
    });
    document.querySelector(".section__list").innerHTML = "";
    getMovieDataElement(bookmarkData);
  }
}

window.addEventListener('bookmarkUpdated', getBookmark);