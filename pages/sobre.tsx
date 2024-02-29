import Image from 'next/image';
import igreja from '../public/hist.jpg';
import clovis from '../public/clovis.jpeg';
import Menu from '../components/Menu';

export default function Sobre() {
    return (
        <div className="relative">
            <header className="relative h-screen">
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        priority
                        objectFit="cover"
                        layout="fill"
                        src={igreja}
                        placeholder="blur"
                        alt="igreja"
                    />

                    <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
                </div>

                <Menu />

                <div className="flex flex-col justify-center items-center h-full absolute top-0 left-0 right-0">
                    <div className="text-center">
                        <h1 className="mt-1 text-center font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl">
                            <span className="block text-white">Nossa História</span>
                        </h1>
                    </div>
                </div>
            </header>

            <section className="py-12 flex justify-center items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 lg:pr-8">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Pastor Clóvis Bernardo de lima</h2>
                        <p className="mt-4 text-lg text-gray-700">
                            A trajetória do Pastor Clóvis Bernardo de Lima é uma poderosa saga de superação e renovação.
                            Desde uma infância marcada por experiências traumáticas, Clóvis enfrentou o abuso com coragem
                            e fé. Sua vida mudou radicalmente quando encontrou a libertação divina, abandonando seu
                            passado como travesti e superando o homossexualismo.
                        </p>
                        <p className="mt-4 text-lg text-gray-700">
                            A transformação não se limitou à espiritualidade; Clóvis emergiu como um líder espiritual
                            exemplar, comprometido com sua fé e ministério. Casado há mais de duas décadas, é um pai
                            dedicado a três filhos, construindo uma família sólida e amorosa. Seu testemunho ressoa
                            como uma fonte inspiradora para aqueles que buscam esperança e um caminho de redenção,
                            destacando o poder do amor e da graça divina na reconstrução de vidas.
                        </p>
                        <p className="mt-4 text-lg text-gray-700">
                            Hoje, o Pastor Clóvis compartilha sua experiência como um farol de esperança, mostrando que,
                            independentemente das adversidades, a fé e a transformação podem abrir portas para uma vida
                            plena em Deus. Sua jornada inspira outros a enfrentarem seus próprios desafios, acreditando
                            no poder da graça para restaurar, renovar e conduzir a uma vida de propósito e significado.
                        </p>

                    </div>
                    <div className="lg:w-1/2 mt-6 lg:mt-0">
                        <Image
                            src={clovis}
                            alt="Descrição da Imagem"
                            width={500}
                            height={500}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </section>
            <section className="py-12 flex justify-center items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mt-6 lg:mt-0">
                        <Image
                            src={clovis}
                            alt="Descrição da Imagem"
                            width={500}
                            height={500}
                            className="rounded-lg"
                        />
                    </div>
                    <div className="lg:w-1/2 lg:pr-8">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Pastor Clóvis Bernardo de Lima</h2>
                        <p className="mt-4 text-lg text-gray-700">
                            A Ação Social Terra Fértil, liderada por nossa igreja, é um projeto notável
                            que visa ajudar famílias vulneráveis, fornecendo recursos essenciais como
                            alimentos, roupas e itens de higiene. Destacando-se pela ênfase em capacitar
                            as pessoas, a iniciativa promove oportunidades de emprego e habilidades práticas,
                            fortalecendo a autonomia das comunidades para construir um futuro mais promissor,
                            enquanto dedica atenção especial à saúde mental e espiritual.
                        </p>
                        <p className="mt-4 text-lg text-gray-700">
                            Ao agir como catalisador de transformação social, a Ação Social Terra Fértil
                            vai além do alívio imediato, deixando um impacto duradouro ao promover dignidade
                            e resiliência nas vidas daqueles que alcança. Essa demonstração tangível
                            do comprometimento da igreja evangélica contribui significativamente para
                            a construção de comunidades mais fortes e esperançosas.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}