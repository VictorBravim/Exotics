// Contato.tsx

export default function Contato() {
    return (
        <div id="contato" className="h-full lg:h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-64 gap-12 lg:gap-32 bg-cover bg-center" style={{ backgroundImage: "url('/contato.png')" }}>
            <div className="relative z-10 text-white w-full lg:w-1/2">
                <div className="text-center lg:text-left mb-4">
                    <h1 className="text-8xl mb-6">LUXO ESTILO DE VIDA E POTENCIA</h1>
                    <p className="text-sm md:text-lg text-gray-bg font-bold mb-4">Alugue carros potentes e luxuosos.</p>
                    <p className="mb-4">R$ 5,000 / Por Dia</p>
                    <button className="border border-yellow-custom p-2 px-4">
                        Alugar
                    </button>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="bg-blue-custom p-8 shadow-md">
                    <h3 className="text-white text-2xl font-bold mb-4">Entre em Contato</h3>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-yellow-custom">Nome:</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-yellow-custom">Email:</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-bold text-yellow-custom">Mensagem:</label>
                            <textarea id="message" name="message" rows={4} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                        </div>
                        <button type="submit" className="inline-block bg-yellow-custom text-blue-custom font-bold py-2 px-4 rounded-md hover:bg-blue-custom hover:text-white transition duration-300">Enviar</button>
                    </form>
                    <div className="mt-4">
                        <p className="text-sm text-white">Você também pode nos ligar em <span className="font-medium">+55 123 456 7890</span>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
