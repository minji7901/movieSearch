const searchBtn = document.querySelector(".header__search-button");
searchBtn.addEventListener("click", () => {
  searchBtn.parentElement.classList.toggle("header__search--active");
});

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDhhOGQ0ZGNkYjE0YTg1YmI1ZDNhY2Y5MGE1MzRjZCIsIm5iZiI6MTcyODk3NTkyNS40MTA2ODcsInN1YiI6IjY3MGRlMGQxMGI4MDA1MzdkNzVjYmUzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xrOujR-_FTquDf1EWvoJluQ92SntT4Fr3PQDQ660ces",
  },
};

async function getMovieData() {
  const url = "https://api.themoviedb.org/3/movie/popular?language=ko&page=1";
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(res.status);
    }
    let data = await res.json();
    data = data.results;
    movieDataElement(data);
  } catch (error) {
    console.error(error.message);
  }
}

async function movieDataElement(video) {
  const list = document.querySelector(".section__list");
  const fragment = document.createDocumentFragment();
  video.forEach((element, i) => {
    const vote = element.vote_average.toFixed(1);
    const day = element.release_date.slice(0, 4);
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <dialog class="modal">
        <button class="modal__close" onclick="this.parentElement.close()"></button>
        <img src="https://image.tmdb.org/t/p/original${
          element.poster_path
        }" class="modal__img" />
        <p class="modal__title">${element.title}</p>
        <p class="modal__overview">${
          element.overview ? element.overview : "줄거리가 없음"
        }</p>
        <button class="modal__add"">Add bookmark</button>
      </dialog>
      <div class="section__list-item" onclick="this.previousElementSibling.showModal()">
        <div class="section__list-imgbox">
          <img src="https://image.tmdb.org/t/p/original${
            element.poster_path
          }" class="section__list-img" />
          <span class="section__list-vote">⭐${vote}</span>
        </div>
        <p class="section__list-title">${element.title}</p>
        <p class="section__list-day">${day}</p>
      </div>
    `;
    const bookmarkAddButton = listItem.querySelector(".modal__add");
    bookmarkAddButton.addEventListener("click", () => {
      if (window.localStorage.getItem(element.title)) {
        alert("북마크에 이미 추가되었습니다.");
        return;
      }
      window.localStorage.setItem(element.title, JSON.stringify(element));
      alert("북마크에 추가되었습니다.");
    });
    fragment.appendChild(listItem);
  });
  list.appendChild(fragment);
}

getMovieData();
