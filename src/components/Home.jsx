import {useEffect} from 'react';
import img from '../assets/me-1.png';
import CV from '../assets/jamil_MERNstack-resume.pdf';
import {FaFacebookF, FaInstagram, FaLinkedin, FaGithub, FaDownload} from "react-icons/fa";

const Home = () => {
    useEffect(() => {
        let words = document.querySelectorAll('.word');

        words.forEach(word => {
            let letters = word.textContent.split('');
            word.textContent = "";
            letters.forEach(letter => {
                let span = document.createElement('span');
                span.textContent = letter;
                span.className = "letter";
                word.append(span);
            });
        });

        let currentWordIndex = 0;
        let maxWordIndex = words.length - 1;

        words[currentWordIndex].style.opacity = "1";

        let changeText = () => {
            let currentWord = words[currentWordIndex];
            let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

            Array.from(currentWord.children).forEach((letter, i) => {
                setTimeout(() => {
                    letter.className = "letter out"
                }, i * 80);
            });
            nextWord.style.opacity = "1";
            Array.from(nextWord.children).forEach((letter, i) => {
                letter.className = "letter behind";
                setTimeout(() => {
                    letter.className = "letter in";
                }, 340 + i * 80)
            });
            currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
        }

        changeText();
        setInterval(changeText, 3000);
    }, []);


    const items = <>
        <span className="word">Youtuber</span>
        <span className="word">Web&nbsp;Designer</span>
        <span className="word">Web&nbsp;Developer</span>
        <span className="word">Frontend&nbsp;Developer</span>
        <span className="word">UI/UX&nbsp;Developer</span>
    </>

    const icons = <>
        <a href="https://www.facebook.com/jamilakterup"><FaFacebookF className="icon" /></a>
        <a href="https://www.instagram.com/jamilakterup/"><FaInstagram className="icon" /></a>
        <a href="https://www.linkedin.com/in/jamilakterup/"><FaLinkedin className="icon" /></a>
        <a href="https://github.com/jamilakterup"><FaGithub className='icon' /></a>
    </>

    return (
        <section id="home" className="home grid md:grid-cols-2 min-h-screen items-center">
            <div className="home-content">
                <h1 className='text-5xl font-semibold'>Hi! {"I'm"} <span>Jamil</span></h1>
                <div className="change-text text-2xl font-semibold">
                    <h3 className='pe-2'>And {"I'm"} </h3>
                    <h3>{items}</h3>
                </div>
                <p className='text-[#dbdbdb] leading-relaxed my-5 indent-12 first-letter:text-4xl text-justify font-mono'>I am a passionate and skilled MERN stack developer with expertise in HTML, CSS, Bootstrap, Tailwind, JavaScript (ES6+), React, Express, Node.js, MongoDB, Firebase, and Vercel. My journey in the world of web development began with an ardent fascination for creating dynamic and user-friendly interfaces.</p>

                <div className="btn-box flex justify-between w-80 h-11">
                    <a href={CV} download='' className="btn"><FaDownload className="icon" /> Download CV</a>
                    <a href="mailto:jamilakterup@gmail.com" className="btn">Hire Me Now</a>
                </div>

                <div className="social-icons mt-[4rem] flex justify-between w-[320px] h-10">
                    {icons}
                </div>
            </div>

            <div className="home-image mt-12 md:mt-0 justify-self-center md:justify-self-end">
                <div className="img-box">
                    <img className='relative z-10 man-img' src={img} alt="" />
                    <div className="info-about">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;