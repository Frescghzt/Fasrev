import React from 'react';
import Link from 'next/link';
import SearchBar from '@/components/SearchBar';

export default function HomePage() {
  return (
    <div>
      {/*buscador*/}
      <div className='bg-[#171A21] text-white py-2 m-8 flex justify-around'>
        <Link className='content-center' href="/">Tienda de monedas</Link>
        <Link className='content-center' href="/">Reseñas</Link>
        <Link className='content-center' href="/">Merch</Link>
        <Link className='content-center' href="/">Eventos</Link>
        <Link className='content-center' href="/">Amigos</Link>
        <SearchBar />
      </div>
    </div>
  );
}
