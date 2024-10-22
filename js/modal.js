export function createModal(data) {
  const modalItem = document.createElement("div");
  modalItem.classList.add("modal");
  modalItem.innerHTML = `
    <div class="modal__inner">
      <button class="modal__close"></button>
      <div class="modal__cont">
        <img src="https://image.tmdb.org/t/p/original${
          data.poster_path
        }" class="modal__img" />
        <p class="modal__title">${data.title}</p>
        <p class="modal__overview">${
          data.overview ? data.overview : "줄거리가 없음"
        }</p>
      </div>
      <button class="modal__add">${
        window.localStorage.getItem(data.title)
          ? "Remove bookmark"
          : "Add bookmark"
      }</button>
    </div>
  `;
  document.querySelector(".wrap").appendChild(modalItem);

  const modalCloseBtn = document.querySelector(".modal__close");
  const bookmarkButton = document.querySelector(".modal__add");

  function modalClose() {
    document.body.classList.remove("hidden");
    document.querySelector(".wrap").removeChild(modalItem);
  }

  function bookmarkToggle() {
    const isBookmarked = window.localStorage.getItem(data.title);
    if (isBookmarked) {
      window.localStorage.removeItem(data.title);
      alert("북마크에서 삭제되었습니다.");
      bookmarkButton.innerHTML = "Add bookmark";
    } else {
      window.localStorage.setItem(data.title, JSON.stringify(data));
      alert("북마크에 추가되었습니다.");
      bookmarkButton.innerHTML = "Remove bookmark";
    }
    if (document.querySelector(".header__bookmark--active")) {
      window.dispatchEvent(new CustomEvent("bookmarkUpdate"));
    }
    modalClose();
  }

  modalCloseBtn.addEventListener("click", modalClose);
  bookmarkButton.addEventListener("click", bookmarkToggle);
}
