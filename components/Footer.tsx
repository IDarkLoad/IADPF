import Image from 'next/image';
import logo from '../public/Logo.png';

export default function Footer() {
  return (
    <footer className="center flex flex-col items-center bg-black p-6 text-sm text-white">
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={120} height={40} />
      </div>
      <p className="mb-4">Rua Juvina de Oliveira Monteiro, 461 - Altiplano Cabo Branco - João Pessoa/PB</p>
      <div className="flex space-x-4">
        <a className="footer-link" href="https://www.youtube.com/c/PastorClovisBernardo" target="_blank" rel="noopener noreferrer">
          Youtube
        </a>
        <a className="footer-link" href="https://www.tiktok.com/@pastorclovisbernardo" target="_blank" rel="noopener noreferrer">
          TikTok
        </a>
        <a className="footer-link" href="https://www.instagram.com/iadpf_pb/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
      <div className="mt-4 text-gray-600">
        Desenvolvido por <a className="footer-link" href="https://lithiumcompany.online/" target="_blank" rel="noopener noreferrer">Lithium Company</a>
      </div>
    </footer>
  );
}




