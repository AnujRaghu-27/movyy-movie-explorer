const apiKey = "e06bece643c99856d9b6e125e30c2796";

let currentMovies = [];
let favouriteMovies = [];

const genreMap = {
    Action: 28,
    Comedy: 35,
    Horror: 27,
    Drama: 18,
    "Sci-Fi": 878,
    Romance: 10749,
    Animation: 16
};

async function fetchApi(page = 1, genreId = "") {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`;
    if (genreId) url += `&with_genres=${genreId}`;

    const res = await fetch(url);
    const data = await res.json();
    return data.results;
}


async function loadMovies() {
    let allMovies = [];

    for (let i = 1; i <= 5; i++) {
        const movies = await fetchApi(i);
        allMovies = allMovies.concat(movies);
    }

    currentMovies = allMovies;
    renderMoviesHTML(currentMovies);
}


function renderMoviesHTML(movies) {
    const container = document.querySelector(".movies-container");
    container.innerHTML = "";

    movies.forEach((movie) => {
        const isFav = favouriteMovies.some((m) => m.id === movie.id);

        let favIcon = "🤍";
        if (isFav) favIcon = "❤️";

        const html = `
            <div class="movie-card">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                <button class="fav-btn" data-id="${movie.id}">${favIcon}</button>
                <h2>${movie.title}</h2>
                <p>${movie.overview}</p>
            </div>
        `;

        container.innerHTML += html;
    });
}


document.querySelector("#sort").addEventListener("change", (e) => {
    const value = e.target.value;

    if (value === "rating") {
        currentMovies.sort((a, b) => b.vote_average - a.vote_average);
    } else if (value === "date") {
        currentMovies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    } else if (value === "popularity") {
        currentMovies.sort((a, b) => b.popularity - a.popularity);
    }

    renderMoviesHTML(currentMovies);
});


document.querySelector("#dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


document.querySelector(".genres").addEventListener("click", async (e) => {
    if (e.target.tagName !== "BUTTON") return;

    const genreId = genreMap[e.target.innerText];

    const buttons = document.querySelectorAll(".genres button");
    buttons.forEach((btn) => btn.style.color = "initial");
    e.target.style.color = "red";

    const movies = await fetchApi(1, genreId);
    currentMovies = movies;
    renderMoviesHTML(currentMovies);
});


document.querySelector("#search").addEventListener("keyup", (e) => {
    const query = e.target.value.toLowerCase();

    const filtered = currentMovies.filter((movie) => {
        const title = movie.title.toLowerCase();
        const overview = movie.overview.toLowerCase();

        return title.includes(query) || overview.includes(query);
    });

    renderMoviesHTML(filtered);
});


document.querySelector(".movies-container").addEventListener("click", (e) => {
    if (!e.target.classList.contains("fav-btn")) return;

    const movieId = parseInt(e.target.dataset.id);
    const exists = favouriteMovies.some((m) => m.id === movieId);

    if (exists) {
        favouriteMovies = favouriteMovies.filter((m) => m.id !== movieId);
    } else {
        const movie = currentMovies.find((m) => m.id === movieId);
        if (movie) favouriteMovies.push(movie);
    }

    document.querySelector("#fav-count").innerText =
        `Favourites: ${favouriteMovies.length}`;

    renderMoviesHTML(currentMovies);
});

loadMovies();