$(function () {

    const trending = document.getElementById('trending');
    const action = document.getElementById('action');
    const romance = document.getElementById('romance');
    const scifi = document.getElementById('sci-fi');
    const horror = document.getElementById('horror');
    const my_api_key = 'fb0e1d8056000a792931a90b40a3515d';
    genres = {
        Action: 28,
        Adventure: 12,
        Animation: 16,
        Comedy: 35,
        Crime: 80,
        Documentary: 99,
        Drama: 18,
        Family: 10751,
        Fantasy: 14,
        Horror: 27,
        Mystery: 9648,
        Romance: 10749,
        Science_Fiction: 878,
        Thriller: 53,
        War: 1052
    }
    loadMovies(genres.Action, my_api_key, action);
    loadMovies(genres.Romance, my_api_key, romance);
    loadMovies(genres.Horror, my_api_key, horror);
    loadMovies(genres.Science_Fiction, my_api_key, scifi);
    loadTrending(my_api_key, trending);
});



async function loadMovies(genre, my_api_key, row) {
    const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${my_api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&vote_average.gte=6&with_genres=${genre}`)
    console.log(res.data)
    addShows(res.data.results, row);

}

function addShows(movies, row) {
    let html = '';
    if (movies) {
        for (let movie of movies) {
            if (movie.poster_path) {
                html +=
                    `<div class="card slider-card">
                    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}"
                        class="card-img" alt="">
                    <div class="card-body">
                        <h2 class="name">${movie.title}</h2>
                        <h6 class="des"></h6>
                        <button class="watchlist-btn">add to watchlist</button>
                    </div>
                </div>`
            }
        }
    } else {
        html += `<h2 class="text-primary">No Results</h2>`;
    }
    row.innerHTML = html;
}

async function loadTrending(my_api_key, row) {
    const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${my_api_key}&media_type=all&time_window=day&language=en-US&include_adult=false`)
    console.log(res.data)
    addTrending(res.data.results, row);
}

function addTrending(movies, row) {
    let html = '';
    if (movies) {
        for (let movie of movies) {
            if (movie.poster_path) {
                html +=
                    `<div class="card slider-card">
                    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}"
                        class="card-img" alt="">
                    <div class="card-body">
                        <h2 class="name">${movie.original_name || movie.title}</h2>
                        <h6 class="des"></h6>
                        <button class="watchlist-btn">add to watchlist</button>
                    </div>
                </div>`
            }
        }
    } else {
        html += `<h2 class="text-primary">No Results</h2>`;
    }
    row.innerHTML = html;
}

