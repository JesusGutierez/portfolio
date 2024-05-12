import React, { Component, ReactElement } from 'react';
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
  return (
    <div
      className={`heightWithHeader px-10 pb-10 flex flex-col items-center text-xl`}
      id="skills"
    >
      <Title title="Skills"></Title>

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
    </div>
  );
};

export default Skills;
