// Hero.tsx

export default function Hero() {
    return (
        <div id="home" className="h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-64 lg:pt-0 pt-12 bg-cover bg-center" style={{ backgroundImage: "url('/bg.png')" }}>
            <div className="relative z-10 text-white w-full lg:w-1/2">
                <div className="text-left mb-4">
                    <h1 className="text-xl lg:text-8xl mb-6">LUXO ESTILO DE VIDA E POTENCIA</h1>
                    <p className="text-sm md:text-lg text-gray-bg font-bold mb-4">Alugue carros potentes e luxuosos.</p>
                    <p className="mb-4">R$ 5,000 / Por Dia</p>
                    <button className="border border-yellow-custom p-2 px-4">
                        Alugar
                    </button>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
            </div>
        </div>
    );
}