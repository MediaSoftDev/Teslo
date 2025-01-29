'use client'

import React,{ useState } from "react";
//SwiperOBJ type OBJ | undefined
import { Swiper as SwiperOBJ} from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';

// Import Swiper styles
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css'

import Image from "next/image";

interface Props {
    images: string[];
    title: string;
    className?: string;
}

export const ProductSlideshow = ({images,title,className}:Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperOBJ>();
 
  return (
   <div className={className}>
     <Swiper
      style={{
        '--swiper-navigation-color': '#999',
        '--swiper-pagination-color': '#999',
      }  as React.CSSProperties}
      spaceBetween={10}
      navigation={true}
      autoplay={{
        delay: 2500
      }}
      thumbs={{ 
        swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
      }}
      modules={[FreeMode, Navigation, Thumbs, Autoplay]}
      className="mySwiper2"
    >
      {
        images.map(image=>(
            <SwiperSlide key={image}>
                <Image 
                    width={1024}
                    height={800}
                    src={`/products/${image}`}
                    alt={title}
                    className={'rounded-lg object-fill'}
                />                
            </SwiperSlide>
        ))
      }
      ...
    </Swiper>
    <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
       
        {
        images.map(image=>(
            <SwiperSlide key={image}>
                <Image 
                    width={300}
                    height={300}
                    src={`/products/${image}`}
                    alt={title}
                    className={'rounded-lg object-fill'}
                />                
            </SwiperSlide>
        ))
      }
       
    </Swiper>
   </div>
  )
}
