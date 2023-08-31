import {useEffect, useState} from 'react';
import logo from '../assets/j-logo.png';
import {FiMenu} from "react-icons/fi";
import {RxCross2} from "react-icons/rx";
import {AnimatePresence, motion} from "framer-motion";

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


    // navbar link is here==============================---
    const navLink = <>
        <li><a href="#home" style={{'--i': 1}} className={activeLink === 'home' ? 'active' : ''} onClick={() => setActiveLink('home')}>Home</a></li>

        <li><a href="#about" style={{'--i': 2}} className={activeLink === 'about' ? 'active' : ''} onClick={() => setActiveLink('about')}>About</a></li>

        <li><a href="#services" style={{'--i': 3}} className={activeLink === 'services' ? 'active' : ''} onClick={() => setActiveLink('services')}>Services</a></li>

        <li><a href="#skills" style={{'--i': 4}} className={activeLink === 'skills' ? 'active' : ''} onClick={() => setActiveLink('skills')}>Skills</a></li>

        <li><a href="#projects" style={{'--i': 5}} className={activeLink === 'projects' ? 'active' : ''} onClick={() => setActiveLink('projects')}>Projects</a></li>

        <li><a href="#contact" style={{'--i': 6}} className={activeLink === 'contact' ? 'active' : ''} onClick={() => setActiveLink('contact')}>Contact</a></li>
    </>


    return (
        <>
            <header className='navbar flex justify-between items-center fixed backdrop-blur-lg w-full z-50'>
                <img className='logo h-10 w-8' src={logo} alt="" />

                <AnimatePresence>
                    <motion.div animate={{opacity: 1}}>
                        <ul className={`md:flex md:space-x-12 list-none ${isOpen ? 'block absolute top-[70px] left-0 w-full md:px-8 py-2 bg-slate-500 navListOpen' : 'hidden'} md:block navList`}>
                            {navLink}
                        </ul>
                    </motion.div>
                </AnimatePresence>
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