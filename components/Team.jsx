import React from 'react'
import oromLogo from '../public/images/logo.webp'
import Image from 'next/image';
import localFont from '@next/font/local';
import Marquee from 'react-fast-marquee';
import Footer from './Footer';
import ProjectCarousel  from './EmblaCarousel'

const myFont = localFont({src: "../public/fonts/times.ttf"})

const team = () => {
  return (
    <div className='flex flex-col relative h-screen text-white bg-[#172241]'>
    <div id='team' className='container mx-auto px-4 content-center'>
      <h2 style = {myFont.style} className="text-4xl text-center pt-6">Our Team</h2>

      <div className='flex p-7'>
        
        <div className='flex'>
          <div><h1 className='text-7xl font-bold p-3'>"</h1></div>
          <div className='pt-11'>
          <p>Introducing the Brilliant Minds Behind OROM Corporation 
          At OROM Corporation, our achievements are the result of a collaborative effort put forth by the brilliant minds that make up our hard-working team. Each person brings their own distinct set of abilities, experiences, and passions to the table, which contributes to the rich tapestry of innovation and excellence that characterises our organisation.</p>
          </div>
        </div>
      </div>

      <div className='flex flex-row p-8 pl-36'>
        <div className='w-full p-2'>
          <Image
            src={"/images/hariom.png"}
            width={220}
            height={220}
            alt="Picture 1"
            className='rounded-full w-64 h-64'
          />
          <h5 className='text-2xl'>HariOm Shandilya </h5>
          <p className="text-xl mt-0 italic">MD & CEO </p>
        </div>
        <div className='w-full p-2'>
          <Image
            Image
            src={"/images/brahmanaggarwal.png"}
            width={220}
            height={220}
            alt="Picture 2"
            className='rounded-full w-64 h-64'
          />
          <h5 className='text-2xl'>Brahman Aggarwal</h5>
          <p className="text-xl mt-0 italic">CTO(IT)</p>
        </div>
        <div className='w-full p-2'>
          <Image
            Image
            src={"/images/muthiahkakalikrishnan.jpeg"}
            width={220}
            height={220}
            alt="Picture 3"
            className='rounded-full w-64 h-64 object-cover'
          />
          <h5 className='text-2xl'>Muthiah K A Kalikrishnan</h5>
          <p className="text-xl mt-0 italic">CTO (Electronics)</p>
        </div>
        
        {/* <div className='w-full p-2'>
          <Image
            Image
            src={"/images/hariom.png"}
            width={220}
            height={220}
            alt="Picture 1"
            alt="Picture 1"
          />
          <h5 className='text-3xl '>Name</h5>
          <p className="mt-0 italic text-2xl">designation</p>
        </div> */}
      </div>

    </div>
    <Footer />
    </div>
  );
}

export default team