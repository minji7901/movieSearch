import { getMovieData } from "./api.js";
import { search } from "./search.js";
import { getBookmark } from "./bookmark.js";

export const searchInput = document.querySelector(".header__search-input");
export const bookmarkBtn = document.querySelector('.header__bookmark');

const logo = document.querySelector(".header__logo");
logo.addEventListener("click", () => {
  getMovieData();
  searchInput.value = null;
  bookmarkBtn.classList.remove('header__bookmark--active')
});

bookmarkBtn.addEventListener('click', getBookmark)

getMovieData();
search();