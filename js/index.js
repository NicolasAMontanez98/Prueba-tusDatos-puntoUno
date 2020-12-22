$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

const api_key = "3cbb6f6e84e5b0b569e64823ee65a1c8";

const moviExample = {
  adult: false,
  backdrop_path: "/tYkMtYPNpUdLdzGDUTC5atyMh9X.jpg",
  genre_ids: [28, 53, 80, 18],
  id: 553604,
  original_language: "en",
  original_title: "Honest Thief",
  overview:
    "A bank robber tries to turn himself in because he's falling in love and wants to live an honest life...but when he realizes the Feds are more corrupt than him, he must fight back to clear his name.",
  popularity: 2185.404,
  poster_path: "/zeD4PabP6099gpE0STWJrJrCBCs.jpg",
  release_date: "2020-09-03",
  title: "Honest Thief",
  video: false,
  vote_average: 7,
  vote_count: 230,
};

let data = null;

const imageUrlSM = "https://image.tmdb.org/t/p/w200/";
const imageUrlMD = "https://image.tmdb.org/t/p/w300/";
const imageUrlLG = "https://image.tmdb.org/t/p/w500/";

// Movie list
const movieList = document.getElementById("movieList");

// Movie card
const movieItem = document.createElement("div");
movieItem.className += "card text-center";
// Movie card-header
const movieItemHeader = document.createElement("div");
movieItemHeader.className += "card-header";
const movieTitle = document.createElement("a");
movieTitle.className += "font-weight-bolder";
movieTitle.href += "/";
movieTitle.target = "_blank";
// Movie card-header
// Movie card-body
const movieItemBody = document.createElement("div");
movieItemBody.className += "px-0 py-0";
const movieHeaderPoster = document.createElement("img");
movieItemBody.className += "card-body";
movieItemBody.appendChild(movieHeaderPoster);
// Movie card-body
// Movie card

//Movie tooltip
movieHeaderPoster.setAttribute("data-toggle", "tooltip");
movieHeaderPoster.setAttribute("data-placement", "top");
movieHeaderPoster.title += "Tooltip on top";
//Movie tooltip

movieHeaderPoster.src += imageUrlSM + moviExample.poster_path;
movieTitle.textContent = moviExample.title;
movieItemHeader.appendChild(movieTitle);

// movieItem.appendChild(movieItemHeader);
movieItem.appendChild(movieItemBody);
movieList.appendChild(movieItem);

// modal-info
const modal = document.createElement("div");
modal.className += "modal fade";
modal.setAttribute("id", "modalMovie");
modal.setAttribute("tabindex", "-1");
modal.setAttribute("aria-labelledby", "movieModalLabel");
modal.setAttribute("aria-hidden", "true");
const modalDialog = document.createElement("div");
modalDialog.className += "model-dialog";
modal.appendChild(modalDialog);
const modalContent = document.createElement("div");
modalContent.className += "modal-content";
modalDialog.appendChild(modalContent);
const modalHeader = document.createElement("div");
modalHeader.className += "modal-header";
const modalBody = document.createElement("div");
modalBody.className += "modal-body";
const modalFooter = document.createElement("div");
modalFooter.className += "modal-footer";
modalContent.appendChild(modalHeader);
modalContent.appendChild(modalBody);
modalContent.appendChild(modalFooter);
const modalTitle = document.createElement("h5");
modalTitle.className += "modal-title";
modalTitle.id = "movieModalLabel";
modalTitle.textContent = moviExample.title;
const buttonClose = document.createElement("button");
buttonClose.className += "close";
buttonClose.setAttribute("type", "button");
buttonClose.setAttribute("data-dismiss", "modal");
buttonClose.setAttribute("aria-label", "close");
const spanClose = document.createElement("span");
spanClose.setAttribute("aria-hidden", "true");
spanClose.textContent = "&times;";
buttonClose.appendChild(spanClose);
modalHeader.appendChild(buttonClose);
modalBody.textContent =
  "Esto es un modal, que grande si funciona y si no pues también";
const buttonMovieUrl = document.createElement("button");
buttonMovieUrl.setAttribute("type", "button");
buttonMovieUrl.className += "btn btn-primary";
buttonMovieUrl.textContent = "Más información";
modalFooter.appendChild(buttonMovieUrl);
// modal-info

fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=3cbb6f6e84e5b0b569e64823ee65a1c8&language=en-US&page=1"
)
  .then((res) => {
    return res.json();
  })
  .then(({ results }) => {
    console.log("Grande maquina!", results);
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
    results.map((movie, index) => {
      // Movie card
      const movieItem = document.createElement("div");
      movieItem.className += "card text-center";
      movieItem.style += "width: 18rem;";
      // Movie card-header
      const movieItemHeader = document.createElement("div");
      movieItemHeader.className += "card-header";
      const movieTitle = document.createElement("a");
      movieTitle.className += "font-weight-bolder";
      movieTitle.href += "/";
      movieTitle.target = "_blank";
      // Movie card-header
      // Movie card-body
      const movieItemBody = document.createElement("div");
      movieItemBody.className += "px-0 py-0 ";
      const movieHeaderPoster = document.createElement("img");
      movieItemBody.className += "card-body";
      movieItemBody.appendChild(movieHeaderPoster);
      // Movie card-body
      movieHeaderPoster.src += imageUrlSM + movie.poster_path;
      movieTitle.textContent = movie.title;
      movieItemHeader.appendChild(movieTitle);

      // movieItem.appendChild(movieItemHeader);
      movieItem.appendChild(movieItemBody);
      movieList.appendChild(movieItem);
      // Movie card
      //Movie tooltip
      movieHeaderPoster.setAttribute("data-toggle", "tooltip");
      movieHeaderPoster.setAttribute("data-placement", "top");
      movieHeaderPoster.title += movie.title;
      //Movie tooltip
    });
  })
  .catch((err) => console.log(err));
