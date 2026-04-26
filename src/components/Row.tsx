import MovieCard from "./MovieCard";

export default function Row({ title, movies }: any) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mb-10 max-w-7xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold mb-5 text-white">{title}</h2>

      <div
        className="
          grid gap-4 gap-y-6
          grid-cols-2
          sm:grid-cols-4
          md:grid-cols-4 
          lg:grid-cols-5
          xl:grid-cols-5
        "
      >
        {movies.map((movie: any) => (
          <div
            key={movie.id}
            className="transform transition duration-300 hover:scale-105 hover:z-10"
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
