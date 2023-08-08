import React from 'react';
import Image from 'next/image';
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const ProjectCarousel = () => {
  return (
    <div className={`w-full -z-10 flex gap-2 font-Helvetica justify-center items-center`}>
        <CarouselProvider
          naturalSlideHeight={1000}
          naturalSlideWidth={1000}
          totalSlides={5}
          visibleSlides={1}
          infinite={true}
          dragEnabled={true}
          isPlaying={false}
          className="w-3/4 h-72 text-white flex items-center justify-center"
        >
          <Slider className="w-full h-full">
            <Slide index={0} className="w-full h-full">
              <Image
                src = '/images/image9.jpeg'
                height = {10000}
                width = {10000}
                className='w-full h-full'
              />
            </Slide>
            <Slide index={1} className="w-full h-full">
              <Image
                src = '/images/image9.jpeg'
                height = {10000}
                width = {10000}
                className='w-full h-full'
              />
            </Slide>
            <Slide index={2} className="w-full h-full">
              <Image
                src = '/images/image9.jpeg'
                height = {10000}
                width = {10000}
                className='w-full h-full'
              />
            </Slide>
            <Slide index={3} className="w-full h-full">
              <Image
                src = '/images/image9.jpeg'
                height = {10000}
                width = {10000}
                className='w-full h-full'
              />
            </Slide>
            <Slide index={4} className="w-full h-full">
              <Image
                src = '/images/image9.jpeg'
                height = {10000}
                width = {10000}
                className='w-full h-full'
              />
            </Slide>
          </Slider>
          <div className="absolute bottom-2">
            <Dot key={0} slide={0} />
            <Dot key={1} slide={1} />
            <Dot key={2} slide={2} />
            <Dot key={3} slide={3} />
            <Dot key={4} slide={4} />
          </div>
        </CarouselProvider>
      </div>
  );
};

export default ProjectCarousel;