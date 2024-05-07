// Hero.tsx
'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import banner1 from '@/assets/banner1.png'

export default function Hero() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        adaptiveHeight: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                },
            },
        ],
    };

    return (
        <div id='home' className="w-full flex">
            <div className='w-1/2'>
                <h1>Titulo</h1>
            </div>
            <div className='w-1/2'>
                <Slider {...sliderSettings}>
                    <div className='shadow-lg'>
                        <Image src={banner1} className="bg-white w-full h-full object-cover pointer-events-none" alt="Slide 1" />
                    </div>
                    <div className='shadow-lg'>
                        <Image src={banner1} className="bg-white w-full h-full object-cover pointer-events-none" alt="Slide 2" />
                    </div>
                    <div className='shadow-lg'>
                        <Image src={banner1} className="bg-white w-full h-full object-cover pointer-events-none" alt="Slide 3" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}