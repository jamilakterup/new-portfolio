import Tilt from 'react-parallax-tilt'
import {skills} from '../data';
import {useEffect, useState} from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';


const Skills = () => {
    // scroll animation functionality===================
    const [isVisible, setIsVisible] = useState(false);
    // const isLargeScreen = window.innerWidth > 992;

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const triggerPosition = 2650;

        if (scrollPosition > triggerPosition || scrollPosition < 1700) {
            setIsVisible(false);
        }
        else {
            setIsVisible(true);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])



    return (
        <section className="skills" id="skills">
            <LightSpeed left opposite when={isVisible}>
                <div className="main-text">
                    <span>Technical and professional</span>
                    <h2>My Skills</h2>
                </div>
            </LightSpeed>

            <div className="skills__container gap-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6">
                {
                    skills.map(({title, img}, index) => {
                        return (
                            <Zoom key={index} left when={isVisible}>
                                <Tilt className="parallax-effect-glare-scale" perspective={1000} glareEnable={true} glareMaxOpacity={0.8} glareColor={`var(--hover-color)`} glarePosition="right" glareBorderRadius="15px" >
                                    <div className="inner-element p-5 flex justify-center items-start h-full">
                                        <div>
                                            <img className="w-24" src={img} alt="" />
                                            <p className="absolute bottom-6 w-full left-0 text-center uppercase mt-4">{title}</p>
                                        </div>
                                    </div>
                                </Tilt>
                            </Zoom>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Skills;