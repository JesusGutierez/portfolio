import Title from '@/components/Title';
import { Project } from '@/models/Project';
import React from 'react';
import styles from './index.module.scss';
import { projects } from '@/services/projects';

function Projects() {
  return (
    <div className="flex flex-col heightWithHeader" id="projects">
      <Title title="Projects"></Title>

      <div id={styles.projectsTable}>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className={`flex min-h-[200px] ${styles.projectContainer}`}
            >
              <div
                className={`w-[200px] ${styles.imageContainer} general-shadow`}
              >
                <img src={project.imageUrl} alt={project.name} />
              </div>
              <div className="flex-1">
                <p className="">{project.name}</p>
                <p className="text-third">{project.technologies.join(' - ')}</p>
                <br />
                <p>{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
