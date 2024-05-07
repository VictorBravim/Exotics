// Nav.tsx
'use client'
import { useState, useEffect } from 'react';

export default function Nav() {
    const [activeSection, setActiveSection] = useState('home');

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition < window.innerHeight - 100) {
            setActiveSection('home');
        } else if (scrollPosition < 2 * window.innerHeight - 100) {
            setActiveSection('produtos');
        } else if (scrollPosition < 3 * window.innerHeight - 100) {
            setActiveSection('sobre');
        } else {
            setActiveSection('contato');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="bg-transparent p-8 fixed w-full z-20">
            <div className="lg:mx-56 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                <div className="flex items-center text-white space-x-6 lg:space-x-12">
                    <button
                        className={`text-base md:text-lg ${activeSection === 'home' ? 'bg-transparent text-white py-2 border-b-2 border-yellow-custom' : ''}`}
                        onClick={() => scrollToSection('home')}>
                        HOME
                    </button>
                    <button
                        className={`text-base md:text-lg ${activeSection === 'produtos' ? 'bg-transparent text-white py-2 border-b-2 border-yellow-custom' : ''}`}
                        onClick={() => scrollToSection('produtos')}>
                        PRODUTOS
                    </button>
                    <button
                        className={`text-base md:text-lg ${activeSection === 'sobre' ? 'bg-transparent text-white py-2 border-b-2 border-yellow-custom' : ''}`}
                        onClick={() => scrollToSection('sobre')}>
                        SOBRE
                    </button>
                    <button
                        className={`text-base md:text-lg ${activeSection === 'contato' ? 'bg-transparent text-white py-2 border-b-2 border-yellow-custom' : ''}`}
                        onClick={() => scrollToSection('contato')}>
                        CONTATO
                    </button>
                </div>
                <div className="flex items-center">
                    <button className='hidden lg:block bg-yellow-custom text-white p-2 px-4'>
                        CONTATO
                    </button>
                </div>
            </div>
        </nav>
    );
}