async function buscaFilme(idFilme){
    const consultaFilme = await fetch(`https://api.themoviedb.org/3/movie/${idFilme}?api_key=afc1c11ed31663f14dee64875b7f2fa1`)
    const consultaFilmeConvertido = await consultaFilme.json();

    // elementos
    const img = consultaFilmeConvertido.poster_path;
    const title = consultaFilmeConvertido.original_title;
    const year = new Date(consultaFilmeConvertido.release_date).getFullYear();
    const average = +(consultaFilmeConvertido.vote_average.toFixed(1));
    const overview = consultaFilmeConvertido.overview;

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
    posterMovieImg.src = `https://image.tmdb.org/t/p/w500${img}`;

    posterMovieImg.alt = `${title} Poster`
    posterMovieContainer.appendChild(posterMovieImg);
    cardMovie.appendChild(posterMovieContainer);

    // info do filme
    const infoMovieContainer = document.createElement('div')
    infoMovieContainer.classList.add('info-movie');
    cardMovie.appendChild(infoMovieContainer);

    const infoMovieTitle = document.createElement('span');
    infoMovieTitle.textContent = `${title} (${year})`
    infoMovieTitle.classList.add('info-movie-title')
    infoMovieContainer.appendChild(infoMovieTitle)

    const infoMovieRate = document.createElement('span')
    infoMovieRate.textContent = `${average}`
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

    return consultaFilmeConvertido;
}

buscaFilme('550')
buscaFilme('580')
buscaFilme('590')

