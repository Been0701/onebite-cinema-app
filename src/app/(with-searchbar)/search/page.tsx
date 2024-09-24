import MovieItem from '@/components/movie-item';
import movies from '@/mock/movies.json';

export default function Page() {
  return (
    <>
      <h2 className="text-white mb-4">검색 결과</h2>
      <div className="grid grid-cols-3 gap-2">
        {movies.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}
