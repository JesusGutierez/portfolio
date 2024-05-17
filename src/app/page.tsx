'use client';

import MainHeader from '@/components/MainHeader';
import AboutMe from '@/pages/AboutMe';
import Contact from '@/pages/Contact';
import Projects from '@/pages/Projects';
import Skills from '@/pages/Skills';
import { getProjects } from '@/services/projects';
import { LegacyRef, useEffect, useRef, useState } from 'react';

const Home = () => {
  getProjects();

  return (
    <div className="h-screen flex flex-col overflow-auto">
      <div className="sticky top-0">
        <MainHeader />
      </div>
      <div className={`h-full overflow-x-hidden`}>
        <div className="min-h-full flex justify-center w-full">
          <AboutMe />
        </div>
        <div className="min-h-full flex justify-center w-full">
          <Skills />
        </div>
        <div className="min-h-full flex justify-center w-full">
          <Projects />
        </div>
        <div className="min-h-full flex justify-center w-full">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
