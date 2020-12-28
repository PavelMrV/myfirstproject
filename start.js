"use sctrict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ' ');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i < 2; i++) {
   const a = prompt('Один из последних фильмов?', ' '), 
         b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i-- // возвращаем цикл на один назад, каждый раз когда получаем ошибку
    }

   
}

if (personalMovieDB.count < 10) {
    console.log('Ты еще молодоый');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Ты уже знаешь толк в кино');
} else if (personalMovieDB.count >= 30) {
    console.log('Ты задрот кино!');
} else {
    console.log('Ошбибка');
}
console.log(personalMovieDB);




