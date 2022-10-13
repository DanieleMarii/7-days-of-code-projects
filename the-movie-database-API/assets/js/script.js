const fetchMovie = () =>{
  const url = `https://api.themoviedb.org/3/movie/550?api_key=afc1c11ed31663f14dee64875b7f2fa1`
  fetch(url)
  .then(response => response.json())
  .then(movie => {
    console.log(movie);
  })
}

fetchMovie()


function renderMovie(movie){
    const { title, image, rating, year, description, isFavorited } = movie

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

const movies = [
    {
      image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
      title: 'Batman',
      rating: 9.2,
      year: 2022,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isFavorited: false
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
      title: 'Avengers',
      rating: 9.2,
      year: 2019,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isFavorited: false
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
      title: 'Doctor Strange',
      rating: 9.2,
      year: 2022,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isFavorited: true
    },
  ]

console.log(movies);
movies.forEach(movie => renderMovie(movie))