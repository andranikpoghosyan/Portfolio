const API_KEY = "903098613cbb00a1e89747dbf4a24a6a";

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,

  fetchTrending: `/trending/all/week?api_key=${API_KEY}&languages=en-US`,

  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&languages=en-US`,

  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,

  fetchCartoons: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
};

export default requests;
