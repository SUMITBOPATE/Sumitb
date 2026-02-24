import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-page">
            <Link to="/" className="back-link">
                ← Back
            </Link>
            <section className="about-section">
                <h2 className="about-heading">About</h2>
                <div className="about-content">
                    <p className="about-text">
                        I love to build products people love to use and improve their lives.
                        I always believe main goal of technology is to improve human life and 
                        I wanted to be part of it, right now in the form of software development and design 
                        . If future demand changes I am open to learn and adapt to it 
                        I am a quick learner and I am always looking for ways to improve.
                       
                        I am a frontend developer learning full-stack development,
                        focused on building clean, user-friendly web applications
                        with HTML, CSS, JavaScript, and React. I enjoy turning
                        real-world problems into simple, usable products and continuously
                        improving my UI and architecture skills.
                        <br></br>
                        &nbsp;
                      {/* <p>  You can reach out to me on @email, LinkedIn or on X(Twitter)</p> */}
                    </p>
               
                    {/* <h2>Beyond Coding</h2> */}
                   
                    <p className="about-text">
                              When I’m not coding or  designing, you’ll probably find me writing on  X , enjoying details in  Cricket, 
                             or reading startup related news or curating the perfect music playlist
                              I love to write and read about peoples </p>
                </div>
            </section>
        </div>
    );
};

export default About;
