import React from 'react';
import '../../models/skillModel';
import Title from '@/components/Title';

const skills: Array<SkillModel> = [
  {
    area: 'Front end',
    technologies: [
      'React Js',
      'Next Js',
      'Sass',
      'Redux',
      'Material UI',
      'Flutter',
      'Ionic',
      'Angular Js',
      'React Js',
      'Next Js',
    ],
  },
  {
    area: 'Back end',
    technologies: ['React Js', 'Material UI', 'Flutter'],
  },
  {
    area: 'DataBases',
    technologies: ['React Js', 'Material UI', 'Flutter'],
  },
  {
    area: 'IT and Systems',
    technologies: ['React Js', 'Material UI', 'Flutter'],
  },
];

const Skills = () => {
  return (
    <div
      className="heightWithHeader px-10 pb-10 flex flex-col text-xl font-black"
      id="skills"
    >
      <Title title="Skills"></Title>
      <table className="table-auto border-separate border-spacing-x-[25px] h-full">
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
            {skills.map((item, index2) => {
              return (
                <td key={index2} className="bg-third ">
                  {item.technologies.map((tech, index2) => {
                    return (
                      <p key={index2} className="mx-3 text-center">
                        {tech}
                      </p>
                    );
                  })}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
      {/* <div
        className={`grid grid-cols-4 gap-x-10 bg-green-900 h-full inline-grid`}
      >
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center h-20 bg-third"
            >
              <p className="">{skill.area}</p>
            </div>
          );
        })}
        {skills.map((item, index2) => {
          return (
            <div key={index2} className="bg-third">
              {item.technologies.map((tech, index2) => {
                return <p key={index2}>{tech}</p>;
              })}
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Skills;
