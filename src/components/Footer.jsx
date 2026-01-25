import { Github } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            {/* Decorative corner elements */}
            <div className="footer-corner footer-corner-tl" />
            <div className="footer-corner footer-corner-tr" />
            <div className="footer-corner footer-corner-bl" />
            <div className="footer-corner footer-corner-br" />

            <div className="footer-content">
                {/* Tagline */}

                <div className="footer-tagline">
                  <span>“ </span>
                    Playing for the l❤️ve of the game <span> ”</span>
                    {/* <p className="footer-tagline-author">unknown</p> */}
                </div>

                {/* Heading */}
                <h1 className="footer-heading">
                    Let&apos;s work together
                </h1>

                {/* Subheading */}
                <p className="footer-subheading">
                    Have a project in mind? Let&apos;s create something amazing.
                </p>

                {/* CTA Buttons */}
                <div className="footer-buttons">
                    <a
                        href="mailto:sumitbopate@gmail.com"
                        className="footer-btn footer-btn-secondary"
                    >
                        Email Me
                    </a>
                    {/* <a
                        href="https://cal.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-btn footer-btn-primary"
                    >
                        Book a Call
                        <ArrowUpRight size={14} />
                    </a> */}
                </div>

                {/* Social Links */}
                <div className="footer-social">
                    <a
                        href="https://github.com/SUMITBOPATE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                        aria-label="GitHub"
                    >
                        <Github size={16} />
                    </a>
                    {/* <a
                        href="https://linkedin.com/in/sumitbopate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={16} />
                    </a>
                    <a
                        href="mailto:sumitbopate@gmail.com"
                        className="footer-link"
                        aria-label="Email"
                    >
                        <Mail size={16} />
                    </a> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
