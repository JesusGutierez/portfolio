import React from 'react';
import '../../models/skillModel';

const skills: Array<SkillModel> = [
  {
    area: 'Front end',
    technologies: ['React Js', 'Material UI', 'Flutter'],
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
    <div className="h-screen px-5 py-4 text-center">
      <p className="text-4xl p-8">Skills</p>
      <div className={`grid grid-cols-${skills.length} bg-red-900`}>
        {skills.map((skill, index) => {
          return <div key={index}>{skill.area}</div>;
        })}
        {skills.map((item, index) => {
          return (
            <div key={index} className="bg-white-900">
              <p>skill</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
