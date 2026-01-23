
import '../styles/About.css';

const About = () => {
    return (
        <section className="about-section">
            <h2 className="about-heading">
                About
                <span className="corner-tl" />
                <span className="corner-tr" />
                <span className="corner-bl" />
                <span className="corner-br" />
            </h2>
            <div className="about-content">
                <p className="about-text">
                    I am actively seeking opportunities in Frontend Developer roles.
              
               
                    I love to build products people love to use and improve their lives.
                    I am a quick learner and I am always looking for ways to improve
                    my skills and learn new technologies.
                    I’m a frontend developer learning full-stack development,
                     focused on building clean, user-friendly web applications
                      with HTML, CSS, JavaScript, and React. I enjoy turning 
                      real-world problems into simple, usable products and continuously
                       improving my UI and architecture skills.
                </p>
            </div>
        </section>
    );
};

export default About;