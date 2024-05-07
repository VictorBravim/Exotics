// Hero.tsx

export default function Hero() {
    return (
        <div id="home" className="h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-64 lg:pt-0 pt-12 bg-cover bg-center" style={{ backgroundImage: "url('/bg.png')" }}>
            <div className="relative z-10 text-white w-full lg:w-1/2">
                <div className="text-left mb-4">
                    <h1 className="text-xl lg:text-8xl mb-4">LUXO ESTILO DE VIDA E POTÊNCIA</h1>
                    <p className="text-sm md:text-2xl text-gray-500 mb-2">Audi e-tron GT Versão Esportivo Elétrico.</p>
                    <p className="mb-6"><span className="text-yellow-custom">R$ 5,000</span><span className="text-gray-500"> / Por Dia</span></p>
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