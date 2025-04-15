import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png'
import Link from 'next/link';

const Navbar = () => {
    return (
    <nav className='bg-[#171A21] text-white py-3'>
        <div className='flex justify-around content-center'>
            <div className='flex justify-center content-center'>
                <Link className='content-center' href="/"><Image className='object-top-left' src={logo} alt='logo' width={30} /></Link>
                <Link className='content-center font-medium' href="/">FASREV</Link>
            </div>
            <Link className='content-center' href="/">INICIO</Link>
            <Link className='content-center' href="/">TIENDA</Link>
            <Link className='content-center' href="/">OFERTAS</Link>
            <Link className='content-center' href="/">BIBLIOTECA</Link>
            <Link className='bg-[#1B2838] px-8 py-2 rounded-md content-center text-[#C6D4DF]' href="/">INICIAR SESION</Link>
        </div>
    </nav>
    );
};

export default Navbar;
    