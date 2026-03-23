# 🎬 Movyy — Movie Explorer

A dynamic and responsive movie discovery web application built with vanilla HTML, CSS, and JavaScript. Movyy lets users search, filter, and sort movies using real-time data from the TMDB (The Movie Database) API.

---

## 📌 Purpose

Movyy is designed to help users discover movies effortlessly. Instead of scrolling endlessly, users can search for specific titles, filter by genre or mood, and sort results by rating, popularity, or release date — all in a clean, responsive, and visually appealing interface.

---

## 🔗 API Used

**TMDB — The Movie Database API**
- Base URL: `https://api.themoviedb.org/3`
- Documentation: [https://developer.themoviedb.org/docs](https://developer.themoviedb.org/docs)
- Free tier: Yes (requires free API key)
- Data provided: Movie titles, posters, ratings, genres, release dates, popularity scores, overviews

---

## ✨ Planned Features

### Core Features
-  **API Integration** — Fetch real-time movie data using TMDB API
-  **Movie Cards** — Display movie poster, title, rating, release year, and genre
-  **Loading States** — Spinner shown while data is being fetched
-  **Fully Responsive** — Works on mobile, tablet, and desktop
-  **Search** — Search movies by title in real time
-  **Filter** — Filter movies by genre (Action, Comedy, Horror, Drama, etc.)
-  **Sort** — Sort movies by rating, popularity, or release date (ascending/descending)
-  **Dark / Light Mode** — Toggle between dark and light themes
-  **Watchlist / Favourites** — Save and remove favourite movies

### Bonus Features (Optional)
- 🔎 **Debounced Search** — Optimized search to avoid excessive API calls
- 📄 **Pagination** — Browse movies across multiple pages
- 💾 **Local Storage** — Persist watchlist and theme preference across sessions
- 🔁 **Throttling** — Controlled rate for scroll and button events

---

## 🛠️ Technologies

- HTML, CSS, JavaScript
- TMDB API + Fetch API
- localStorage (for watchlist and theme preference)

---

## 🚀 Setup & Run

1. Clone or download this repository
2. Get a free API key from [TMDB](https://www.themoviedb.org)
3. Add your API key in the project where it says `YOUR_API_KEY`
4. Open `index.html` in your browser and you're good to go!