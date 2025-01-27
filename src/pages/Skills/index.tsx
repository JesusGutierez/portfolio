import React, { Component, ReactElement, useEffect, useState } from 'react';
import '../../models/skillModel';
import SkillModel from '../../models/skillModel';
import VerticalParagraph from '@/components/VerticalParagraph';

const skills: Array<SkillModel> = [
  new SkillModel('Front end', [
    'HTML',
    'CSS - SASS',
    'Javascript - Typescript',
    'React js',
    'Angular',
    'Flutter',
    'Ionic',
    'Material UI',
    'Tailwind css',
  ]),
  new SkillModel('Back end', [
    'SQL',
    'Node js',
    'Express js ',
    'Api Rest',
    'Firebase',
    'MySQL',
    'SQL Server'
  ]),
  new SkillModel('Otras herramientas', [
    'Azure',
    'GCP',
    'Firebase',
    'EsLint',
    'Git - Github - Bitbucket',
    'Npm - Yarn',
    'Postman',
    'Diagramas UML',
  ]),
];

const Skills = () => {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : Infinity
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`w-full flex flex-col items-center gap-[50px] justify-center`}
      id="skills"
    >
      <div className='section-title'>
        <span>Tecnologías</span>
      </div>
      <div className='flex flex-wrap justify-center items-start gap-[80px]'>
        {skills.map(textArea => {
          return (
            <VerticalParagraph title={textArea.area} key={textArea.area}>
              <ul className='text-center'>
                {textArea.technologies.map(tec => {
                  return (
                    <li key={tec}>{tec}</li>
                  )
                })}
              </ul>
            </VerticalParagraph>
          )
        })}
      </div>
    </div>
  );
};

export default Skills;
