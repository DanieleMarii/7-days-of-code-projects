 const input = document.getElementById('pesquisar')
 const button = document.getElementById('search-button')
 const containerMovie = document.getElementsByClassName('container-movie');

input.addEventListener('keyup', function(event){
    if(event.key == "Enter"){
        cleanAllMovies()
        searchMovie()
        return
    }
})

button.addEventListener('click', searchMovie)

async function searchMovie() {
    const inputValue = input.value
    if (inputValue != '') {
      cleanAllMovies()
      const movies = await searchMovieByName(inputValue)
      movies.forEach(movie => renderMovie(movie))
    }
  }

function cleanAllMovies() {
    containerMovie.innerHTML = ''
}


async function searchMovieByName(title){
    getMovieByNameFetch = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=afc1c11ed31663f14dee64875b7f2fa1&query=${title}&language=en-US&page=1`)
    const {results} = await getMovieByNameFetch.json();
    return results
}

async function getMovie(){
    const getMovieFetch = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=afc1c11ed31663f14dee64875b7f2fa1&language=en-US&page=1`)
    const { results } = await getMovieFetch.json();
    return results
}

// window.onload = async function() {
//     const movies = await getMovie()
//     movies.forEach(movie => renderMovie(movie))
// }


function renderMovie(movie){
    const { title, poster_path, vote_average, release_date, overview } = movie

    // criando a div e atribuindo ela ao container dos filmes
    const containerMovies = document.querySelector(".container-movie");
    
    const year = new Date(release_date).getFullYear();
    const image = `https://image.tmdb.org/t/p/w500${poster_path}`

    // criando os cards
    const cardMovie = document.createElement('div');
    cardMovie.classList.add('card-movie');
    containerMovies.appendChild(cardMovie);

    // poster do filme
    const posterMovieContainer = document.createElement('div');
    posterMovieContainer.classList.add('img-movie');
    const posterMovieImg = document.createElement('img');
    posterMovieImg.src = image;
    posterMovieImg.alt = `${title} Poster`
    posterMovieContainer.appendChild(posterMovieImg)
    cardMovie.appendChild(posterMovieContainer)

    // info do filme
    const infoMovieContainer = document.createElement('div')
    infoMovieContainer.classList.add('info-movie');
    cardMovie.appendChild(infoMovieContainer);

    const infoMovieTitle = document.createElement('span');
    infoMovieTitle.textContent = `${title} (${year})`
    infoMovieTitle.classList.add('info-movie-title')
    infoMovieContainer.appendChild(infoMovieTitle)

    const infoMovieRate = document.createElement('span')
    infoMovieRate.textContent = `${vote_average}`
    infoMovieContainer.appendChild(infoMovieRate)

    const infoMovieFav = document.createElement('span')
    infoMovieFav.textContent = 'Favoritar'
    infoMovieContainer.appendChild(infoMovieFav);

    // descrição do filme
    const synopsisMovieContainer = document.createElement('div');
    synopsisMovieContainer.classList.add('synopsis-movie');
    cardMovie.appendChild(synopsisMovieContainer)
    const synopsisMovieText = document.createElement('p');
    synopsisMovieText.textContent = overview;
    synopsisMovieContainer.appendChild(synopsisMovieText);
}
