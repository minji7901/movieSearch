import { getMovieData } from "./api.js";
import { search } from "./search.js";
import { getBookmark } from "./bookmark.js";

export const searchInput = document.querySelector(".header__search-input");
const logo = document.querySelector(".header__logo");
logo.addEventListener("click", () => {
  getMovieData();
  searchInput.value = null;
  bookmarkBtn.classList.remove('header__bookmark--active')
});

export const bookmarkBtn = document.querySelector('.header__bookmark');
bookmarkBtn.addEventListener('click', getBookmark)

getMovieData();
search();