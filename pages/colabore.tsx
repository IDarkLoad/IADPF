import { useState } from 'react';
import { CloudArrowUpIcon, LockClosedIcon, ArrowPathIcon, FingerPrintIcon } from '@heroicons/react/24/outline';
import Menu from '../components/Menu';

const features = [
  {
    name: 'Doações Seguras',
    description:
      'Faça suas doações de maneira segura e confiável. Utilizamos tecnologia avançada para proteger suas transações.',
    icon: LockClosedIcon,
  },
  {
    name: 'Transparência',
    description:
      'Comprometemo-nos a fornecer transparência em relação ao uso dos fundos arrecadados. Saiba como suas doações fazem a diferença.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Dízimos Online',
    description:
      'Contribua com seus dízimos de maneira simples e conveniente. Acesse a plataforma online para realizar suas contribuições.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Segurança Avançada',
    description:
      'Priorizamos a segurança das suas informações. Utilizamos tecnologias avançadas para proteger seus dados pessoais.',
    icon: FingerPrintIcon,
  },
];

export default function Doacoes() {
  const [copiedPix, setCopiedPix] = useState(false);

  const handleCopy = (textToCopy, setCopiedFunction) => {
    navigator.clipboard.writeText(textToCopy);
    setCopiedFunction(true);
    setTimeout(() => setCopiedFunction(false), 3000); 
  };

  const pixKey = '13.677.181/0001-37'; 

  return (
    <header>
      <Menu />
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-amber-600">Contribua Conosco</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Faça parte da nossa missão através das suas doações
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              Sua contribuição ajuda a apoiar nossas atividades, obras sociais e o fortalecimento da comunidade. Agradecemos por sua generosidade.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-100">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-100">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Nosso PIX e Conta Bancária</h2>
            <p className="text-lg text-gray-100">
              Utilize a chave PIX abaixo para realizar suas doações e contribuições. Agradecemos por seu apoio!
            </p>
            <div className="flex items-center mt-2">
              <p className="mr-2 text-white">{pixKey}</p>
              <button
                onClick={() => handleCopy(pixKey, setCopiedPix)}
                className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 focus:outline-none focus:ring focus:border-amber-300"
              >
                {copiedPix ? 'Copiado!' : 'Copiar Chave PIX'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}




