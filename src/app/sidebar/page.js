'use client'
import { Sansation } from 'next/font/google';
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';
import '../globals.css'
import Image from 'next/image';
const sansation = Sansation({
    weight: '700',
    variable: '--font-sansation',
    style: 'normal',
    subsets: ["latin"],
});
function Page() {
    const pathName = usePathname();
    const [menu, setMenu] = useState(false)
    return (
        <>
            <button onClick={() => {
                setMenu(!menu)
            }} className='menu-icon absolute top-8 left-8 w-fit rounded-lg'>
                <Image
                    src={'/icons/menu.png'}
                    width={30}
                    height={30}
                    alt='icon'
                />
            </button>


            {menu ? (
                <div className="fixed inset-0 bg-black/75  medium-screen">
                    <button onClick={() => setMenu(!menu)} className='menu-icon absolute top-6 left-6 w-fit rounded-lg z-[99]'>
                        <Image
                            src={'/icons/close.png'}
                            width={50}
                            height={50}
                            alt='icon'
                        />
                    </button>

                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='flex flex-col items-center space-y-16'>
                            <Link href="/whatwedo" onClick={()=>setMenu(false)} className={`${pathName === '/whatwedo' ? 'active-link' : 'nonactive-link'} cursor-none mb-16 flex items-center space-x-3 transform transition-transform duration-400 hover:text-white hover:scale-100`}>
                                <span className='text-3xl transform transition-transform duration-400 hover:text-white hover:scale-120'>
                                    What we do?
                                </span>
                            </Link>
                            <Link href="/whoweare" onClick={()=>setMenu(false)} className={`${pathName === '/whoweare' ? 'active-link' : 'nonactive-link'} cursor-none mb-16 flex items-center space-x-3 transform transition-transform duration-400 hover:text-white hover:scale-100`}>
                                <span className='text-3xl transform transition-transform duration-400 hover:text-white hover:scale-120'>
                                    Who we are?
                                </span>
                            </Link>
                            <Link href="/contact" onClick={()=>setMenu(false)} className={`${pathName === '/contact' ? 'active-link' : 'nonactive-link'} cursor-none mb-16 flex items-center space-x-3 transform transition-transform duration-400 hover:text-white hover:scale-100`}>
                                <span className='text-3xl transform transition-transform duration-400 hover:text-white hover:scale-120'>
                                    Contact us @...
                                </span>
                            </Link>
                            <Link href="/careers" onClick={()=>setMenu(false)} className={`${pathName === '/careers' ? 'active-link' : 'nonactive-link'} cursor-none mb-16 flex items-center space-x-3 transform transition-transform duration-400 hover:text-white hover:scale-100`}>
                                <span className='text-3xl transform transition-transform duration-400 hover:text-white hover:scale-120'>
                                    Join Us
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>):null}
            
            
            <main style={{ fontSize: 'larger' }} className={`${sansation.variable} font-[family-name:var(--font-sansation)] text-3xl text-gray-500 flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16  sm:items-start`}>
                <div className="large-screen">
                    <Link href="/whatwedo" className={`${pathName === '/whatwedo' ? 'active-link' : 'nonactive-link'} cursor-none mb-16 flex items-center space-x-3 transform transition-transform duration-400 hover:text-white hover:scale-100`}>
                        <span className=' transform transition-transform duration-400 hover:text-white hover:scale-120'>
                            What we do?
                        </span>
                    </Link>
                    <Link href="/whoweare" className={`${pathName === '/whoweare' ? 'active-link' : 'nonactive-link'} cursor-none mb-16 flex items-center space-x-3 transform transition-transform duration-400 hover:text-white hover:scale-100`}>
                        <span className=' transform transition-transform duration-400 hover:text-white hover:scale-120'>
                            Who we are?
                        </span>
                    </Link>
                    <Link href="/contact" className={`${pathName === '/contact' ? 'active-link' : 'nonactive-link'} cursor-none mb-16 flex items-center space-x-3 transform transition-transform duration-400 hover:text-white hover:scale-100`}>
                        <span className=' transform transition-transform duration-400 hover:text-white hover:scale-120'>
                            Contact us @...
                        </span>
                    </Link>
                    <Link href="/careers" className={`${pathName === '/careers' ? 'active-link' : 'nonactive-link'} cursor-none mb-16 flex items-center space-x-3 transform transition-transform duration-400 hover:text-white hover:scale-100`}>
                        <span className=' transform transition-transform duration-400 hover:text-white hover:scale-120'>
                            Join Us
                        </span>
                    </Link>

                </div>
            </main>
        </>


    )
}

export default Page