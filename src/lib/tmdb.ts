const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN = process.env.TMDB_ACCESS_TOKEN;

const fetchMovies = async (endpoint: string) => {
  // console.log("TOKEN:", TOKEN ? " Found" : " UNDEFINED - Check .env.local");

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("API Error:", res.status, res.statusText);
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  return res.json();
};

export const getTrending = () => fetchMovies("/trending/movie/week");
export const getPopular = () => fetchMovies("/movie/popular");
export const getTopRated = () => fetchMovies("/movie/top_rated");
export const getMovieDetail = (id: string) =>
  fetchMovies(`/movie/${id}?append_to_response=videos,credits`);
export const searchMovies = (query: string) =>
  fetchMovies(`/search/movie?query=${encodeURIComponent(query)}`);

export const imageUrl = (path: string, size = "w500") =>
  `https://image.tmdb.org/t/p/${size}${path}`;

export const backdropUrl = (path: string) =>
  `https://image.tmdb.org/t/p/original${path}`;
