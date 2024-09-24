import { MovieData } from '@/types';
import Link from 'next/link';

export default function MovieItem(props: MovieData) {
  return (
    <Link href={`/movie/${props.id}`}>
      <img src={props.posterImgUrl} />
    </Link>
  );
}
