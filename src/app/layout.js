'use client';
import { Geist, Geist_Mono } from "next/font/google";
import React,{useState, useEffect, useRef} from "react";
import "./globals.css";
import Sidebar from "./sidebar/page";
import { Sansation } from 'next/font/google'
import { usePathname } from 'next/navigation';
import BackgroundGrid from "./components/backgroundGrid";
import Image from "next/image";
import localFonts from 'next/font/local'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const MIT = localFonts({
  src: [
    {
      path: '../../public/fonts/mit-block-font.otf',
      weight: '800',
      style: 'normal'
    }
  ],
  variable: '--font-MIT',
  display: 'swap',
})

export default function RootLayout({ children }) {
    const pathName = usePathname();

  // const [mouseposition, setMousePosition] = useState({ x: 0, y: 0 });
  //   const updateMousePosition = (e) => {
  //   setMousePosition({ x: e.clientX, y: e.clientY });
  // };
  // useEffect(() => {

  //   window.addEventListener("mousemove",updateMousePosition);

  //   return () => {
  //     window.removeEventListener("mousemove", updateMousePosition);
  //   };
  // }, []);

  return (
    <html lang="en">
      <body
        // style={{ cursor: "none" }}
        className={`flex ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BackgroundGrid />
{/* 
        cursor element positioned from state
        <div
          className="cursor"
          style={{ left: `${mouseposition.x}px`, top: `${mouseposition.y}px` }}
        ></div> */}
        <div className="fixed left-0 top-0 h-full">
          <Sidebar />
        </div>
              
        {/* Main content should not be fixed or negative-z; keep it above the background canvas */}
        <div className={`main-content fixed w-full min-h-screen flex items-center justify-center z-[-1]`}>
          {children}
        </div>
        {pathName != '/'?<div className="corner-title fixed bottom-10 right-4">
          {/* <Image
          src={'/icons/title.png'}
          alt='Icon'
          width={120}
          height={120}
          /> */}
            <span 
            className={`  text-stone-100  opacity-75 bg-none font-thin text-5xl transform transition-transform duration-400 hover:opacity-100`}>
            FASTR
          </span>
        </div>:null}
        
      </body>
    </html>
  );

}
