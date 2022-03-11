let box = document.querySelector(".append");

async function searchMovie() {
  try {
    let searchedMovie = document.querySelector("#search").value;

    let res = await fetch(
      `https://www.omdbapi.com/?apikey=eaf4b3f5&s=${searchedMovie}`
    );

    let data = await res.json();
    console.log("data:", data);
    let mArr = data.Search;
    console.log("mArr:", mArr);

    appendMovies(mArr);
  } catch (error) {
    console.log("error:", error);
    alert("Please  provide a valid Movie name");
  }
}

function appendMovies(data) {
  box.innerHTML = null;

  data.forEach(function (el) {
    let main = document.createElement("div");
    main.setAttribute("class", "main");

    let photo = document.createElement("img");
    photo.src = el.Poster;
    photo.setAttribute("class", "poster");

    let title = document.createElement("h3");
    title.innerText = el.Title;

    let year = document.createElement("p");
    year.innerText = el.Year;

    main.append(photo, title, year);

    box.append(main);
  });
}
