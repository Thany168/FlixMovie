import Link from "next/link";
import Image from "next/image";
import { imageUrl } from "@/lib/tmdb";
import { Star } from "lucide-react";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movies/${movie.id}`} className="group block w-40 sm:w-48 md:w-56">
      {/* Poster */}
      <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-900">
        <Image
          src={imageUrl(movie.poster_path)}
          alt={movie.title}
          width={224}
          height={336}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Rating Badge */}
        <div className="absolute top-2 left-2 bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
          <Star className="w-2.5 h-2.5 fill-black" />
          {movie.vote_average?.toFixed(1)}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
          <span className="text-white text-xs line-clamp-4">
            {movie.overview}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-2 text-sm font-semibold text-white line-clamp-2 group-hover:text-yellow-400 transition-colors">
        {movie.title}
      </h3>

      {/* Release Date */}
      <span className="text-xs text-gray-400 block mt-0.5">
        {movie.release_date}
      </span>
    </Link>
  );
}