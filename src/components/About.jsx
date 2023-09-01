import {useEffect, useState} from "react";
import image from "../assets/me-2.png";
import {AnimatePresence, motion} from "framer-motion";

const About = () => {
    // scroll animation functionality==========
    const [isVisible, setIsVisible] = useState(false);

    const isLargeScreen = window.innerWidth > 992;
    let startAnimationOn;
    let stopAnimationOn;

    if (isLargeScreen) {
        startAnimationOn = 200;
        stopAnimationOn = 1022;
    }
    else {
        startAnimationOn = 620;
        stopAnimationOn = 1740;
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > stopAnimationOn || scrollPosition < startAnimationOn) {
                setIsVisible(false);
            }
            else {
                setIsVisible(true);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [startAnimationOn, stopAnimationOn])



    return (
        <section className={`about flex md:flex-row flex-col-reverse justify-center items-center gap-12`} id="about">
            <AnimatePresence>
                <motion.div
                    initial={isLargeScreen
                        ? {opacity: 0, x: -100}
                        : {opacity: 0, x: 0}}
                    animate={isLargeScreen
                        ? {opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100, }
                        : {opacity: isVisible ? 1 : 0, x: 0}}
                    transition={{duration: .8}}
                    className="img-about">
                    <img src={image} alt="" />
                    <div className="info-about1 ms-4">
                        <span>1+</span>
                        <p>Year of experience</p>
                    </div>
                    <div className="info-about2">
                        <span>50+</span>
                        <p>Projects complete</p>
                    </div>
                </motion.div>
            </AnimatePresence>

            <AnimatePresence>
                <motion.div
                    initial={isLargeScreen
                        ? {opacity: 0, x: 100}
                        : {opacity: 0, x: 0}}
                    animate={isLargeScreen
                        ? {opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100, }
                        : {opacity: isVisible ? 1 : 0, x: 0}}
                    transition={{duration: .8}}
                    className="about-content">
                    <div className="md:text-left mb-8 text-center">
                        <span>Let me introduce myself</span>
                        <h2>About me</h2>
                        <h3>A story of good</h3>
                    </div>
                    <p className="indent-12 font-mono text-justify first-letter:text-3xl">I have successfully collaborated on various projects, leveraging my knowledge in web development to create seamless user experiences. My adaptability extends to various development environments, making me comfortable with a diverse range of tools and frameworks.</p>

                    <div className="btn-box h-11 md:text-left text-center">
                        <a href="https://bdscienceclub.blogspot.com/" className="btn">Read more!</a>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
};

export default About;