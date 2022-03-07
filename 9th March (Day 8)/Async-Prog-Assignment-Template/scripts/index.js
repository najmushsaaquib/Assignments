console.log(dataArr);

let id;

let i = 1;

let images = JSON.parse(localStorage.getItem("data"));

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
