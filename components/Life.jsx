import React from 'react'
import localFont from '@next/font/local'
import ProjectCarousel  from './EmblaCarousel'
import Footer from './Footer'


const myFont = localFont({src: "../public/fonts/times.ttf"})
const myFont2 = localFont({src: "../public/fonts/Inter-Light-BETA.ttf"})

const awards = () => {
  return (
    <div id = 'life' className='content-center justify-center bg-[#172241] text-white relative h-screen'>

      <div>
        <div>
          <h2 style = {myFont.style} className="text-4xl mb-4 text-center py-6">Life at Orom</h2>
        </div>
      </div>
        <ProjectCarousel />
        <Footer />
      </div>
  )
}

export default awards