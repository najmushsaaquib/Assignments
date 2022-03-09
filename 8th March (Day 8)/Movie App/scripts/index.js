console.log(dataArr);

let id;

let i = 1;

let images = JSON.parse(localStorage.getItem("movies"));

slideshow.innerHTML = null; // So that only a sinle image append at a time

let img = document.createElement("img");
img.src = images[i].img;

slideshow.append(img);

id = setInterval(function callMe() {
  if (i === images.length) i = 0; // Making it a loop or kinda circular que

  let image = images[i].img; // access of URL

  slideshow.innerHTML = null; // So that only a sinle image append at a time

  let img = document.createElement("img");
  img.src = image;

  slideshow.append(img);

  i++;
}, 3000);

// Appending all the  movies data below

let movieArr = JSON.parse(localStorage.getItem("movies"));

display(movieArr);

function display(movieArr) {
  document.querySelector("#movies").innerHTML = null;

  movieArr.map(function (el, ind) {
    let container = document.createElement("div");
    container.setAttribute("id", "container");

    let image = document.createElement("img");
    image.src = el.img;

    let title = document.createElement("h2");
    title.innerHTML = el.name;
    title.setAttribute("id", "title");

    let genre = document.createElement("p");
    genre.innerHTML = "Genre: " + el.genre;
    genre.setAttribute("id", "genre");

    let rating = document.createElement("p");
    rating.innerHTML = "Rating: " + el.rating + "⭐";
    rating.setAttribute("id", "rating");

    container.append(image, title, genre, rating);

    document.querySelector("#movies").append(container);
  });
}

// ! Sorting Functinality

function sortme() {
  let sort = document.querySelector("#sort").value;

  if (sort == "") {
    display(movieArr);
    console.log("Empty Sort");
  } else if (sort == "sort-lh") {
    for (let i = 0; i < movieArr.length - 1; i++) {
      for (let j = 0; j < movieArr.length - i - 1; j++) {
        if (movieArr[j].rating > movieArr[j + 1].rating) {
          swap(j, j + 1, movieArr);
        }
      }
    }
    display(movieArr);
    console.log(movieArr);
  } else if (sort == "sort-hl") {
    for (let i = 0; i < movieArr.length - 1; i++) {
      for (let j = 0; j < movieArr.length - i - 1; j++) {
        if (movieArr[j].rating < movieArr[j + 1].rating) {
          swap(j, j + 1, movieArr);
        }
      }
    }
    display(movieArr);
    console.log(movieArr);
  }
}

function swap(a, b, arr) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}
