import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="center mt-8 flex flex-col items-center bg-gray-800 p-6 text-sm text-white">
      <div className="mb-6">
        <Image src="/logo.png" alt="Logo" width={160} height={60} />
      </div>
      <p className="mb-4">Rua Juvina de Oliveira Monteiro, 461 - Altiplano Cabo Branco - João Pessoa/PB</p>
      <div className="flex space-x-4">
        <a className="footer-link" href="https://facebook.com/sua_pagina" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a className="footer-link" href="https://twitter.com/seu_perfil" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a className="footer-link" href="https://instagram.com/seu_perfil" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </footer>
  );
}



