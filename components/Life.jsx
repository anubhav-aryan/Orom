import React from 'react'
import localFont from '@next/font/local'
import Image from 'next/image'
import awardsImage from '../public/images/awards.jpg'
// import { images } from './images'
import ProjectCarousel  from './EmblaCarousel'


const myFont = localFont({src: "../public/fonts/times.ttf"})
const myFont2 = localFont({src: "../public/fonts/Inter-Light-BETA.ttf"})

const awards = () => {
  return (
    <div id = 'Life' className='content-center justify-center bg-[#172241] text-white'>

      <div>
        <div>
          <h2 style = {myFont.style} className="text-4xl mb-4 text-center py-6">Life at Orom</h2>
        </div>

        {/* <div className='relative flex content-center justify-center'>
          <Image
            src={awardsImage}
            className='w-3/4 h-72'
          />
        </div> */}
      </div>
        <ProjectCarousel />
      </div>

    
  )
}

export default awards