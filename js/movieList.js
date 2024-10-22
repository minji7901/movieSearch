import { getMovieData } from "./api.js";
export async function getMovieDataElement(data) {
  const fragment = document.createDocumentFragment();
  for (const movie of data) {
    const item = createListItem(movie);
    fragment.appendChild(item);
    document.querySelector(".section__list").appendChild(fragment);
  }
}
function createListItem(movie) {
  const listItem = document.createElement("li");
  const vote = movie.vote_average.toFixed(1);
  const day = movie.release_date.slice(0, 4);
  listItem.innerHTML = `
    <div class="section__list-imgbox">
      <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" class="section__list-img" />
      <span class="section__list-vote">⭐${vote}</span>
    </div>
    <p class="section__list-title">${movie.title}</p>
    <p class="section__list-day">${day}</p>
  `;
  listItem.addEventListener("click", () => {
    document.querySelector("body").classList.add("hidden");
    getMovieData(false, movie.id);
  });

  const listItemParent = document.querySelector(".section__list");
  listItemParent.addEventListener("mouseenter", (event) => {
    if(event.target.tagName !== 'LI'){
      listItem.style.opacity = "0.3";
    }
    document.querySelector("header").style.opacity = "0.3";
  });
  listItemParent.addEventListener("mouseleave", (event) => {
    if(event.target.tagName !== 'LI'){
      listItem.style.opacity = "1";
    }
    document.querySelector("header").style.opacity = "1";
  });
  return listItem;
}
