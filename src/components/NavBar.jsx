import {useEffect, useState} from 'react';
import logo from '../assets/j-logo.png';
import {FiMenu} from "react-icons/fi";
import {RxCross2} from "react-icons/rx";
// import Home from './Home';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('header ul li a');

            sections.forEach((sec) => {
                const top = window.scrollY;
                const offset = sec.offsetTop - 150;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach((link) => {
                        link.classList.remove('active');
                    });
                    document.querySelector(`header ul li a[href="#${id}"]`).classList.add('active');
                    setActiveLink(id);
                }
            });
        };

        window.onscroll = () => {
            setIsOpen(false)
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <>
            <header className='navbar flex justify-between items-center fixed backdrop-blur-lg w-full z-50'>
                <img className='h-10 w-8' src={logo} alt="" />

                <ul className={`md:flex md:space-x-12 list-none ${isOpen ? 'block absolute top-[70px] left-0 w-full px-8 py-2 bg-slate-500 navListOpen' : 'hidden'} md:block navList`}>
                    <li><a href="#home" className={activeLink === 'home' ? 'active' : ''} onClick={() => setActiveLink('home')}>Home</a></li>

                    <li><a href="#about" className={activeLink === 'about' ? 'active' : ''} onClick={() => setActiveLink('about')}>About</a></li>

                    <li><a href="#services" className={activeLink === 'services' ? 'active' : ''} onClick={() => setActiveLink('services')}>Services</a></li>

                    <li><a href="#skills" className={activeLink === 'skills' ? 'active' : ''} onClick={() => setActiveLink('skills')}>Skills</a></li>

                    <li><a href="#projects" className={activeLink === 'projects' ? 'active' : ''} onClick={() => setActiveLink('projects')}>Projects</a></li>

                    <li><a href="#contact" className={activeLink === 'contact' ? 'active' : ''} onClick={() => setActiveLink('contact')}>Contact</a></li>
                </ul>

                <div className="md:hidden bg-slate-500 p-1 rounded-sm" onClick={() => setIsOpen(!isOpen)}>
                    <div className={`icon-container transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
                        {isOpen ? <RxCross2 /> : <FiMenu />}
                    </div>
                </div>
            </header>

        </>
    );
};

export default NavBar;