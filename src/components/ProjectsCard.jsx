import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import {RiCloseFill} from 'react-icons/ri';


const ProjectsCard = ({project}) => {
    const [modal, setModal] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen])

    return (
        <>
            <motion.div
                initial={{transform: "scale(0)"}}
                animate={{transform: "scale(1)"}}
                exit={{transform: "scale(0)"}}
                onClick={() => {setIsOpen(true), setModal(project)}}
                className={`${project.category == "All" ? "hidden" : "project-card"} cursor-pointer mix filter-class project-card`}
            >
                <img src={project.img} alt="projects img" className="h-64 w-full object-cover object-top" />
                <div className="project-details">
                    <h2 className="text-2xl">{project.category}</h2>
                    <p>Project Name:- {project.title}</p>
                </div>
            </motion.div>


            {
                isOpen && <div className="fixed inset-0 z-50 bg-white/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 dark:bg-gray-950/80"> <div className="modal-div fixed rounded-lg left-[50%] top-[50%] z-50 grid max-w-xs sm:max-w-lg md:max-w-2xl w-full translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full text-black">
                    <button className="absolute top-0 right-0 hover:bg-slate-400 duration-300 rounded-full p-2" onClick={() => setIsOpen(false)}><RiCloseFill className="text-2xl" /></button>
                    <div className="h-full max-h-max">
                        <img className="relative rounded-md h-28 sm:h-40 md:h-60 w-full  object-cover object-top hover:object-bottom duration-[3s] mt-4" src={modal.img} alt="" />

                        <div className="flex justify-between my-3">
                            {
                                modal.details?.map((link, i) => (
                                    <div key={i} className="flex items-center gap-1">
                                        <i className="text-green-700">{link.icon}</i>
                                        <pre>{link.desc}</pre>
                                    </div>
                                ))
                            }
                        </div>
                        <p className="text-justify">{modal.des}</p>
                    </div>
                </div>
                </div>
            }
        </>
    );
};

export default ProjectsCard;