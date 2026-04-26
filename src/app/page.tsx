import { getTrending, getPopular, getTopRated } from "@/lib/tmdb";
import Highlight from "@/components/Highlight";
import Row from "@/components/Row";

export default async function Home() {
  const [trending, popular, topRated] = await Promise.all([
    getTrending(),
    getPopular(),
    getTopRated(),
  ]);

  return (
    <main className="bg-black min-h-screen ">
      <div className="relative pt-16 md:pt-20">
        <Highlight movie={trending.results[2]} />
      </div>
      <div className="pb-10 space-y-8 relative ">
        <Row title=" Trending Now" movies={trending.results} />
        <Row title=" Popular" movies={popular.results} />
        <Row title=" Top Rated" movies={topRated.results} />
      </div>
    </main>
  );
}
