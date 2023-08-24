import React from 'react';
import Image from 'next/image';
import { CarouselProvider, Slider, Slide, Dot, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import leftArrow from "../public/images/leftarrow.svg"
import rightArrow from "../public/images/rightarrow.svg"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState, useEffect } from 'react';
import {
  useWindowWidth,
} from '@react-hook/window-size';

const ProjectCarousel = () => {

  const [slightHeight, setSlightHeight] = useState(230);
    const onlyWidth = useWindowWidth();
    useEffect(() => {
        if (onlyWidth < 840) {
            setSlightHeight(500);
        } else {
            setSlightHeight(1200);
        }
    }, []);

  return (
    <div className={`w-full -z-10 flex gap-2 font-Helvetica justify-center items-center`}>
        <CarouselProvider
          naturalSlideHeight={slightHeight}
          naturalSlideWidth={1000}
          totalSlides={5}
          visibleSlides={1}
          infinite={true}
          dragEnabled={true}
          isPlaying={false}
          interval={2200}
          className="w-full text-white flex items-center justify-center px-8 lg:px-64"
        >
          <ButtonBack className='pr-4 max-md:hidden'> 
          <Image
            src={leftArrow}
            height={75}
          />
          </ButtonBack>
          <Slider className="w-full h-[43.75rem] rounded-xl">
            <Slide index={0} className="rounded-xl">
              <Image
                src = '/images/image7.jpeg'
                height = {2000}
                width = {2000}
                className='w-full rounded-xl px-2'
              />
            </Slide>
            <Slide index={1} className="">
              <Image
                src = '/images/image8.jpeg'
                height = {2000}
                width = {2000}
                className='w-full rounded-xl px-2'
              />
            </Slide>
            <Slide index={2} className="">
              <Image
                src = '/images/image7.jpeg'
                height = {2000}
                width = {2000}
                className='w-full rounded-xl px-2'
              />
            </Slide>
            <Slide index={3} className="">
              <Image
                src = '/images/image10.jpeg'
                height = {2000}
                width = {2000}
                className='w-full rounded-xl px-2'
              />
            </Slide>
            <Slide index={4} className="">
              <Image
                src = '/images/image11.jpeg'
                height = {2000}
                width = {2000}
                className='w-full rounded-xl px-2'
              />
            </Slide>
          </Slider>


          <ButtonNext className='pl-4 max-md:hidden'>
          <Image
            src={rightArrow}
            height={75}
          />
          </ButtonNext>
        </CarouselProvider>
      </div>
  );
};

export default ProjectCarousel;