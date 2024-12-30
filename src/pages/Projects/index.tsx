import Title from '@/components/Title';
import { Project } from '@/models/Project';
import React, { useEffect } from 'react';
import styles from './index.module.scss';
import { getProjects, projects } from '@/services/projects';
import Image from 'next/image';
import { AiOutlineGithub } from 'react-icons/ai';

function Projects() {
  useEffect(() => {
    getProjects();
  }, [])
  
  return (
    <div className="flex flex-col w-full" id="projects">
      <Title title="Projects"></Title>

      <div id={styles.projectsTable} className="justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className={`flex min-h-[200px] ${styles.projectContainer}`}
            >
              <Image
                src={project.imageUrl}
                alt={project.name}
                className={`${styles.imageContainer} general-shadow w-[200px]`}
              />
              {/* </div> */}
              <div className="flex flex-col gap-[5px]">
                <p className="uppercase">{project.name}</p>
                <p className="text-third">
                  Technologies: {project.technologies.join(' - ')}
                </p>
                <p>{project.description}</p>
                {project.repositoryUrl ? (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    className="flex flex-row gap-x-[10px] items-center"
                  >
                    <AiOutlineGithub className="w-[30px] h-[30px]" />
                    <div className="text-third underline">
                      Check the code here!
                    </div>
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
