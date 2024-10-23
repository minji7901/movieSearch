import { getMovieData } from "./api.js";
import { closeModal } from "./modal.js";
import { getMovieDataElement } from "./movieList.js";

function getBookmarks() {
  return JSON.parse(localStorage.getItem("movies")) || [];
}

export function isBookmarked(movieId) {
  const existingData = getBookmarks();
  return existingData.some((movie) => movie.id === movieId);
}
function addBookmark(movieData) {
  const bookmarks = getBookmarks();
  bookmarks.push(movieData);
  localStorage.setItem("movies", JSON.stringify(bookmarks));
  alert("북마크에 추가되었습니다.");
}
function removeBookmark(movieId) {
  let bookmarks = getBookmarks();
  bookmarks = bookmarks.filter((movie) => movie.id !== movieId);
  localStorage.setItem("movies", JSON.stringify(bookmarks));
  alert("북마크에서 삭제되었습니다.");
  window.dispatchEvent(new CustomEvent("bookmarkUpdated"));
}
export function handleBookmarkToggle(data) {
  const bookmarkToggleBtn = document.querySelector(".modal_btn");
  const isBookmarkedMovie = isBookmarked(data.id);
  if (isBookmarkedMovie) {
    removeBookmark(data.id);
    bookmarkToggleBtn.innerHTML = "MARK";
  } else {
    addBookmark(data);
    bookmarkToggleBtn.innerHTML = "UNMARK";
  }
  closeModal();
}

export function displayBookmarked() {
  const bookmarkBtn = document.querySelector(".nav__bookmark");
  const wrap = document.querySelector(".wrap");
  if (!localStorage.key(0)) {
    alert("저장된 북마크가 없습니다");
    return;
  } else if (localStorage.getItem("movies") === "[]") {
    alert("저장된 북마크가 없습니다");
    bookmarkBtn.classList.remove("nav__bookmark--active");
    wrap.classList.remove("wrap--pointer-none");
    return getMovieData();
  }
  const sectionList = document.querySelector(".section__list");
  const bookmarkData = getBookmarks();

  sectionList.innerHTML = "";
  wrap.classList.add("wrap--pointer-none");
  bookmarkBtn.classList.add("nav__bookmark--active");
  getMovieDataElement(bookmarkData);
}

window.addEventListener("bookmarkUpdated", displayBookmarked);
