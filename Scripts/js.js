"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let lastMovie = prompt("Один из последних просмотренных фильмов?"),
  ratingMovie = +prompt("Насколько оцените его?");

personalMovieDB.movies[lastMovie] = ratingMovie;

for (const key in personalMovieDB) {
  if (Object.hasOwnProperty.call(personalMovieDB, key)) {
    const element = personalMovieDB[key];
    console.log(element);
  }
}
