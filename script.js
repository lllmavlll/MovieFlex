
import { API_KEY } from "./ignore/apikey.js";

let search = document.getElementById("searchBox");
let searchButton = document.getElementById("btn");
let search1 = document.getElementById("searchBox1");
let searchButton1 = document.getElementById("btn1");

//---------when the search icon is clicked this functoin runs------

searchButton.addEventListener("click", () => {
  fetch(
    "https://imdb8.p.rapidapi.com/auto-complete?q=" +
      search.value +
      "&appid=" +
      API_KEY,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
        "X-RapidAPI-Key": API_KEY,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const list = data.d;
      list.map((item) => {
        const name = item.l;
        const poster = item.i.imageUrl;
        const movie = ` <li><img src="${poster}"><h2>${name}</h2></li>`;
        document.querySelector(".movie-card").innerHTML += movie;
      });
    })
    .catch((err) => {
      console.error(err);
    });
});
searchButton1.addEventListener("click", () => {
  fetch(
    "https://imdb8.p.rapidapi.com/auto-complete?q=" +
      search1.value +
      "&appid=" +
      API_KEY,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
        "X-RapidAPI-Key": API_KEY,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const list = data.d;
      list.map((item) => {
        const poster = item.i.imageUrl;
        const name = item.l;
        const movie = ` <li><img src="${poster}"><h2>${name}</h2></li>`;
        document.querySelector(".movie-card").innerHTML += movie;
      });
    })
    .catch((err) => {
      console.error(err);
    });
});

$(document).ready(() => {
  $("#btn").click(() => {
    $("#pop").hide();
  });
  $("#btn1").click(() => {
    $("#pop").hide();
  });
});
