import React from 'react';
import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import Carrusel from '@/components/Carrusel';
import Image from 'next/image';

import among_us from '../../public/inicio/among_us.jpg';
import borderland from '../../public/inicio/borderland.jpg';
import halo from '../../public/inicio/halo.jpg';
import tlof from '../../public/inicio/tlof.jpg';
import gotham_night from "../../public/inicio/gotham_night.jpg";
import gran_turismo from "../../public/inicio/gran_turismo.jpg";
import stray from "../../public/inicio/stray.jpg"

export default function HomePage() {
  return (
    <div>


      {/*buscador*/}
      <div className='bg-[#171A21] text-white py-2 mx-8 mt-24 mb-8 flex justify-around'>
        <Link className='content-center' href="/">Tienda de monedas</Link>
        <Link className='content-center' href="/">Reseñas</Link>
        <Link className='content-center' href="/">Merch</Link>
        <Link className='content-center' href="/">Eventos</Link>
        <Link className='content-center' href="/">Amigos</Link>
        <SearchBar />
      </div>
      <Carrusel />


      {/*Destacados de la semana*/ }
      <div className='text-white m-8 text-2xl'>Destacados de la semana</div>
      <div className='text-white m-8 flex justify-between gap-8 '>
        <div>
          <Link href="/"><Image className="h-70 border-3 border-white rounded-md" src={among_us} alt='among us'/></Link>
          <p className='text-xl'>Among us</p>
          <p>$16.000</p>
        </div>
        <div>
          <Link href="/"><Image className="h-70 border-3 border-white rounded-md" src={borderland} alt='borderland'/></Link>
          <p className='text-xl'>Borderland 3</p>
          <p>$170.000</p>
        </div>
        <div>
          <Link href="/"><Image className="h-70 border-3 border-white rounded-md" src={halo} alt='halo'/></Link>
          <p className='text-xl'>Halo infinite</p>
          <p>$260.000</p>
        </div>
        <div>
          <Link href="/"><Image className="h-70 border-3 border-white rounded-md" src={tlof} alt='tlof'/></Link>
          <p className='text-xl'>The last of us</p>
          <p>$220.000</p>
        </div>
      </div>


    {/*Ofertas especiales */}
    <div className='text-white m-8 text-2xl'>Ofertas especiales</div>
    <div className='text-white m-8 flex justify-between gap-8 '>
      <div>
        <Link href="/"><Image className="h-70 border-3 border-white rounded-md" src={gotham_night} alt='gotham_night'/></Link>
          <p className='text-xl'>Gotham knights</p>
          <p>$90.000</p>
          <p className='line-through'>$190.000</p>
      </div> 
      <div>
        <Link href="/"><Image className="h-70 border-3 border-white rounded-md" src={gran_turismo} alt='gran_turismo'/></Link>
          <p className='text-xl'>Grand turismo</p>
          <p>$250.000</p>
          <p className='line-through'>$390.000</p>
      </div> 
      <div>
        <Link href="/"><Image className="h-70 border-3 border-white rounded-md" src={stray} alt='stray'/></Link>
        <p className='text-xl'>Stray</p>
        <p>$20.000</p>
        <p className='line-through'>$40.000</p>
      </div> 
    </div>
    </div>
  );
}
