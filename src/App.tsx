import { useRef } from 'react';
import './App.css'
import JoelAvatar from './img/joel_avatar.png'
import HomePage from './components/HomePage';

function App() {
  const hamburgerMenuButton = useRef<HTMLElement>(null);
  const hamburgerMenu = useRef<HTMLElement>(null);

  const toggleHamburgerMenu = () => {
    hamburgerMenu.current?.classList.toggle('hidden');
    //toggle bg-white on all children of hamburgerMenuButton
    hamburgerMenuButton.current?.childNodes.forEach((child) => {
      (child as HTMLElement).classList.toggle('bg-white');
    });
  }

  return (
    <>
      <div className="h-1/2 lg:h-screen bg-gradient-to-t from-blue-200 relative">
        <nav className='w-full fixed top-0'>
          <div className='container mx-auto py-5 flex justify-between items-center text-gray-600'>
            <img className='w-10 h-10 md:w-20 md:h-20 object-cover rounded-full' src={JoelAvatar} />
            <ul className='hidden md:flex space-x-4 uppercase'>
              <li>About</li>
              <li>Contact</li>
            </ul>
            {/* Hamburger menu for small screens */}
            <div ref={hamburgerMenuButton} onClick={toggleHamburgerMenu} className='space-y-1 md:hidden cursor-pointer z-1'>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
            {/* Opened hamburger menu */}
            <ul ref={hamburgerMenu} className='hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center uppercase'>
              <li>Services</li>
              <li>Projects</li>
              <li>Blog</li>
            </ul>
          </div>
        </nav>
        <HomePage />
      </div>
    </>
  )
}

export default App
