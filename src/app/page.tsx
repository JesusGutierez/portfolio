'use client';

import MainHeader from '@/components/MainHeader';
import AboutMe from '@/pages/AboutMe';
import Contact from '@/pages/Contact';
import Projects from '@/pages/Projects';
import Skills from '@/pages/Skills';
import { getProjects } from '@/services/projects';
import { useEffect } from 'react';

const Home = () => {
  getProjects();

  return (
    <body>
      <div className="fixed">
        <MainHeader />
      </div>
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </body>
  );
};

export default Home;
