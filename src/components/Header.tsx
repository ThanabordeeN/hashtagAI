import React, { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const targetId = target.getAttribute('href')?.substring(1);
      const targetElement = document.getElementById(targetId || '');
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      links.forEach(link => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
      isScrolled ? 'bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center space-x-2 cursor-pointer">
          <span className={`text-2xl font-bold ${
            isScrolled ? 'text-accent-color' : 'text-gray-900 dark:text-gray-100'
          }`}>#</span>
          <span className={`text-xl font-bold ${
            isScrolled ? 'text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
          }`}>HashtagAI</span>
        </a>
        <nav className="flex items-center">
          <ul className="flex space-x-6 mr-6">
            {['Products', 'Research', 'Consulting', 'Open Source'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className={`transition-colors ${
                    isScrolled
                      ? 'text-gray-700 dark:text-gray-300 hover:text-accent-color dark:hover:text-accent-color'
                      : 'text-gray-900 dark:text-gray-100 hover:text-accent-color dark:hover:text-accent-color'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

export default Header