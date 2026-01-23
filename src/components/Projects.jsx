import { ExternalLink, Github } from 'lucide-react';
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Draftlee",
            description: "Privacy based local text editor with rich features .",
            image: "draftleebrand.png",
            technologies: ["React.js", "Tailwind CSS", "PDF.js","Tiptap"],
            githubLink: "https://github.com/SUMITBOPATE/Draftlee",
            liveLink: "https://draftlee.vercel.app/",
            isLive: true
        },
        {
            id: 2,
            title: "CropSho",
            description: "Web platform to help local(meesho) sellers manage daily operations more efficiently.",
            image: "cropshobrand.png",
            technologies: ["React", "Tailwind CSS", "Pdf-lib"],
            githubLink: "https://github.com/SUMITBOPATE/CropSho",
            liveLink: "https://cropsho.online/",
            isLive: true
        }
    ];

    return (
        <section className="projects-section" id="projects">
            <h2 className="projects-heading">
                What I am Building
            </h2>

            <div className="projects-list">
                {projects.map((project) => (
                    <div key={project.id} className="project-item">
                        {/* Project Image */}
                        <div className="project-image-wrapper">
                            <div className="project-thumbnail">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                />
                            </div>
                        </div>

                        {/* Project Content */}
                        <div className="project-info">
                            {/* Title and Live Status */}
                            <div className="project-top">
                                <h3 className="project-name">{project.title}</h3>
                                {project.isLive && (
                                    <span className="live-status">
                                        <span className="live-dot">
                                            <span className="live-dot-pulse" />
                                        </span>
                                        <span className="live-text">Live</span>
                                    </span>
                                )}
                            </div>

                            {/* Description */}
                            <p className="project-desc">{project.description}</p>

                            {/* Technologies */}
                            <div className="project-tech">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-item">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="project-links">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    <ExternalLink size={14} />
                                    <span>Live</span>
                                </a>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    <Github size={14} />
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
