import React from 'react';
import '../../models/skillModel';

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
    <div className="h-screen text-center px-10 pb-10 bg-blue-900 flex flex-col">
      <p className="text-4xl p-5">Skills</p>
      <div className={`grid grid-cols-4 gap-x-10 bg-green-900 h-full`}>
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
      </div>
    </div>
  );
};

export default Skills;
