import React, { useEffect } from 'react';
import { getProjects, projects } from '@/services/projects';
import ProyectLayout from '@/components/ProjectLayout';

function Projects() {
  useEffect(() => {
    getProjects();
  }, [])

  return (
    <div className="flex flex-col w-full gap-[50px] items-center flex-wrap" id="projects">
      <div className='text-[32px] text-center'>
        <span className='text-third'>Proyectos</span> principales
      </div>

      {projects.map(project => {
        return (
          <ProyectLayout key={project.name} project={project}></ProyectLayout>
        )
      })}


    </div>
  );
}

export default Projects;
