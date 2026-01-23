import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const Experiments = () => {
    return (
        <div className="about-page">
            <Link to="/" className="back-link">
                <ArrowLeft size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                Back
            </Link>

            <div className="about-section">
                <h1 className="about-heading">
                    Experiments
                    <span className="corner-tl" />
                    <span className="corner-br" />
                </h1>

                <div className="about-content">
                    <p className="about-text" style={{
                        textAlign: 'center',
                        fontSize: 'var(--text-xl)',
                        padding: '4rem 0'
                    }}>
                        Coming Soon
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Experiments;
