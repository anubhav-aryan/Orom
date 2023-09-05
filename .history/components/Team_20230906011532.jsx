import React from 'react'
import Image from 'next/image';
import localFont from '@next/font/local';
import Footer from './Footer';

const myFont = localFont({src: "../public/fonts/times.ttf"})

const team = () => {
  return (
    <div className='flex flex-col relative text-white bg-[#172241] min-h-screen'>
    <div id='team' className='container mx-auto px-4 content-center'>
      <h2 style = {myFont.style} className="text-4xl text-center pt-6">Our Team</h2>

      <div className='flex p-7'>
        
        <div className='flex'>
          <div><h1 className='text-7xl font-bold p-3 max-md:text-3xl'>"</h1></div>
          <div className='pt-11 max-md:pt-10'>
          <p>Introducing the Brilliant Minds Behind OROM Corporation 
          At OROM Corporation, our achievements are the result of a collaborative effort put forth by the brilliant minds that make up our hard-working team. Each person brings their own distinct set of abilities, experiences, and passions to the table, which contributes to the rich tapestry of innovation and excellence that characterises our organisation.</p>
          </div>
        </div>
      </div>

      <div className='flex flex-row flex-wrap p-8 max-md:pl-2 justify-center gap-24 max-md:gap-14 max-md:mb-4'>
        <div className='p-2 flex flex-col items-center'>
          <Image
            src={"/images/hariom.png"}
            width={180}
            height={180}
            alt="Picture 1"
            className='rounded-full w-48 h-48'
          />
          <h5 className='text-2xl text-center'>HariOm Shandilya </h5>
          <p className="text-xl mt-0 italic">MD & CEO </p>
        </div>
        {/* <div className='p-2 flex flex-col items-center'>
          <Image
            Image
            src={"/images/brahmanaggarwal.png"}
            width={220}
            height={220}
            alt="Picture 2"
            className='rounded-full w-48 h-48'
          />
          <h5 className='text-2xl text-center'>Brahman Aggarwal</h5>
          <p className="text-xl mt-0 italic text-center">CTO(IT)</p>
        </div>
        <div className='p-2 flex flex-col items-center'>
          <Image
            Image
            src={"/images/muthiahkakalikrishnan.jpeg"}
            width={220}
            height={220}
            alt="Picture 3"
            className='rounded-full w-48 h-48 object-cover'
          />
          <h5 className='text-2xl text-center'>Muthiah K A Kalikrishnan</h5>
          <p className="text-xl mt-0 italic text-center">CTO (Electronics)</p>
        </div> */}
      </div>

    </div>
    <Footer />
    </div>
  );
}

export default team