'use client'
import { Sansation } from 'next/font/google';
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import '../globals.css'
const sansation = Sansation({
  weight: '700',
  variable:'--font-sansation',
  style:'normal',
  size:'30px',
  subsets: ["latin"],
});
function Page() {
    const pathName = usePathname();
  return (
        <main style={{fontSize:'larger'}} className={`${sansation.variable}text-3xl text-gray-500 flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16  sm:items-start Sansa`}>
       <div>
        <Link href="/whatwedo" className={`${pathName === '/whatwedo'?'active-link':'nonactive-link'} cursor-none mb-16 flex items-center space-x-3 transform transition-transform duration-400 hover:text-white hover:scale-100`}>
            <span className=' transform transition-transform duration-400 hover:text-white hover:scale-120'>
                  What we do?
            </span>
        </Link>
        <Link href="/whoweare" className={`${pathName === '/whoweare'?'active-link':'nonactive-link'} cursor-none mb-16 flex items-center space-x-3 transform transition-transform duration-400 hover:text-white hover:scale-100`}>
            <span className=' transform transition-transform duration-400 hover:text-white hover:scale-120'>
                  Who we are?
            </span>
        </Link>
                <Link href="/contact" className={`${pathName === '/contact'?'active-link':'nonactive-link'} cursor-none mb-16 flex items-center space-x-3 transform transition-transform duration-400 hover:text-white hover:scale-100`}>
            <span className=' transform transition-transform duration-400 hover:text-white hover:scale-120'>
                 Contact us @...
            </span>
        </Link>
        <Link href="/careers" className={`${pathName === '/careers'?'active-link':'nonactive-link'} cursor-none mb-16 flex items-center space-x-3 transform transition-transform duration-400 hover:text-white hover:scale-100`}>
            <span className=' transform transition-transform duration-400 hover:text-white hover:scale-120'>
                 Join Us
            </span>
        </Link>

       </div>
      </main>  )
}

export default Page