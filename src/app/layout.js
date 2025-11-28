'use client';
import { Geist, Geist_Mono } from "next/font/google";
import React,{useState, useEffect, useRef} from "react";
import "./globals.css";
import Sidebar from "./sidebar/page";
import { Sansation } from 'next/font/google'
import { usePathname } from 'next/navigation';

import Image from "next/image";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
    const pathName = usePathname();

  const [mouseposition, setMousePosition] = useState({ x: 0, y: 0 });
    const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {

    window.addEventListener("mousemove",updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <html lang="en">
      <body
        style={{ cursor: "none" }}
        className={`flex ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* cursor element positioned from state */}
        <div
          className="cursor"
          style={{ left: `${mouseposition.x}px`, top: `${mouseposition.y}px` }}
        ></div>
        <div className="fixed left-0 top-0 h-full">
          <Sidebar />
        </div>
              
        <div className={`w-full h-screen flex items-center justify-center`}>
          {children}
        </div>
        {pathName != '/'?<div className="absolute bottom-10 right-4">
          <Image
          src={'/icons/title.png'}
          alt='Icon'
          width={120}
          height={120}
          />
        </div>:null}
      </body>
    </html>
  );

}
