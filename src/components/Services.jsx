import {FaLayerGroup, FaCode} from "react-icons/fa";
import {FiMonitor} from "react-icons/fi";

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="main-text">
                <span>What I will do for you</span>
                <h2>My services</h2>
            </div>

            <div className="section-services">
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
            </div>
        </section>
    );
};

export default Services;