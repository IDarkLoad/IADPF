import Image from 'next/image';
import Act from '../public/Action.jpeg';
import acao from '../public/Acao.jpeg';
import qrcode from '../public/QrCode.jpeg';
import Menu from '../components/Menu';

export default function Projetos() {
  return (
    <div className="relative">
      <header className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            priority
            objectFit="cover"
            layout="fill"
            src={Act}
            placeholder="blur"
            alt="igreja"
          />

          <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
        </div>

        <Menu />

        <div className="flex flex-col justify-center items-center h-full absolute top-0 left-0 right-0">
          <div className="text-center">
            <h1 className="mt-1 text-center font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl">
              <span className="block text-white">Ação Social</span>
            </h1>
            <p className="relative left-0 right-0 mx-auto mt-5 max-w-xl text-center text-lg font-semibold uppercase tracking-wide text-white">
              Renovando vidas com fé e o amor de Cristo.
            </p>
          </div>
        </div>
      </header>

      <section className="py-12 flex justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Ação Social Terra Fértil</h2>
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
            <p className="mt-4 mb-4 text-lg text-gray-700">
              Contribua com esse Projeto pelo Pix: CNPJ: 13.677.181/0001-37 Ou pelo QRCODE abaixo
            </p>
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <Image
                src={qrcode}
                alt="Descrição da Imagem"
                width={120}
                height={120}
                className="rounded-lg"
              />
            </div>

          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <Image
              src={acao}
              alt="Descrição da Imagem"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}