'use client';
import { motion } from 'motion/react';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import './Projects.css';

export type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  image?: string;
  index?: number;
};

export function ProjectCard({
  title,
  description,
  tags,
  liveLink,
  githubLink,
  image,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      className='project-card'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Gradient orb effect */}
      <div className='project-card-orb' />

      <div className='project-card-content'>
        {/* Image placeholder or actual image */}
        {image && (
          <div className='project-card-image'>
            <img src={image} alt={title} />
          </div>
        )}

        <div className='project-card-header'>
          <h3 className='project-card-title'>{title}</h3>
          <div className='project-card-links'>
            {githubLink && (
              <a
                href={githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='project-card-link'
                aria-label='GitHub Repository'
              >
                <Github size={18} />
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target='_blank'
                rel='noopener noreferrer'
                className='project-card-link'
                aria-label='Live Demo'
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className='project-card-description'>{description}</p>

        <div className='project-card-tags'>
          {tags.map((tag, i) => (
            <span key={i} className='project-card-tag'>
              <Code2 size={12} />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
