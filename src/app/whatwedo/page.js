'use client'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Page() {
  useEffect(() => {
    AOS.init();

  }, []);
  return (
    <div className='main-content-data w-1/2 h-9/10 flex-col p-6'>
      <p data-aos='zoom-in' ata-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-delay="100" className='w-full text-xl tracking-wider'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p data-aos='zoom-in' ata-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="1000" className='w-full mt-6 text-xl tracking-wider'>      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

    </div>
  )
}

export default Page