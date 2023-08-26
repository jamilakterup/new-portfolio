import {useEffect, useState} from "react";
import {projects} from "../data";
import {AnimatePresence} from "framer-motion";
import ProjectsCard from "./ProjectsCard";
// import {FiExternalLink} from "react-icons/fi";

const Projects = () => {
    const [clickedValue, setClickedValue] = useState('');
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [isActiveButton, setIsActiveButton] = useState('All');
    // const [modal, setModal] = useState('');

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


    // main functionality-----------------------

    return (
        <section className="projects" id="projects">
            <div className="main-text">
                <span>What I will do for you</span>
                <h2>Latest projects</h2>
            </div>

            <div className="container mt-12 flex justify-center items-center flex-wrap gap-4">
                {
                    uniqueButton?.map((content, i) => (
                        <Button key={i} text={content} onClick={() => (setClickedValue(content), setIsActiveButton(content))} isActive={isActiveButton === `${content}`} />

                    ))
                }
            </div>

            <div className="portfolio-projects mt-10">
                <AnimatePresence>
                    {
                        filteredProjects.map((project, i) => (
                            <ProjectsCard key={i} project={project} />
                        ))
                    }
                </AnimatePresence>
            </div>
        </section >
    );
};

export default Projects;