import {FiFileText, FiExternalLink} from 'react-icons/fi';
import Work1 from './assets/sm-academy.png';
import Work2 from './assets/Toyland-Home.png';
import Work3 from './assets/Chefer.png';
import Work4 from './assets/Job-portal.png';
import Work5 from './assets/Justice-Site.png';
import Work6 from './assets/Al-Quran.png';


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
