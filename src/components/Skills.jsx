import Tilt from 'react-parallax-tilt'
import {skills} from '../data';
import {useState, useEffect} from 'react';
import {AnimatePresence, motion} from 'framer-motion';


const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);

    const isLargeScreen = window.innerWidth > 992;
    let startAnimationOn;
    let stopAnimationOn;

    if (isLargeScreen) {
        startAnimationOn = 1500;
        stopAnimationOn = 2700;
    }
    else {
        startAnimationOn = 3400;
        stopAnimationOn = 6660;
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
        <section className="skills" id="skills">
            <AnimatePresence>
                <motion.div
                    initial={isLargeScreen
                        ? {opacity: 0, x: -100}
                        : {opacity: 0, x: 0}}
                    animate={isLargeScreen
                        ? {opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100, }
                        : {opacity: isVisible ? 1 : 0, x: 0}}
                    className="main-text"
                    transition={{duration: .8}}
                >
                    <span>Technical and professional</span>
                    <h2>My Skills</h2>
                </motion.div>
            </AnimatePresence>

            <motion.div
                initial={isLargeScreen
                    ? {opacity: 0, scale: 0}
                    : {opacity: 0, scale: 0}}
                animate={isLargeScreen
                    ? {opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0, x: 0}
                    : {opacity: isVisible ? 1 : 0, scale: 1, x: 0}}
                transition={{duration: 0.8}}
                className="skills__container gap-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6">
                {
                    skills.map(({title, img}, index) => {
                        return (
                            <Tilt key={index} className="parallax-effect-glare-scale" perspective={1000} glareEnable={true} glareMaxOpacity={0.8} glareColor={`var(--hover-color)`} glarePosition="right" glareBorderRadius="15px" >
                                <div className="inner-element p-5 flex justify-center items-start h-full">
                                    <div>
                                        <img className="w-24" src={img} alt="" />
                                        <p className="absolute bottom-6 w-full left-0 text-center uppercase mt-4">{title}</p>
                                    </div>
                                </div>
                            </Tilt>
                        )
                    })
                }
            </motion.div>
        </section>
    );
};

export default Skills;