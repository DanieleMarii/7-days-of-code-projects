async function buscaFilme(idFilme){
    const consultaFilme = await fetch(`https://api.themoviedb.org/3/movie/${idFilme}?api_key=afc1c11ed31663f14dee64875b7f2fa1`)
    const consultaFilmeConvertido = await consultaFilme.json();

    return consultaFilmeConvertido;    
}

window.onload = async function() {
    const movies = await buscaFilme()
    movies.forEach(movie => renderMovie(movie))
  }

  function renderMovie(movie){
    const { title, poster_path, vote_average, release_date, overview } = movie

    // criando a div e atribuindo ela ao container dos filmes
    const containerMovies = document.querySelector(".container-movie");
    console.log(containerMovies);

    // criando os cards
    const cardMovie = document.createElement('div');
    cardMovie.classList.add('card-movie');
    containerMovies.appendChild(cardMovie);

    // poster do filme
    const posterMovieContainer = document.createElement('div');
    posterMovieContainer.classList.add('img-movie');
    const posterMovieImg = document.createElement('img');
    posterMovieImg.src = poster_path;
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
    infoMovieRate.textContent = `${rating}`
    infoMovieContainer.appendChild(infoMovieRate)

    const infoMovieFav = document.createElement('span')
    infoMovieFav.textContent = 'Favoritar'
    infoMovieContainer.appendChild(infoMovieFav);

    // descrição do filme
    const synopsisMovieContainer = document.createElement('div');
    synopsisMovieContainer.classList.add('synopsis-movie');
    cardMovie.appendChild(synopsisMovieContainer)
    const synopsisMovieText = document.createElement('p');
    synopsisMovieText.textContent = description;
    synopsisMovieContainer.appendChild(synopsisMovieText);
}

buscaFilme('551')
buscaFilme('552')
