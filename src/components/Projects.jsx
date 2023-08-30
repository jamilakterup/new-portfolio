import {useEffect, useState} from "react";
import {projects} from "../data";
import {AnimatePresence} from "framer-motion";
import ProjectsCard from "./ProjectsCard";
// import {FiExternalLink} from "react-icons/fi";
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


const Projects = () => {
    const [clickedValue, setClickedValue] = useState('');
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [isActiveButton, setIsActiveButton] = useState('All');
    // const [modal, setModal] = useState('');
    // scroll animation functionality===================
    const [isVisible, setIsVisible] = useState(false);
    // const isLargeScreen = window.innerWidth > 992;

    const uniqueItems = new Set();
    projects.forEach(obj => uniqueItems.add(obj.category));
    const uniqueButton = Array.from(uniqueItems);


    useEffect(() => {
        {
            clickedValue === '' || clickedValue === 'All' ? setFilteredProjects(projects) : setFilteredProjects(projects.filter((project) => project.category === clickedValue));
        }
    }, [clickedValue]);



    const Button = ({text, isActive, onClick}) => {

        return (
            <button className={`${isActive ? 'active-btn' : 'projects-btn'} h-9 mx-6`} onClick={onClick}>
                <a className="single-btn">{text}</a>
            </button>
        );
    };



    // scroll animation============ 

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const triggerPosition = 3680;

        if (scrollPosition > triggerPosition || scrollPosition < 2700) {
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

    // main functionality-----------------------

    return (
        <section className="projects" id="projects">
            <LightSpeed left opposite when={isVisible}>
                <div className="main-text">
                    <span>What I will do for you</span>
                    <h2>Latest projects</h2>
                </div>
            </LightSpeed>

            <div className="container mt-12 flex justify-center items-center flex-wrap gap-4">
                {
                    uniqueButton?.map((content, i) => (
                        <Zoom key={i} left when={isVisible}>
                            <Button text={content} onClick={() => (setClickedValue(content), setIsActiveButton(content))} isActive={isActiveButton === `${content}`} />
                        </Zoom>
                    ))
                }
            </div>

            <Fade when={isVisible}>
                <div className="portfolio-projects mt-10">
                    <AnimatePresence>
                        {
                            filteredProjects.map((project, i) => (
                                <ProjectsCard key={i} project={project} />
                            ))
                        }
                    </AnimatePresence>
                </div>
            </Fade>
        </section >
    );
};

export default Projects;