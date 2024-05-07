// Sobre.tsx
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

    const backgroundImage = isMobile ? "/bg.png" : "/bg.png";

    return (
        <div id="sobre" className="h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        </div>
    );
}