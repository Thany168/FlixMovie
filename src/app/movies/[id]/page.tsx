import { getMovieDetail, imageUrl } from "@/lib/tmdb";

export default async function MoviePage({ params }: any) {
  const movie = await getMovieDetail(params.id);

  return (
    <div className="p-6 max-w-6xl mx-auto text-white">
      <img
        src={imageUrl(movie.backdrop_path)}
        className="w-full h-[400px] object-cover rounded-xl mb-6"
      />

      <h1 className="text-3xl md:text-4xl font-bold mb-4">{movie.title}</h1>

      <p className="text-gray-300 max-w-3xl leading-relaxed">
        {movie.overview}
      </p>
    </div>
  );
}
