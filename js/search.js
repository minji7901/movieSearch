import { getMovieData } from "./api.js";
const searchInput = document.querySelector(".header__search-input");

export function search() {
  const searchBtn = document.querySelector(".header__search-button");

  function debounce(func, delay) {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  const debounceSearch = debounce(handleSearch, 300);

  function handleSearch() {
    let searchInputValue = searchInput.value;
    const regexValue = (searchInputValue.match(/[a-zA-Z가-힣]/gi) || []).join(
      ""
    );
    if (regexValue) {
      getMovieData(regexValue);
    }
  }

  function onEnterKey(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  searchBtn.addEventListener("click", handleSearch);
  searchInput.addEventListener("keyup", onEnterKey);
  searchInput.addEventListener("input", debounceSearch);
}
