import "../styles/Skills.css";
const Skills = () => {
    const skills = [
        { name: 'HTML', icon: '🌐' },
        { name: 'CSS', icon: '🎨' },
        { name: 'JavaScript', icon: '⚡' },
        { name: 'React', icon: '⚛️' },
        { name: 'Node.js', icon: '🟢' }
    ];

    return (
        <section className="skill-section">
            <p className="subheading">My Skills</p>
            <div className="skill-container">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                      
                            <span>{skill.name}</span>
                            {/* <span>{skill.icon}</span> */}
                      
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;