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
  const [isHiddenPresentation, setIsHiddenPresentation] = useState(false)
  const timesTransition = {
    timeToHide: 1500,
    animationHideTime: 500
  };
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
    setTimeout(() => {
      setIsIntroduction(false)
    }, timesTransition.timeToHide);
    setTimeout(() => {
      setIsHiddenPresentation(true)
    }, timesTransition.timeToHide + timesTransition.animationHideTime);
  }

  return (
    <div className="h-screen flex flex-col overflow-auto">
      <div className={`h-screen w-screen duration-500 absolute z-10 ${isIntroduction ? 'opacity-100' : 'opacity-0'} ${isHiddenPresentation ? 'hidden' : null}`}>
        <Presentation />
      </div>
      <div className="sticky top-0">
        <MainHeader />
      </div>
      <div className={`flex flex-col items-center px-[40px] py-[60px] gap-[100px]`}>
        {components.map((Comp, index) => {
          return (
            <div key={index} className="w-full">
              <Comp />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Home;
