const API_KEY ="f4bcb12e5e6024b02f6eba98a49fe67d";

export default {
  "Now Playing": `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
  latest: `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}`,
  Popular:  `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  "Top Rated":`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
  "Up Coming": `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
}
