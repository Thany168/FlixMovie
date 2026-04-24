import { getMovieDetail, imageUrl, backdropUrl } from "@/lib/tmdb";

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie = await getMovieDetail(id);

  const trailer = movie.videos?.results?.find(
    (v: any) => v.type === "Trailer" && v.site === "YouTube"
  );

  const genres = movie.genres?.map((g: any) => g.name).join(" · ");
  const runtime = movie.runtime
    ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
    : null;

  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: "linear-gradient(135deg, #0a0a0f 0%, #0d1117 50%, #0a0f1a 100%)",
      }}
    >
      {/* Hero Backdrop */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img
          src={backdropUrl(movie.backdrop_path)}
          alt={movie.title}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-transparent to-transparent" />
      </div>

      {/* Main Content */}
 <div className="max-w-[1250px] mx-auto px-6 -mt-40 relative z-10 pb-16">
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

    {/* LEFT — TRAILER (60%) */}
    <div className="lg:col-span-3">
      {trailer ? (
        <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black"
          style={{ aspectRatio: "16/9" }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}?rel=0&modestbranding=1`}
            title={`${movie.title} Trailer`}
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            className="w-full h-full"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>
      ) : (
        <div className="rounded-2xl overflow-hidden ring-1 ring-white/10"
          style={{ aspectRatio: "16/9" }}
        >
          <img
            src={backdropUrl(movie.backdrop_path)}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>

    {/* RIGHT — INFO (40%) */}
    <div className="lg:col-span-2 flex flex-col gap-6">

      {/* Glass Card */}
      <div>

        {/* Poster + Title */}
        <div className="flex gap-4">
          <img
            src={imageUrl(movie.poster_path)}
            className="w-24 md:w-28 rounded-xl shadow-lg"
          />

          <div>
            <h1 className="text-2xl md:text-3xl font-bold leading-tight">
              {movie.title}
            </h1>

            <div className="text-sm text-gray-400 mt-2 flex flex-wrap gap-2">
              <span>{movie.release_date?.slice(0, 4)}</span>
              {runtime && <span>• {runtime}</span>}
            </div>

            {/* Rating */}
            <div className="mt-2 inline-flex items-center gap-1 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-md">
              ⭐ {movie.vote_average?.toFixed(1)}
            </div>
            <div className="text-lg mt-3 text-blue-600 ">
              
              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Full Episode
</button>
              </div>
          </div>
        </div>

        {/* Genres */}
        {genres && (
          <div className="mt-4 text-xs text-gray-400">
            {genres}
          </div>
        )}

        {/* Overview */}
        <p className="mt-4 text-gray-300 text-sm leading-relaxed">
          {movie.overview}
        </p>

      </div>

    </div>
  </div>
</div>
    </div>
  );
}