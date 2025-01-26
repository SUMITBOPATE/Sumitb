
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Cash Management System",
            description: "Cash Management System is a web application that helps users to manage their cash flow. It allows users to track their income and expenses, set budgets, and view reports.",
            image: "project1.jpg",
            technologies: ["React", "Node.js", "MongoDB"],
            githubLink: "https://github.com/username/project1",
            liveLink: "https://project1.com"
        },
        {
            id: 2,
            title: "My Space App",
            description: "A Productivity app that helps users to manage their tasks, set reminders, and take notes. It also has a feature to track the time spent on tasks.",
            image: "project2.jpg",
            technologies: ["React", "Express", "PostgreSQL"],
            githubLink: "https://github.com/username/project2",
            liveLink: "https://project2.com"
        },
       
    ];

    return (
        <section className="projects-section" id="projects">
            <p className='subheading'>My Projects</p>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                      
                        <h3>{project.title}</h3>
                        
                        <div className="technologies">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <div className='project-line'></div>
                        <p>{project.description}</p>
                        {/* <div className='project-line'></div> */}
                        <div className="project-links">
                           <button>  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a></button>
                           <button> <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a></button>
                        </div>
                        {/* <img src={project.image} alt={project.title} /> */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;