let listBox = document.querySelector(".list");
document.querySelector("i").style = "display: inline";

async function searchMovie() {
  try {
    let search = document.querySelector("#search").value;

    let res = await fetch(
      `https://www.omdbapi.com/?apikey=eaf4b3f5&s=${search}`
    );

    let bucket = await res.json();

    let moveiArr = bucket.Search;
    
    return moveiArr;
  } catch (error) {
    console.log("error:", error);
  }
}

let timerid;

async function main() {
  try {
    let data = await searchMovie();
    if (data == undefined) {
      return false;
    }
    searchMovie(data);
    displayList(data);
  } catch (error) {
    console.log("error:", error);
  }
}

function debounce(funn, delay) {
  if (timerid) {
    clearTimeout(timerid);
  }

  timerid = setTimeout(function () {
    funn();
  }, delay);
}





function displayList(arr) {
  listBox.innerHTML = null;

  if (arr == undefined) {
    return;
  }

  arr.forEach(function (el) {
    let box = document.createElement("div");
    box.setAttribute("class", "box");

    let photo = document.createElement("img");
    photo.src = el.Poster;
    photo.alt = el.Title;
    photo.setAttribute("class", "photo");

    let title = document.createElement("p");
    title.innerText = el.Title;
    title.setAttribute("class", "title");
    title.addEventListener("click", function () {
      takeMe(el);
    });

    box.append(photo, title);

    listBox.append(box);
  });
}

function takeMe(el) {
  console.log("takeMe", el);

  let imdb = el.imdbID;
  console.log(imdb);
  location.href = "#here";

  singleMovie();

  async function singleMovie() {
    try {
      let response = await fetch(
        `https://www.omdbapi.com/?apikey=eaf4b3f5&i=${imdb}`
      );

      let unique = await response.json();
      appendSingle(unique); 
      console.log("unique:", unique);
    } catch (error) {
      console.log("error:", error);
    }
  }
}

let singleMovieBox = document.querySelector("#here");

function appendSingle(el) {
  let leftDiv = document.createElement("div");
  let rightDiv = document.createElement("div");
  rightDiv.setAttribute("id", "rightDiv");

  singleMovieBox.innerHTML = null;

  let rate = el.imdbRating;

  let singlePoster = document.createElement("img");
  singlePoster.src = el.Poster;

  let title = document.createElement("h1");
  title.innerText = el.Title;

  let genre = document.createElement("p");
  genre.innerText = `Genre: ${el.Genre}`;

  let rated = document.createElement("p");
  rated.innerText = `Rated: ${el.Rated}`;

  let rating = document.createElement("p");
  if (rate > 7.5) {
    rating.innerText = `Imdb: ⭐ ${el.imdbRating} - Recommended`;
  } else rating.innerText = `Imdb: ⭐ ${el.imdbRating} `;

  let runtime = document.createElement("p");
  runtime.innerText = `Runtime: ${el.Runtime}`;

  let cast = document.createElement("h4");
  cast.innerText = `Cast: ${el.Actors}`;

  let plot = document.createElement("h4");
  plot.innerText = `Plot: ${el.Plot}`;

  leftDiv.append(singlePoster);
  rightDiv.append(title, genre, rated, rating, runtime, cast, plot);

  singleMovieBox.append(leftDiv, rightDiv);
}


