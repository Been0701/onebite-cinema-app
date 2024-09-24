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
    <div className="w-full my-8">
      <input
        className="p-2 rounded w-10/12"
        placeholder="검색어를 입력하세요..."
        value={search}
        onChange={onChangeSearch}
        onKeyUp={enterKey}
      />
      <button
        className="bg-gray-600 text-white ml-2 py-2 px-4 rounded"
        onClick={onClickSearch}
      >
        검색
      </button>
    </div>
  );
}
