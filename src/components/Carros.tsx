// Carros.tsx
'use client'
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa';
import { CgArrowRight } from 'react-icons/cg';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import carro from '@/assets/carro.png'

interface LocalProps {
    nome: string;
    imagem: StaticImageData;
    preco: string;
}


const Carros = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const sliderRef = useRef<Slider>(null);

    const nextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const carros: LocalProps[] = [
        {
            nome: 'Audi A4',
            imagem: carro,
            preco: 'R$ 59,00',
        },
        {
            nome: 'Audi A4',
            imagem: carro,
            preco: 'R$ 89,00',
        },
        {
            nome: 'Audi A4',
            imagem: carro,
            preco: 'R$ 32,00',
        },
        {
            nome: 'Audi A4',
            imagem: carro,
            preco: 'R$ 29,00',
        },
        {
            nome: 'Audi A4',
            imagem: carro,
            preco: 'R$ 25,00',
        },
    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        swipeToSlide: true,
        arrows: false,
        initialSlide: sliderIndex,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div id='produtos' className="h-screen flex justify-center items-center mb-12 lg:mb-0 py-12 px-4 md:px-8 lg:px-16 bg-cover bg-center" style={{ backgroundImage: "url('/alugar.png')" }}>
            <div className="container mx-auto py-12">
                <div className="flex justify-between items-center px-2">
                    <h1 className="text-white text-4xl mb-4">Carros</h1>
                    <button className="text-white text-4xl" onClick={nextSlide}>
                        <CgArrowRight />
                    </button>
                </div>
                <Slider {...sliderSettings} ref={sliderRef}>
                    {carros.map((local, index) => (
                        <div key={index} className="px-2 py-2 pb-4 relative">
                            <div className="bg-gray-custom flex flex-col justify-center items-center p-4 overflow-hidden">
                                <Image src={local.imagem} alt={local.nome} width={400} height={250} />
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-semibold text-white mb-2">{local.nome}</h3>
                                    <div className="flex items-center justify-center mb-2">
                                    </div>
                                    <p className="text-xl text-white">{local.preco}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Carros;