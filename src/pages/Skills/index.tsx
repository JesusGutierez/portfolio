import React, { Component, ReactElement, useEffect, useState } from 'react';
import '../../models/skillModel';
import Title from '@/components/Title';
import styles from './index.module.scss';
import SkillModel from '../../models/skillModel';

let skills: Array<SkillModel> = [
  new SkillModel('Front end', [
    'React js',
    'Sass',
    'Redux',
    'Material UI',
    'Tailwind',
    'Next Js',
    'Ionic',
    'Angular',
    'Rxjs',
    'Jasmine',
    'Karma',
    'Flutter',
  ]),
  new SkillModel('Back end', ['Node js', 'Express js', 'Api Rest', 'Firebase']),
  new SkillModel('Languages', [
    'HTML',
    'CSS',
    'Javascript',
    'Typescript',
    'Dart',
    'SQL',
    'SCSS',
  ]),
  new SkillModel('Databases', [
    'MySQL',
    'SQL Server',
    'Firestore',
    'Big Query',
  ]),
  new SkillModel('Others', [
    'EsLint',
    'Npm',
    'Yarn',
    'Git',
    'Github',
    'Postman',
    'Visual Studio Code',
    'Play Console',
    'UML',
  ]),
];

const getRowsOfTechnologies = (): Array<ReactElement> => {
  const maxNroRows: number = getMaxNroRows();
  let rows: Array<ReactElement> = Array.from(
    { length: maxNroRows },
    (value, indexRow) => (
      <tr key={indexRow}>
        {skills.map((item: SkillModel, indexCell: number) => (
          <td key={indexCell} className="text-center bg-third">
            {item.technologies[indexRow]}
          </td>
        ))}
      </tr>
    )
  );
  return rows;
};

const getMaxNroRows = (): number => {
  let maxNroRows: number = 0;
  skills.forEach((item: SkillModel) => {
    if (item.technologies.length > maxNroRows)
      maxNroRows = item.technologies.length;
  });
  return maxNroRows;
};

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
      className={`w-full px-10 pb-10 flex flex-col items-center text-xl`}
      id="skills"
    >
      <Title title="Skills"></Title>

      {width > 770 ? (
        <table
          className={`table-auto border-separate border-spacing-x-[15px] flex-1 ${styles.skillsTable}`}
        >
          <thead className="mb-[20px]">
            <tr>
              {skills.map((skill, index) => {
                return (
                  <th key={index} className="h-20">
                    <p className="">{skill.area}</p>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {skills.map((skill, index) => {
                return (
                  <td key={index} className={`${styles.techList} text-primary`}>
                    {skill.technologies.map((tech, index2) => (
                      <p key={index2}>{tech}</p>
                    ))}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="flex flex-col w-full gap-[13px]">
          {skills.map((skill, index) => {
            return (
              <div className="flex flex-col gap-[13px]" key={skill.area}>
                <div>{skill.area}</div>
                <div className="flex flex-row flex-wrap bg-third text-primary  align-center gap-x-[20px] gap-y-[5px] p-[15px] items-center whitespace-nowrap ">
                  {skill.technologies.map((technology) => {
                    return (
                      <div key={`${skill.area}-${technology}`}>
                        {technology}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Skills;
