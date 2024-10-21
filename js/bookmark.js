import { getMovieData } from "./api.js";
import { bookmarkBtn } from "./main.js";
import { getMovieDataElement } from "./movieList.js";

export function getBookmark() {
  if (!localStorage.key(0)) {
    alert("저장된 북마크가 없습니다");
    return;
  } else {
    bookmarkBtn.classList.toggle("header__bookmark--active");
    if (bookmarkBtn.classList.contains("header__bookmark--active")) {
      const bookmarkData = Array.from(
        { length: localStorage.length },
        (_, i) => {
          const key = localStorage.key(i);
          return JSON.parse(localStorage.getItem(key));
        }
      );
      document.querySelector(".section__list").innerHTML = "";
      getMovieDataElement(bookmarkData);
    } else {
      getMovieData();
    }
  }
}

window.addEventListener("bookmarkUpdate", getBookmark);
