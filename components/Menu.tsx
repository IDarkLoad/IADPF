import { useState } from 'react';
import Image from 'next/image';
import logo from '../public/Logo.png';
import Link from 'next/link';


export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="absolute inset-x-0 top-0 z-50">
      <div className="flex justify-between items-center px-4 py-3 sm:px-6">
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={120} height={40} />
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414z"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                />
              </svg>
            )}
          </button>
        </div>
        <ul className={`sm:flex sm:space-x-4 sm:px-4 sm:py-2 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li>
            <Link href="/">
              <p className="text-white hover:text-gray-300">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <p className="text-white hover:text-gray-300">Projetos</p>
            </Link>
          </li>
          <li>
            <Link href="/calendar">
              <p className="text-white hover:text-gray-300">Calendário</p>
            </Link>
          </li>
          <li><a href="/sobre" className="text-white hover:text-gray-300">Sobre</a></li>
        </ul>
      </div>
    </div>
  );
}










