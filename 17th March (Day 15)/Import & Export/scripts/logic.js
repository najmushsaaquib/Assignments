const getData = async (url) => {
  try {
    let res = await fetch(url);

    let data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

// ! appeding data to parent parameter

const append = (data, parent) => {
  parent.innerHTML = null;

  data.forEach(({ title, image, price }) => {
    let div = document.createElement("div");

    let myTitle = document.createElement("p");
    myTitle.textContent = title;

    let img = document.createElement("img");
    img.src = image;

    let myPrice = document.createElement("p");
    myPrice.textContent = price;

    div.append(img, myTitle, myPrice);

    parent.append(div);
  });
};

export { getData, append };
