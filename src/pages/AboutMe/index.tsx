import React from 'react';

function AboutMe() {
  return (
    <div
      className="heightWithHeader flex items-center justify-center"
      id="about"
    >
      <div className="flex p-10">
        <div className="min-w-[300px] h-[300px] bg-blue-900 "></div>
        <div className="max-w-[450px] ml-[20px]">
          <p className="text-2xl">
            <span className="skills-table text-third text-3xl">HI!</span>
            <br />I am <span className="text-third">Jesús Gutierrez</span>, a{' '}
            <span className="text-third">Front end developer</span>, my date of
            birth is 23-11-2001, am peruvian and interested on AI and machine
            learning.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
