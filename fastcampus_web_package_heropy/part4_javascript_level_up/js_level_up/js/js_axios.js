import axios from 'axios'

const basicUrl = 'https://www.omdbapi.com/'
const apiKey = '198b039'
const searchWord = 'frozen'
const requestUrl = basicUrl
  .concat('?apikey=')
  .concat(apiKey)
  .concat('&s=')
  .concat(searchWord);

function fetchMovies(requestUrl) {
  axios
    .get(requestUrl)
    .then(response => {
      console.log(response)
      const searchMovieDataArray = response.data.Search

      const movieTitleEl = document.querySelector('.movie-title')
      const moviePosterEl = document.querySelector('.movie-poster')


      movieTitleEl.textContent = searchMovieDataArray[0].Title
      moviePosterEl.src = searchMovieDataArray[0].Poster
    })
    .catch(function (error) {
      console.log(error)
    })
}

console.log(requestUrl)

fetchMovies(requestUrl)