import image from "../assets/me-2.png";

const About = () => {
    return (
        <section className={`about flex md:flex-row flex-col-reverse justify-center items-center gap-12`} id="about">
            <div className="img-about">
                <img src={image} alt="" />
                <div className="info-about1">
                    <span>1+</span>
                    <p>Year of experience</p>
                </div>
                <div className="info-about2">
                    <span>50+</span>
                    <p>Projects complete</p>
                </div>
            </div>

            <div className="about-content">
                <div className="md:text-left mb-8 text-center">
                    <span>Let me introduce myself</span>
                    <h2>About me</h2>
                    <h3>A story of good</h3>
                </div>
                <p className="indent-12 font-mono text-justify first-letter:text-3xl">I have successfully collaborated on various projects, leveraging my knowledge in web development to create seamless user experiences. My adaptability extends to various development environments, making me comfortable with a diverse range of tools and frameworks.</p>

                <div className="btn-box h-11 md:text-left text-center">
                    <a href="https://bdscienceclub.blogspot.com/" className="btn">Read more!</a>
                </div>
            </div>
        </section>
    );
};

export default About;