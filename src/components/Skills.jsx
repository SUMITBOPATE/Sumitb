import { Code2, Terminal,  GitBranch, Box, Layers, FileCode,  Server } from 'lucide-react';
import '../styles/Skills.css';

const Skills = () => {
    const skills = [
        { name: "React", icon: Code2 },
        { name: "Next.js", icon: Layers },
        { name: "TypeScript", icon: FileCode },
        { name: "Node.js", icon: Server },
        { name: "Express", icon: Terminal },
        // { name: "MongoDB", icon: Database },
        // { name: "PostgreSQL", icon: DatabaseZap },
        { name: "Tailwind CSS", icon: Box },
        // { name: "Prisma", icon: Database },
        // { name: "Drizzle ORM", icon: Database },
        { name: "Git", icon: GitBranch },
        // { name: "Docker", icon: Container }
    ];

    return (
        <section className="skills-section" id="skills">
            <h2 className="skills-heading">
                Skills
                <span className="corner-tl" />
                {/* <span className="corner-tr" />
                <span className="corner-bl" /> */}
                <span className="corner-br" />
            </h2>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-item">
                        <skill.icon size={16} />
                        {skill.name}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Skills;
