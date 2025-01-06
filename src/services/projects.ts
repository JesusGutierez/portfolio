import { Project } from '@/models/Project';
import portfolioImg from '/src/assets/portfolio.png';

let projects: Array<Project> = [];

const getProjects = () => {
  projects = [
    {
      name: 'Portfolio',
      description:
        'My personal portfolio, where I tell you a bit of my work. Here you can find my personal information, hard skills, projects and my contact.',
      technologies: [
        'React',
        'Material UI',
        'JavaScript',
        'TypeScript',
        'Next js',
      ],
      imageUrl: portfolioImg,
      links: [
        {
          type: 'github',
          link: 'https://github.com/JesusGutierez/portfolio'
        },
        {
          type: 'web',
          link: 'https://portfolio-jesusgutierez.vercel.app/'
        }
      ]
    },
  ];
};

export { projects, getProjects };
