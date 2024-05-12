import React from 'react';
import Image from 'next/image';
import profileImg from '/src/assets/profile.jpg';
import { calculateAge } from '@/services/utils';

function AboutMe() {
  // const age: number = calculateAge(new Date('2001-11-23'));
  return (
    <div
      className="heightWithHeader flex items-center justify-center"
      id="about"
    >
      <div className="flex items-center p-10 flex-wrap gap-[30px] justify-center">
        <div className="w-[250px] h-[250px] general-shadow text-center">
          <Image
            src={profileImg}
            alt="jesús antonio gutierrez yancán photo"
          ></Image>
        </div>

        <div className="flex-1 min-w-[260px] max-w-[550px]">
          <p className="text-2xl">
            I&apos;m <span className="text-third">Jesús Gutierrez Yancán</span>,
            I&apos;m {calculateAge()} years old and I&apos;m a{' '}
            <span className="text-third">Frontend developer</span> from Lima,
            Peru. I have been working on mobile development since November 2021.
            <br />
            <br />I have usually worked with{' '}
            <span className="text-third">Javascript frameworks</span> being{' '}
            <span className="text-third">Ionic</span> the main framework for
            developing mobile applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
