import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const Experiments = () => {
    return (
        <div className="about-page">
            <Link to="/" className="back-link">
                <ArrowLeft size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                Back
            </Link>

            <div className="about-section">
                <h1 className="about-heading">
                    Experiments
                    <span className="corner-tl" />
                    <span className="corner-br" />
                </h1>

                <div className="about-tagline">
                    Building, breaking, and learning
                </div>

                <div className="about-content">
                    <p className="about-text">
                        I'm currently working on some exciting projects.
                        Check back soon for updates on my experiments with new technologies,
                        coding challenges, and creative experiments.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Experiments;
