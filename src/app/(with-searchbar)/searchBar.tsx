'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = searchParams.get('q');
  const [search, setSearch] = useState(params ?? '');
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onClickSearch = () => {
    router.push(`/search?q=${search}`);
  };
  const enterKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onClickSearch();
    }
  };

  return (
    <div>
      <input
        className="border border-gray-300 p-2 m-2 rounded"
        value={search}
        onChange={onChangeSearch}
        onKeyUp={enterKey}
      />
      <button
        className="bg-pink-500 text-white py-2 px-4 rounded"
        onClick={onClickSearch}
      >
        검색
      </button>
    </div>
  );
}
