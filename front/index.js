const main = document.querySelector("main");
const container = document.getElementsByClassName("toughts-container");

const xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:9001/toughts");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onerror = function () {
  const card = document.createElement("div");
  const error = document.createElement("p");
  error.textContent = "There was an error connecting to the server";
  card.appendChild(error);
  card.style.display = "flex";
  card.style.justifyContent = "center";
  card.style.marginTop = "50px";
  main.append(card);
};

xhr.onload = () => {
  if (xhr.status === 200) {
    const toughts = JSON.parse(xhr.responseText);
    toughts.forEach((tought) => {
      // create the elemente
      const figure = document.createElement("figure");
      const blockquote = document.createElement("blockquote");
      const figcaption = document.createElement("figcaption");

      // set the content and attributes
      blockquote.textContent = tought.title;
      figcaption.textContent = `por ${tought.actor}`;

      // append the elements to the card
      figure.appendChild(blockquote);
      figure.appendChild(figcaption);
      // append the card to the main element
      container[0].appendChild(figure);
    });
  } else {
    console.error(`Error: ${xhr.status}`);
  }
};
xhr.send();
