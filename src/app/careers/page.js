import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='absolute left-1/5 w-3/4  h-3/4 flex-col p-6'>
      <p className='w-full text-xl tracking-wider'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
      <div className='flex w-full justify-evenly items-center'>
        <a>
          <Image 
          src={'/icons/instagram.webp'}
          alt='Instagram Icon'
          width={90}
          height={90}
          data-aos='zoom-in'
          data-aos-duration="2000"
          data-aos-delay="500"
          className='career-icon opacity-50 transform transition-transform duration-400 hover:drop-shadow-xl horder hover:drop-shadow-white hover:opacity-100'
          />
        </a>
        <a className='w-fit'><Image 
          src={'/icons/linkedin.png'}
          alt='LinkedIN Icon'
          width={120}
          height={120}
          data-aos='zoom-in'
          data-aos-duration="2000"
          data-aos-delay="1000"
          className='career-icon opacity-50 transform transition-transform duration-400 hover:drop-shadow-lg horder hover:drop-shadow-white hover:opacity-100'
          /></a>
        <a className='w-fit'><Image 
          src={'/icons/mail.webp'}
          alt='mail Icon'
          width={100}
          height={100}
          data-aos='zoom-in'
          data-aos-duration="2000"
          data-aos-delay="2000"
          className='career-icon opacity-50 transform transition-transform duration-400 hover:drop-shadow-lg horder hover:drop-shadow-white hover:opacity-100'
          /></a>
      </div>
      
    </div>
  )
}

export default page