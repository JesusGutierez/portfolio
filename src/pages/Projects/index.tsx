import Title from '@/components/Title';
import { Project } from '@/models/Project';
import React from 'react';
import styles from './index.module.scss';

const projects: Array<Project> = Array.from(
  { length: 7 },
  (value, index) =>
    new Project(
      `Project ${index + 1}`,
      `${index + 1} description`,
      ['React Js', 'Next Js'],
      'https://th.bing.com/th/id/R.7e6980c76a3a36775271a59670f19c61?rik=ayfCJl5Wugr2sg&pid=ImgRaw&r=0'
    )
);

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
              <div className={`w-[200px] ${styles.imageContainer}`}>
                <img src={project.imageUrl} alt={project.name} />
              </div>
              <div className="flex-1">
                <p className="text-third">{project.name}</p>
                <p className="text-third">{project.technologies.join(' - ')}</p>
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
