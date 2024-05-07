// Hero.tsx
'use client'
import { useState, useEffect } from "react";

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const backgroundImage = isMobile ? "/bg-mobile.png" : "/bg.png";

    return (
        <div id="home" className="h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-64 pb-12 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="relative z-10 text-white w-full lg:w-1/2">
                <div className="text-center lg:text-left mb-4">
                    <h1 className="text-7xl lg:text-8xl mb-4">LUXO ESTILO DE VIDA E POTÊNCIA</h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-2">Audi e-tron GT Versão Esportivo Elétrico.</p>
                    <p className="text-lg lg:text-md mb-6"><span className="text-yellow-custom">R$ 5,000</span><span className="text-gray-500"> / Por Dia</span></p>
                    <button className="border border-yellow-custom p-2 px-16">
                        Alugar
                    </button>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
            </div>
        </div>
    );
}