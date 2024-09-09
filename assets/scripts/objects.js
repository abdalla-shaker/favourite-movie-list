const addMovie = {
  title: document.getElementById("title"),
  extraName: document.getElementById("extra-name"),
  extraValue: document.getElementById("extra-value"),
  button: document.getElementById("add-movie-btn"),
};

const searchMovie = {
  button: document.getElementById("search-btn"),
};

let moviesList = [];

const renderMovies = (filter = "") => {
  const ul = document.getElementById("movie-list");

  if (ul.length === 0) {
    ul.classList.remove("visible");
    return;
  } else {
    ul.classList.add("visible");
  }
  ul.innerHTML = "";

  const filteredMovies = !filter
    ? moviesList
    : moviesList.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const li = document.createElement("li");
    const { info } = movie;
    let { getFormattedInfo } = movie;
    // getFormattedInfo = getFormattedInfo.bind(movie);
    let text = getFormattedInfo.call(movie) + " - ";
    for (const key in info) {
      if (key !== "title" && key !== "_title") {
        text = text + `${key}: ${info[key]}`;
      }
    }
    li.textContent = text;
    ul.appendChild(li);
  });
};

const addMovieHandler = () => {
  const title = addMovie.title.value;
  const extraName = addMovie.extraName.value;
  const extraValue = addMovie.extraValue.value;

  if (extraName.trim() === "" || extraValue.trim() === "") {
    return;
  }

  const newMovie = {
    info: {
      set title(val) {
        if (val.trim() === "") {
          this._title = "DEFAULT";
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: Math.floor(Math.random() * 10),
    getFormattedInfo() {
      return this.info.title.toUpperCase();
    },
  };

  newMovie.info.title = title;

  moviesList.push(newMovie);

  renderMovies();
};

const searchMovieHandler = () => {
  const searchValue = document.getElementById("filter-title").value;
  renderMovies(searchValue);
};

addMovie.button.addEventListener("click", addMovieHandler);
searchMovie.button.addEventListener("click", searchMovieHandler);
