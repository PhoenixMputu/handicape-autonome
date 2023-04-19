import Image from "next/image";
import Link from "next/Link";
import { useState } from 'react';

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [user, setUser] = useState('Victory Deo');
    const [dropdown, setDropdown] = useState(false)
  return (
    <nav className="w-full shadow bg-blue-800">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <h2 className="text-2xl text-white font-bold">HANDICAP AUTONOME</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white">
                  <Link href="/event">Evénéments</Link>
                </li>
                <li className="text-white">
                  <Link href="/scholarships">Bourses d' études</Link>
                </li>
                <li className="text-white">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="text-white">
                  <Link href="/about">A propos</Link>
                </li>
                <li className="w-max bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  <Link href="/contact">Faire un don</Link>
                </li>
                {user ?
                    (<div className="relative inline-block text-left">
                        <div>
                            <button type="button" onClick={() => setDropdown(!dropdown)} className="inline-flex w-full justify-center gap-x-1.5 rounded bg-blue-800 px-4 py-2 font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                {user}
                                <svg className="-mr-1 h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            {dropdown && <div className="w-max absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                <div className="py-1" role="none">
                                    <Link href="/account" className="hover:bg-gray-100 text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Mon compte</Link>
                                    <li onClick={() => console.log("Hello")} className="hover:bg-gray-100 text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Se deconnecter</li>
                                </div>
                            </div>}
                        </div>
                    </div>) : 
                        (<li className="bg-blue-800 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
                            <Link href="/contact">Se connecter</Link>
                        </li>)
                    }
                </ul>
            </div>
          </div>
        </div>
      </nav>
  );
}
