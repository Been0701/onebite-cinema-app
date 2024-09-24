import MovieItem from '@/components/movie-item';
import movies from '@/mock/movies.json';

export default function Home() {
  return (
    <>
      <section>
        <h1 className="text-white text-lg my-4">지금 가장 추천하는 영화</h1>
        <div className="flex gap-2">
          {movies.slice(0, 3).map((movie) => (
            <MovieItem key={`star-${movie.id}`} {...movie} />
          ))}
        </div>
      </section>
      <section>
        <h1 className="text-white text-lg my-4">등록된 모든 영화</h1>
        <div className="grid grid-cols-5 gap-2">
          {movies.map((movie) => (
            <MovieItem key={`all-${movie.id}`} {...movie} />
          ))}
        </div>
      </section>
    </>
  );
}
