import Tilt from 'react-parallax-tilt'
import {skills} from '../data';


const Skills = () => {


    return (
        <section className="skills" id="skills">
            <div className="main-text">
                <span>Technical and professional</span>
                <h2>My Skills</h2>
            </div>

            <div className="skills__container gap-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6">
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
            </div>
        </section>
    );
};

export default Skills;