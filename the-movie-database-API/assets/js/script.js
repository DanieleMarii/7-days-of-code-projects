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
posterMovieImg.setAttribute('src', 'assets/img/movie.png')
posterMovieContainer.appendChild(posterMovieImg)
cardMovie.appendChild(posterMovieContainer)

// info do filme
const infoMovieContainer = document.createElement('div')
infoMovieContainer.classList.add('info-movie');
cardMovie.appendChild(infoMovieContainer);

const infoMovieTitle = document.createElement('span');
infoMovieTitle.textContent = 'Batman 2022'
infoMovieTitle.classList.add('info-movie-title')
infoMovieContainer.appendChild(infoMovieTitle)

const infoMovieRate = document.createElement('span')
infoMovieRate.textContent = '9.5'
infoMovieContainer.appendChild(infoMovieRate)

const infoMovieFav = document.createElement('span')
infoMovieFav.textContent = 'Favoritar'
infoMovieContainer.appendChild(infoMovieFav);

// descrição do filme
const synopsisMovieContainer = document.createElement('div');
synopsisMovieContainer.classList.add('synopsis-movie');
cardMovie.appendChild(synopsisMovieContainer)
const synopsisMovieText = document.createElement('p');
synopsisMovieText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda, eius possimus dolores accusamus sunt repellendus obcaecati nisi adipisci laudantium hic. Aperiam repellat in officia doloribus, dolores exercitationem nesciunt qui?'
synopsisMovieContainer.appendChild(synopsisMovieText);

