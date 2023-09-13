import calculateAge from '@/utils/general';
import React from 'react';
import Image from 'next/image';
import profileImg from '/src/assets/profile.jpg';

function AboutMe() {
  const age: number = calculateAge(new Date('2001-11-23'));
  return (
    <div
      className="heightWithHeader flex items-center justify-center"
      id="about"
    >
      <div className="flex p-10">
        <div className="w-[250px] h-[250px]">
          <Image
            src={profileImg}
            alt="jesús antonio gutierrez yancán photo"
          ></Image>
        </div>

        <div className="flex-1 max-w-[550px] ml-[30px]">
          <p className="text-2xl">
            <span className="skills-table text-third text-3xl">HI!</span>
            <br />I am <span className="text-third">Jesús Gutierrez</span>, a{' '}
            <span className="text-third">Software developer</span> in Lima, Peru
            with experience developing web and mobile interfaces using{' '}
            <span className="text-third">Javascript frameworks</span>; and I am
            interested in the AI and artificial intelligence branch.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
