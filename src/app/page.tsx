'use client';

import MainHeader from '@/components/MainHeader';
import AboutMe from '@/pages/AboutMe';
import Contact from '@/pages/Contact';
import Presentation from '@/pages/Presentation';
import Projects from '@/pages/Projects';
import Skills from '@/pages/Skills';
import { useEffect, useState } from 'react';

const Home = () => {
  const [isIntroduction, setIsIntroduction] = useState(true)
  const components = [
    AboutMe,
    Skills,
    Projects,
    Contact
  ]

  useEffect(() => {
    startTimer()
  }, [])

  const startTimer = () => {
    const timeToHide = 1500
    setTimeout(() => {
      setIsIntroduction(false)
    }, timeToHide);
  }

  return (
    <div className="h-screen flex flex-col overflow-auto">
      <div className={`h-screen w-screen duration-500 absolute z-10 ${isIntroduction ? 'opacity-100' : 'opacity-0'}`}>
        <Presentation />
      </div>
      <>
        <div className="sticky top-0">
          <MainHeader />0
        </div>
        <div className={`h-full overflow-x-hidden`}>
          {components.map((Comp, index) => {
            return (
              <div key={index} className="min-h-full flex justify-center w-full">
                <Comp />
              </div>
            )
          })}
        </div>
      </>
    </div>
  );
};

export default Home;
