import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";
import {FaLayerGroup, FaCode} from "react-icons/fa";
import {FiMonitor} from "react-icons/fi";

const Services = () => {
    // framer motion style===================
    const [isVisible, setIsVisible] = useState(false);

    const isLargeScreen = window.innerWidth > 992;
    let startAnimationOn;
    let stopAnimationOn;

    if (isLargeScreen) {
        startAnimationOn = 820;
        stopAnimationOn = 1880;
    }
    else {
        startAnimationOn = 1550;
        stopAnimationOn = 3560;
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
        <section className="services" id="services">
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
                    <span>What I will do for you</span>
                    <h2>My services</h2>
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
                    transition={{duration: 0.8}}
                    className="section-services">
                    <div className="service-box">
                        <div className="service-icon w-fit">
                            <FaLayerGroup />
                        </div>
                        <h3>MERN stack developer</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores molestiae sit expedita. Praesentium quos nesciunt at dignissimos eos placeat reiciendis?</p>

                        <div className="btn-box service-btn h-11">
                            <a href="#" className="btn">Read More</a>
                        </div>
                    </div>

                    <div className="service-box">
                        <div className="service-icon w-fit">
                            <FiMonitor />
                        </div>
                        <h3>MERN stack developer</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores molestiae sit expedita. Praesentium quos nesciunt at dignissimos eos placeat reiciendis?</p>

                        <div className="btn-box service-btn h-11">
                            <a href="#" className="btn">Read More</a>
                        </div>
                    </div>

                    <div className="service-box">
                        <div className="service-icon w-fit">
                            <FaCode />
                        </div>
                        <h3>MERN stack developer</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores molestiae sit expedita. Praesentium quos nesciunt at dignissimos eos placeat reiciendis?</p>

                        <div className="btn-box service-btn h-11">
                            <a href="#" className="btn">Read More</a>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section >
    );
};

export default Services;