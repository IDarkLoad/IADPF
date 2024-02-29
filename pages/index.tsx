import Image from 'next/image';
import img from '../public/hero.jpeg';
import pastor from '../public/pastor.jpeg';
import famigos from '../public/amigos.jpeg';
import church from '../public/church.jpg';
import Menu from '../components/Menu';

export default function Gallery() {
  return (
    <div className="relative">
      <header className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            priority
            objectFit="cover"
            layout="fill"
            src={img}
            placeholder="blur"
            alt="Banner do PR Clovis"
          />
          <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
        </div>

        <Menu />

        <div className="flex flex-col justify-center items-center h-full absolute top-0 left-0 right-0">
          <div className="text-center">
            <h1 className="mt-1 text-center font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl">
              <span className="block text-white">IADPF</span>
            </h1>
            <p className="relative left-0 right-0 mx-auto mt-5 max-w-xl text-center text-lg font-semibold uppercase tracking-wide text-white">
              Conectando pessoas à fé e ao amor de Cristo.
            </p>
          </div>
        </div>
      </header>

      <section className="py-12 flex justify-center items-center" style={{ background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(168, 159, 159, 0.5) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Comece sua jornada de fé
          </h2>
          <p className="mt-4 text-lg text-gray-700 text-center">
            Em meio à agitação do mundo moderno, muitas vezes perdemos
            de vista o que realmente importa: a conexão espiritual
            com o Divino. Convidamos você a fazer uma jornada de descoberta
            e renovação espiritual. Conhecer Deus é uma jornada que transforma vidas,
            preenche corações vazios e dá sentido à existência. Abra-se para esta
            experiência única de amor, graça e propósito divino. Venha conhecer
            Deus conosco, pois Ele está pronto para recebê-lo de braços abertos.
          </p>
          <div className="flex justify-center mt-8">
            <a href="https://www.google.com/maps/place/Igreja+Assembl%C3%A9ia+de+Deus+Pentecostal+da+F%C3%A9/@-7.1380851,-34.8278543,17z/data=!3m1!4b1!4m6!3m5!1s0x7acc3d22e2954c7:0xcedc1bda04465845!8m2!3d-7.1380851!4d-34.8252794!16s%2Fg%2F11p12z5db_?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-black text-black-500 font-semibold rounded-md transition duration-300 ease-in-out hover:bg-black hover:text-white">
              Localizar
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="absolute inset-0">
          <Image
            src={famigos}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-white">
            <div className="p-4">
              <p className="text-3xl sm:text-4xl font-bold">1000+</p>
              <p className="text-base sm:text-lg">Membros</p>
            </div>
            <div className="p-4">
              <p className="text-3xl sm:text-4xl font-bold">3100+</p>
              <p className="text-base sm:text-lg">Vidas em 2023</p>
            </div>
            <div className="p-4">
              <p className="text-3xl sm:text-4xl font-bold">680Mil</p>
              <p className="text-base sm:text-lg">Seguidores</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 flex justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Pr. Presidente Clóvis Bernardo de Lima</h2>
            <p className="mt-4 text-lg text-gray-700">
              Pastor Clóvis Bernardo de Lima é um líder espiritual reverenciado e uma figura inestimável
              na comunidade religiosa. Sua dedicação incansável à palavra de Deus o transformou em uma
              fonte confiável de orientação espiritual. Além de suas pregações inspiradoras, sua compaixão
              e apoio incondicionais têm sido fundamentais para muitas famílias em momentos desafiadores.
              Sua influência vai além do púlpito, proporcionando conforto, esperança e direção a todos que
              buscam respostas espirituais. Como profeta e mensageiro da palavra divina, o Pastor Clóvis
              Bernardo de Lima continua a desempenhar um papel vital na transformação de vidas. Seu compromisso
              com valores de compaixão e amor o tornou uma inspiração para inúmeras pessoas em sua busca por
              uma conexão mais profunda com Deus.
            </p>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <Image
              src={pastor}
              alt="Descrição da Imagem"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="absolute inset-0">
          <Image
            src={church}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <div className="bg-opacity-70 bg-black p-8 rounded-lg">
            <h2 className="text-3xl sm:text-4xl font-bold">Quero Conhecer Jesus</h2>
            <p className="mt-4 text-lg">Venha se unir a nós e embarque em uma jornada espiritual de
              transformação, fortalecendo a sua fé, avivando a chama da sua devoção ao serviço divino
              e tornando-se um líder que exerce um impacto eterno nas vidas das pessoas. Deixe o amor
              de Cristo guiar o seu caminho e a sua vida se tornará uma bênção para todos aqueles que você tocar.</p>
            <button className="px-6 py-3 mt-4 border-2 border-white text-white font-semibold rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-black">
              Quero conhecer Jesus
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


