import Image from 'next/image';
import calendar from '../public/calendar.jpg';
import Menu from '../components/Menu';

export default function Calendario() {
    return (
        <div className="relative">
            <header className="relative h-screen">
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        priority
                        objectFit="cover"
                        layout="fill"
                        src={calendar}
                        placeholder="blur"
                        alt="banner-calendar"
                    />
                    <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
                </div>

                <Menu />

                <div className="flex flex-col justify-center items-center h-full absolute top-0 left-0 right-0">
                    <div className="text-center">
                        <h1 className="mt-1 text-center font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl">
                            <span className="block text-white">Calendário</span>
                        </h1>
                        <p className="relative left-0 right-0 mx-auto mt-5 max-w-xl text-center text-lg font-semibold uppercase tracking-wide text-white">
                            Você pode encontrar nossas datas neste calendário e manter-se atualizado.
                        </p>

                        {/* Calendar Frame with Weekly Events */}
                        <div className="bg-white p-4 rounded-md mt-8">
                            <h2 className="text-xl font-semibold mb-2">Eventos Semanais:</h2>
                            <ul>
                                <li>Culto da Família - Toda quarta-feira às 19:30</li>
                                <li>Culto de Libertação - Toda sexta-feira às 19:30</li>
                                <li>Culto de Adoração - Todo domingo às 18:00</li>
                            </ul>
                        </div>

                        {/* Calendar Frame with Special Events */}
                        <div className="bg-white p-4 rounded-md mt-8">
                            <h2 className="text-xl font-semibold mb-2">Eventos Especiais:</h2>
                            <ul>
                                <li>Culto dos Casais - Dia 24 de fevereiro às 20:00</li>
                                <li>Batismo nas Águas - Dia 17 de março</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

