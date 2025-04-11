import { useRef } from 'react';
import './App.css'
import JoelAvatar from './img/joel_headshot.jpg'
import HomePage from './components/HomePage';

function App() {
  const hamburgerMenuButton = useRef<HTMLDivElement>(null);
  const hamburgerMenu = useRef<HTMLUListElement>(null);

  const toggleHamburgerMenu = () => {
    hamburgerMenu.current?.classList.toggle('hidden');
    //toggle bg-white on all children of hamburgerMenuButton
    hamburgerMenuButton.current?.childNodes.forEach((child) => {
      (child as HTMLElement).classList.toggle('bg-white');
    });
  }

  return (
    <>
      <div className="h-screen bg-gradient-to-t from-blue-200 relative">
        <nav className='w-full fixed top-0'>
          <div className='container mx-auto p-5 flex justify-between items-center text-gray-600'>
            <img className='w-10 h-10 md:w-20 md:h-20 object-cover rounded-full' src={JoelAvatar} />
            {/* Hamburger menu for small screens */}
            <div ref={hamburgerMenuButton} onClick={toggleHamburgerMenu} className='space-y-1 md:hidden cursor-pointer z-1'>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
            {/* Opened hamburger menu */}
            <ul ref={hamburgerMenu} className='hidden md:hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center uppercase'>
              <li><a href="https://www.linkedin.com/in/joel-lear/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/jmlear" target="_blank">GitHub</a></li>
            </ul>
          </div>
        </nav>
        <HomePage />
      </div>
    </>
  )
}

export default App
