import MainHeader from '@/components/MainHeader';
import AboutMe from '@/pages/AboutMe';
import Skills from '@/pages/Skills';
import Image from 'next/image';

export default function Home() {
  return (
    <body>
      <MainHeader />
      <AboutMe />
      <Skills />
    </body>
  );
}
