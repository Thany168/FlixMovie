import { imageUrl } from "@/lib/tmdb";
import { Play, PlusIcon } from "lucide-react";

export default function Highlight({ movie }: any) {
  return (
    <div className="relative  h-[6vh] sm:h-[65vh] md:h-[75vh] max-w-7xl mx-auto  overflow-hidden">
      {/* Background Image */}
      <img
        src={imageUrl(movie.backdrop_path)}
        className="absolute inset-0 w-full h-full object-cover "
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative flex flex-col justify-end h-full px-4 sm:px-6 lg:px-10 pb-8 sm:pb-12 text-white">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
          {movie.title}
        </h1>

        <p className="max-w-xl text-sm sm:text-base text-gray-300 line-clamp-3 mb-6">
          {movie.overview}
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-white flex gap-1 text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
            <Play /> Play
          </button>

          <button className="bg-gray-700/70 flex gap-1 px-5 py-2 rounded-lg font-semibold hover:bg-gray-600 transition">
            <PlusIcon /> My List
          </button>
        </div>
      </div>
    </div>
  );
}
