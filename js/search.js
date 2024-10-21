import { getMovieData } from "./api.js";
import { searchInput } from "./main.js";

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
  const handleSearch = () => {
    let searchInputValue = searchInput.value;
    const regexValue = (searchInputValue.match(/[a-zA-Z가-힣]/gi) || []).join(
      ""
    );
    if (regexValue) getMovieData(regexValue);
  };
  const debounceSearch = debounce(handleSearch, 300);
  searchBtn.addEventListener("click", handleSearch);
  searchInput.addEventListener(
    "keyup",
    (e) => e.key === "Enter" && handleSearch
  );
  searchInput.addEventListener("input", debounceSearch);
}
