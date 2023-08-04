import React from 'react';

function AboutMe() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex p-10">
        <div className="w-[300px] h-[300px] bg-blue-900 "></div>

        <div className="max-w-[350px] ml-[20px]">
          <p className="text-2xl">
            Hi, I am{' '}
            <span className="text-third">Jesús Antonio Gutierrez Yancán</span>
            <br />
            <br />I am a{' '}
            <span className="text-third">Front end Software developer</span>, I
            have used AWS, GCP and Firebase services to power many of the
            projects where I participated.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
