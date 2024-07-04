import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  sapnahome,
  microverse,
  meme1,
  repo1,
  foodie1,
  mongo1,
  exp1,
  mysql,
  cc

} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },

];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },

  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Express JS',
    icon: exp1,
  },
  {
    name: 'Mongo DB',
    icon: mongo1,
  },
  {
    name: 'Mysql',
    icon: mysql,
  },



];

const experiences = [
  {
    title: 'Software Development Engineer Intern',
    company_name: 'Railworld India Private Limited',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Feb 2024 - June 2024',
  },

];

const projects = [
   {
    id: 'project-1',
    name: 'Talk Point',
    description: 'TalkPoint is a real-time chat application that enables seamless communication between users with instant messaging and real-time updates.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image:cc,
    repo: 'https://github.com/Samridhii1212/TalkPoint/tree/main',
    demo: 'https://talkpoint.onrender.com/',
  },
  {
    id: 'project-2',
    name: 'Tenzies Game',
    description: 'Tenzies is a fast-paced dice game where you roll ten dice and aim to get them all to show the same number. Keep the dice that match your target number and roll the rest until all ten dice match. It’s a fun mix of luck and strategy!',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: sapnahome,
    repo: 'https://github.com/Samridhii1212/Tenzies-Game',
    demo: 'https://tenzies-game-frontend.onrender.com/login',
  },
    {
    id: 'project-3',
    name: 'GitHubRepoViewer',
    description: `GitHubRepoViewer is a simple and intuitive web application that enables users to search for GitHub repositories by username. It displays the list of repositories along with details such as repository name and description.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: repo1,
    repo: 'https://github.com/Samridhii1212/GitHubRepoViewer',
    demo: 'https://git-hub-repo-viewer-lbi2.vercel.app/',
  },
  {
    id: 'project-4',
    name: 'InstantMeme Creator',
    description:
      'InstantMeme Creator is a web-based application designed to allow users to create customized memes easily. Leveraging the power of React JS, this tool provides a user-friendly interface for meme creation, allowing users to choose templates, customize text, and generate memes with ease.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: meme1,
    repo: 'https://github.com/Samridhii1212/Instant-MemeCreator',
    demo: 'https://instant-meme-creator-1ir1.vercel.app/',
  },


  {
    id: 'project-5',
    name: 'Foodie Express',
    description: 'Foodie Express is a modern food ordering platform designed to offer users a seamless experience when browsing and ordering from a variety of restaurants. The platform integrates real-time restaurant data via the Swiggy API and includes features such as state management for the shopping cart and user authentication.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: foodie1,
    repo: 'https://github.com/Samridhii1212/Foodie-Express-Website',
    demo: 'https://foodie-express-puce.vercel.app/login',
  },

];

export { services, technologies, experiences, projects };
