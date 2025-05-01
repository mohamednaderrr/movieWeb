import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';

import "./HomeSlider.css";

// img 
import film1 from "../../assets/Home_Img/film1.jpeg"
import film2 from "../../assets/Home_Img/film2.jpeg"
import film3 from "../../assets/Home_Img/film3.jpeg"
import film4 from "../../assets/Home_Img/film4.jpeg"
import film5 from "../../assets/Home_Img/film5.jpeg"
import film6 from "../../assets/Home_Img/film6.jpeg"
import film7 from "../../assets/Home_Img/film7.jpeg"
import film8 from "../../assets/Home_Img/film8.jpeg"
import film9 from "../../assets/Home_Img/film9.jpeg"
import film10 from "../../assets/Home_Img/film10.jpeg"

import Slider_Com from './Slider_Com';

const HomeSlider = ({content}) => {
    return (
        <div className='HomeSlider mt-5 '>
            <h1 className='text-white fw-bold px-4 py-1 text-uppercase'>{content}</h1>
            <Swiper
                className="mySwiper text-center "
                navigation={true}
                modules={[Navigation]}
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 4,
                    },
                    1244: {
                        slidesPerView: 5,
                    },
                }}
            >

                <SwiperSlide> <Slider_Com img={film1} /> </SwiperSlide>
                <SwiperSlide> <Slider_Com img={film2} /> </SwiperSlide>
                <SwiperSlide> <Slider_Com img={film3} /> </SwiperSlide>
                <SwiperSlide> <Slider_Com img={film4} /> </SwiperSlide>
                <SwiperSlide> <Slider_Com img={film5} /> </SwiperSlide>
                <SwiperSlide> <Slider_Com img={film6} /> </SwiperSlide>
                <SwiperSlide> <Slider_Com img={film7} /> </SwiperSlide>
                <SwiperSlide> <Slider_Com img={film8} /> </SwiperSlide>
                <SwiperSlide> <Slider_Com img={film9} /> </SwiperSlide>
                <SwiperSlide> <Slider_Com img={film10} /> </SwiperSlide>


            </Swiper >
        </div>


    )
}

export default HomeSlider;
