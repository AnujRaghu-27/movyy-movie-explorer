const apiKey = "e06bece643c99856d9b6e125e30c2796"
async function fethAPi(k) {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${k}`)
    const data = await res.json()
    return data.results
}
async function renderMovies(k) {
    const movies = await fethAPi(k)
    const moviesContainer = document.querySelector(".movies-container")
    movies.forEach(movie => {
        const movieElement = document.createElement("div")
        console.log(movie.title)
        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>${movie.overview}</p>
        `
        moviesContainer.appendChild(movieElement)
    })
}
let page = 1
const btn = document.querySelector(".show-more")
btn.addEventListener("click", () => {
    renderMovies(page + 1)
    page++
})
renderMovies(page)