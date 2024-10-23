import { handleBookmarkToggle, isBookmarked } from "./bookmark.js";

export function createModal(data) {
  const modalItem = document.createElement("div");
  modalItem.classList.add("modal");
  let modalGenres = [];
  data.genres.forEach((genres) => modalGenres.push(genres.name));
  modalGenres = modalGenres.join(" , ");
  modalItem.innerHTML = `
    <div class="modal__inner">
      <button class="modal__close"></button>
      <div class="modal__flex">
        <div class="modal__img">
          <img src="https://image.tmdb.org/t/p/original${data.poster_path}" />
        </div>
        <div class="modal__cont">
          <p class="modal__info">
          ${data.release_date.slice(0, 4)}년 · ${data.runtime}분
          </p>
          <h2 class="modal__title">${data.title}</h2>
          <p class="modal__vote">평점 : ${data.vote_average.toFixed(1)}</p>
          <p class="modal__genres">
            장르 : ${modalGenres}
          </p>
          <p class="modal__overview">${
            data.overview ? data.overview : "줄거리가 없음"
          }</p>
        </div>
      </div>
      <button class="modal_btn">${
        isBookmarked(data.id) ? "UNMARK" : "MARK"
      }</button>
    </div>
  `;
  document.querySelector(".wrap").appendChild(modalItem);
  const modalCloseBtn = document.querySelector(".modal__close");
  modalCloseBtn.addEventListener("click", closeModal);
  const bookmarkToggleBtn = document.querySelector(".modal_btn");
  bookmarkToggleBtn.addEventListener("click", () => handleBookmarkToggle(data));
}

export function closeModal() {
  const modalItem = document.querySelector(".modal");
  document.body.classList.remove("hidden");
  document.querySelector(".wrap").removeChild(modalItem);
}
