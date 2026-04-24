import Link from "next/link";
import { imageUrl } from "@/lib/tmdb";

export default function MovieCard({ movie }: any) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <img
        src={imageUrl(movie.poster_path)}
        className="w-40 rounded-lg hover:scale-110 transition duration-300 cursor-pointer"
      />
    </Link>
  );
}
