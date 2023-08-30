import {FiFileText, FiExternalLink} from 'react-icons/fi';
import {FaBriefcase, FaGraduationCap} from 'react-icons/fa';
import Work1 from './assets/sm-academy.png';
import Work2 from './assets/Toyland-Home.png';
import Work3 from './assets/Chefer.png';
import Work4 from './assets/Job-portal.png';
import Work5 from './assets/Justice-Site.png';
import Work6 from './assets/Al-Quran.png';




import html from './assets/html-5.png';
import css from './assets/css-3.png';
import js from './assets/js.png';
import react from './assets/react.png';
import node from './assets/node.png';
import mongo from './assets/mongodb.png';
import express from './assets/express.png';
import jwt from './assets/jwt.png';
import firebase from './assets/firebase.png';
import bootstrap from './assets/bootstrap.png';
import github from './assets/github.png';
import tailwind from './assets/tailwind.png';
import daisy from './assets/daisyUI.png';
import next from './assets/next.png';



export const stats = [
    {
        id: 1,
        no: '30+',
        title: 'Completed <br /> Projects',
    },
    {
        id: 2,
        no: '1+',
        title: 'year of <br /> experience',
    },
];

export const resume = [
    {
        id: 1,
        category: 'experience',
        icon: <FaBriefcase />,
        year: 'Janu-2023 - PRESENT',
        title: 'MERN stack Developer',
        // desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
    },
    {
        id: 2,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2018 - PRESENT',
        title: 'Department of Physics',
        // desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
    },
];

export const skills = [
    {
        id: 1,
        title: 'HTML',
        img: `${html}`
    },

    {
        id: 2,
        title: 'CSS',
        img: `${css}`
    },

    {
        id: 3,
        title: 'JS',
        img: `${js}`
    },

    {
        id: 4,
        title: 'Bootstrap',
        img: `${bootstrap}`
    },

    {
        id: 5,
        title: 'Tailwind',
        img: `${tailwind}`
    },

    {
        id: 6,
        title: 'DaisyUI',
        img: `${daisy}`
    },

    {
        id: 7,
        title: 'React',
        img: `${react}`
    },

    {
        id: 8,
        title: 'Node.js',
        img: `${node}`
    },
    {
        id: 9,
        title: 'MongoDB',
        img: `${mongo}`
    },
    {
        id: 10,
        title: 'Express.js',
        img: `${express}`
    },
    {
        id: 11,
        title: 'GitHub',
        img: `${github}`
    },
    {
        id: 11,
        title: 'Firebase',
        img: `${firebase}`
    },
    {
        id: 12,
        title: 'JWT',
        img: `${jwt}`
    },
    {
        id: 13,
        title: 'NEXT.JS',
        img: `${next}`
    }
];


export const projects = [
    {
        id: 0,
        category: 'All'
    },
    {
        id: 1,
        category: 'MERN stack',
        img: Work1,
        title: "SM Academy",
        des: "A music school management website that showcases a variety of music courses available for students. Seamless enrollment system that allows students to register for courses and make payments securely. 3 roles management system: Student, Instructor and Admin. Only an admin can manage a user's role.",
        details: [
            {
                icon: <FiFileText />,
                // title: 'Project : ',
                desc: 'MERN stack project',
            },
            {
                icon: <FiExternalLink />,
                desc: (<div><a href="https://summer-camp-51dc6.web.app/" style={{color: 'var(--first-color)'}} target='blank'>Live Link</a> | <a href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-jamilakterup" style={{color: 'var(--first-color)'}} target='blank'>Client Side</a> | <a href="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-jamilakterup" style={{color: 'var(--first-color)'}} target='blank'>Server Side</a></div>)
            }
        ],
    },

    {
        id: 2,
        category: 'MERN stack',
        img: Work2,
        title: 'Toy land',
        des: "An online toy marketplace website that offers a wide range of toys for children. Crud operation for user and seller to update and delete the toy. Firebase authentication",
        details: [
            {
                icon: <FiFileText />,
                // title: 'Project : ',
                desc: 'MERN stack project',
            },
            {
                icon: <FiExternalLink />,
                desc: (<div><a href="https://toyland-bfaed.web.app/" style={{color: 'var(--first-color)'}} target='blank'>Live Link</a> | <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-jamilakterup" style={{color: 'var(--first-color)'}} target='blank'>Client Side</a> | <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-jamilakterup" style={{color: 'var(--first-color)'}} target='blank'>Server Side</a></div>)
            }
        ],
    },

    {
        id: 3,
        category: 'Front-end',
        img: Work3,
        title: 'Chefer',
        des: "An online food delivery website that offers the best food delivery services. There is a login and register system implemented by firebase. If you want to view recipe than you have to register or login first. I also implement a privet route so you can't visit that page without login.",
        details: [
            {
                icon: <FiFileText />,
                desc: 'Front-end project',
            },
            {
                icon: <FiExternalLink />,
                desc: (<div><a href="https://cheafer-93055.web.app/" style={{color: 'var(--first-color)'}} target='blank'>Live Link</a> | <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-jamilakterup" style={{color: 'var(--first-color)'}} target='blank'>Client Side</a> | <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-jamilakterup" style={{color: 'var(--first-color)'}} target='blank'>Server Side</a></div>)
            }
        ],
    },

    {
        id: 4,
        category: 'Front-end',
        img: Work4,
        title: 'Job portal',
        details: [
            {
                icon: <FiFileText />,
                desc: 'Front-end project',
            },
            {
                icon: <FiExternalLink />,
                desc: (<div><a href="https://incomparable-squirrel-fcca89.netlify.app/" style={{color: 'var(--first-color)'}} target='blank'>Live Link</a> | <a href="https://github.com/Porgramming-Hero-web-course/b7a9-career-hub-jamilakterup" style={{color: 'var(--first-color)'}} target='blank'>Client Side</a></div>)
            }
        ],
    },

    {
        id: 5,
        category: 'Design',
        img: Work5,
        title: 'Landing Page',
        details: [
            {
                icon: <FiFileText />,
                desc: 'Desing',
            },
            {
                icon: <FiExternalLink />,
                desc: (<div><a href="https://graceful-pavlova-b2ecfe.netlify.app/" style={{color: 'var(--first-color)'}} target='blank'>Live Link</a> | <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-jamilakterup" style={{color: 'var(--first-color)'}} target='blank'>Client Side</a></div>)
            }
        ],
    },

    {
        id: 6,
        category: 'API manage',
        img: Work6,
        title: 'Al-Quran',
        details: [
            {
                icon: <FiFileText />,
                desc: 'API',
            },
            {
                icon: <FiExternalLink />,
                desc: (<div><a href="https://transcendent-gumption-c55b17.netlify.app/" style={{color: 'var(--first-color)'}} target='blank'>Live Link</a> | <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-jamilakterup" style={{color: 'var(--first-color)'}} target='blank'>Client Side</a></div>)
            }
        ],
    },
];
