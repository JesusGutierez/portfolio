'use client';

import MainHeader from '@/components/MainHeader';
import AboutMe from '@/pages/AboutMe';
import Projects from '@/pages/Projects';
import Skills from '@/pages/Skills';

const Home = () => {
  return (
    <body>
      <div className="fixed">
        <MainHeader />
      </div>
      <AboutMe />
      <Skills />
      <Projects />
    </body>
  );
};

export default Home;
