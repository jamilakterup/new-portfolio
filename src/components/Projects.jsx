import {useEffect, useState} from "react";
import {projects} from "../data";
import {AnimatePresence, motion} from "framer-motion";
import ProjectsCard from "./ProjectsCard";


const Projects = () => {
    const [clickedValue, setClickedValue] = useState('');
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [isActiveButton, setIsActiveButton] = useState('All');
    // animation state--------
    const [isVisible, setIsVisible] = useState(false);


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



    const isLargeScreen = window.innerWidth > 992;
    let startAnimationOn;
    let stopAnimationOn;

    if (isLargeScreen) {
        startAnimationOn = 2550;
        stopAnimationOn = 3650;
    }
    else {
        startAnimationOn = 6360;
        stopAnimationOn = 8655;
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
        <section className="projects" id="projects">
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
                    <h2>Latest projects</h2>
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
                className="container mt-12 flex justify-center items-center flex-wrap gap-4">
                {
                    uniqueButton?.map((content, i) => (
                        <Button key={i} text={content} onClick={() => (setClickedValue(content), setIsActiveButton(content))} isActive={isActiveButton === `${content}`} />
                    ))
                }
            </motion.div>

            <motion.div
                initial={isLargeScreen
                    ? {opacity: 0, scale: 0}
                    : {opacity: 0, scale: 0}}
                animate={isLargeScreen
                    ? {opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0, x: 0}
                    : {opacity: isVisible ? 1 : 0, scale: 1, x: 0}}
                transition={{duration: 0.8}}
                className="portfolio-projects mt-10">
                <AnimatePresence>
                    {
                        filteredProjects.map((project, i) => (
                            <ProjectsCard key={i} project={project} />
                        ))
                    }
                </AnimatePresence>
            </motion.div>
        </section >
    );
};

export default Projects;