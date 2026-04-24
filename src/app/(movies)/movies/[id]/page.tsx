import { fetchMovies, imageUrl } from "@/lib/tmdb";

export default async function MoviePage({ params }: any) {
  const movie = await fetchMovies(`/movie/${params.id}`);

  return (
    <div className="p-6">
      <img
        src={imageUrl(movie.backdrop_path)}
        className="w-full rounded-xl mb-6"
      />

      <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>

      <p className="text-gray-300 max-w-3xl">{movie.overview}</p>
    </div>
  );
}
