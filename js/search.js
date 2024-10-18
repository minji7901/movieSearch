import { getMovieData } from "./api.js";
import { searchInput } from "./main.js";

export function search() {
  const searchBtn = document.querySelector(".header__search-button");
  const handleSearch = () => getMovieData(searchInput.value);
  searchBtn.addEventListener("click", handleSearch);
  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") handleSearch();
  });
  searchInput.addEventListener("input", handleSearch);
}
