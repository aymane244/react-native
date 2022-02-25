const API_TOKEN = '26e9cc16b023ba201e44a7b69fb92467';

export function getFilms(text){
    const url = "https://api.themoviedb.org/3/search/movie?api_key=" + API_TOKEN + "&language=fr&query=" + text;

    return fetch(url)
    .then((response)=> response.json())
    .catch((error)=> console.log(error));
}
export function getImageFilm(name){
    return 'https://image.tmdb.org/t/p/w300' + name;
}
export function getFilmDetails(id){
    const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN +'&language=fr';
    return fetch(url)
    .then((response)=> response.json())
    .catch((error)=> console.log(error));
}