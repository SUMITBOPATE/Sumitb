
import '../styles/Footer.css';




const Footer = () => {
    return (
        <div className="content">
           <section className="contact-section">
          <div className="contact-content">
            <div  className="badge">Contact</div>
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-description">
             Let’s build something amazing together!
<br></br>
ut for code, coffee, or collaboration.
            
             
            </p>
          </div>
        </section>

               <div className="social-links">
          <button className="social-button" title="Home">🏠</button>
          <button className="social-button" title="Resume">📄</button>
          <button className="social-button" title="GitHub"> </button>
          <button className="social-button" title="LinkedIn">🔗</button>
          <button className="social-button" title="Twitter">🐦</button>
          <button className="social-button" title="YouTube">📺</button>
          <button className="social-button" title="Toggle Theme">☀️</button>
        </div>
    </div>
    );
};

export default Footer;
