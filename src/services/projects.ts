import { Project } from '@/models/Project';

let projects: Array<Project> = [];

const getProjects = () => {
  // Mocked projects
  // projects = Array.from(
  //   { length: 7 },
  //   (value, index) =>
  //     new Project(
  //       `Project ${index + 1}`,
  //       `${index + 1} description`,
  //       ['React Js', 'Next Js'],
  //       'https://th.bing.com/th/id/R.7e6980c76a3a36775271a59670f19c61?rik=ayfCJl5Wugr2sg&pid=ImgRaw&r=0'
  //     )
  // );

  projects = [
    {
      name: 'Portfolio Website',
      description:
        'A personal portfolio website showcasing your projects, skills, and experience.',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React.js',
        'Node.js',
        'Express.js',
      ],
      imageUrl:
        'https://static-cse.canva.com/blob/1105505/create_portfolio_lead.jpg',
    },
    {
      name: 'Task Manager App',
      description: 'An application for managing tasks and to-do lists.',
      technologies: [
        'TypeScript',
        'React.js',
        'Redux',
        'Node.js',
        'Express.js',
        'MongoDB',
      ],
      imageUrl:
        'https://www.chanty.com/blog/wp-content/uploads/2020/10/Task-manager-apps-scaled.jpg',
    },
    {
      name: 'E-commerce Platform',
      description: 'An online platform for buying and selling products.',
      technologies: [
        'TypeScript',
        'React.js',
        'Redux',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Stripe API',
      ],
      imageUrl:
        'https://cmscritic.com/ms-content/uploads/2023/08/screenshot-2019-06-06-at-53906-am_qe3wkf.png',
    },
    {
      name: 'Weather Dashboard',
      description:
        'A dashboard displaying weather information for different locations.',
      technologies: ['TypeScript', 'React.js', 'OpenWeatherMap API'],
      imageUrl:
        'https://s3-alpha.figma.com/hub/file/4090659507/a7a13be5-2145-4d43-8b02-9493915629bd-cover.png',
    },
    {
      name: 'Recipe Sharing App',
      description: 'An application for users to share and discover recipes.',
      technologies: ['TypeScript', 'React.js', 'Firebase', 'Cloudinary'],
      imageUrl:
        'https://cdn.dribbble.com/users/1191138/screenshots/11518039/homepage_2x_2x_4x.png',
    },
  ];
};

export { projects, getProjects };
