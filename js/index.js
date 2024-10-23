import { getMovieData } from "./api.js";
import { search } from "./search.js";
import { displayBookmarked } from "./bookmark.js";

const searchInput = document.querySelector(".header__search-input");
const bookmarkBtn = document.querySelector(".nav__bookmark");
const homeBtn = document.querySelector(".nav__home");
const wrap = document.querySelector('.wrap');

const handleHomeClick = () => {
  getMovieData();
  searchInput.value = "";
  wrap.classList.remove("wrap--pointer-none");
};
const init = () => {
  homeBtn.addEventListener("click", handleHomeClick);
  bookmarkBtn.addEventListener("click", displayBookmarked);
  getMovieData();
  search();
};
init();
