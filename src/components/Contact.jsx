import animation from '../assets/animation_llpe1p9d.json';
import Lottie from 'lottie-react';
import emailjs from '@emailjs/browser';
import {useRef, useState} from 'react';
import {toast} from 'react-hot-toast';
import {AnimatePresence, motion} from "framer-motion";
import {useEffect} from 'react';


const Contact = () => {
    const form = useRef();
    // scroll animation functionality===================
    const [isVisible, setIsVisible] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sf8tyak', 'template_2xi1rsm', form.current, 'D5mUJNFx478veGQcQ')
            .then(() => {
                // console.log(result.text);
                form.current.reset();
                toast.success('Message send successfully!')
            }, () => {
                // console.log(error.text);
            });
    };


    // scroll animation============ 
    const isLargeScreen = window.innerWidth > 992;
    let stopAnimationOn;

    if (isLargeScreen) {
        stopAnimationOn = 3300;
    }
    else {
        stopAnimationOn = 8880;
    }

    useEffect(() => {

        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition < stopAnimationOn) {
                setIsVisible(false);
            }
            else {
                setIsVisible(true);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [stopAnimationOn])


    return (
        <section className="contact pb-0 -mb-32" id="contact">
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
                    <span>Ask me questions</span>
                    <h2>Contact Me!</h2>
                </motion.div>
            </AnimatePresence>

            <div className='flex md:flex-row flex-col items-center md:gap-24 gap-5 md:mt-12'>
                <motion.div
                    initial={isLargeScreen
                        ? {opacity: 0, x: -100}
                        : {opacity: 0, x: 0}}
                    animate={isLargeScreen
                        ? {opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100, }
                        : {opacity: isVisible ? 1 : 0, x: 0}}
                    transition={{duration: .8}}
                    className='md:w-1/2 w-full'>
                    <div>
                        <Lottie animationData={animation} loop={true} />
                    </div>
                </motion.div>

                <motion.div
                    initial={isLargeScreen
                        ? {opacity: 0, x: 100}
                        : {opacity: 0, x: 0}}
                    animate={isLargeScreen
                        ? {opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100, }
                        : {opacity: isVisible ? 1 : 0, x: 0}}
                    transition={{duration: .8}}
                    className='md:w-1/2 w-full'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div>
                            <label>Name</label>
                            <input className='w-full mb-5 p-2 rounded-md input-box' type="text" name="user_name" required />
                        </div>
                        <div>
                            <label>Email</label>
                            <input className='w-full mb-5 p-2 rounded-md input-box' type="email" name="user_email" required />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea className='w-full mb-5 p-2 rounded-md resize-none input-box' rows='6' name="message" required />
                        </div>

                        <button type="submit" defaultValue="Send" className={'projects-btn md:h-9'}>
                            <a className="single-btn">Send Message</a>
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;