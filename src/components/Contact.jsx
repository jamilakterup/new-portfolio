import animation from '../assets/animation_llpe1p9d.json';
import Lottie from 'lottie-react';
import emailjs from '@emailjs/browser';
import {useRef} from 'react';
import {toast} from 'react-hot-toast';



const Contact = () => {
    const form = useRef();

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


    return (
        <section className="contact pb-0 -mb-32" id="contact">
            <div className="main-text">
                <span>Ask me questions</span>
                <h2>Contact Me!</h2>
            </div>

            <div className='flex md:flex-row flex-col items-center md:gap-24 gap-5 md:mt-12'>
                <div className='md:w-1/2'>
                    <Lottie animationData={animation} loop={true} />
                </div>

                <form ref={form} onSubmit={sendEmail} className='md:w-1/2 w-full'>
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

                    <button type="submit" defaultValue="Send" className={'projects-btn h-9'}>
                        <a className="single-btn">Send Message</a>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;