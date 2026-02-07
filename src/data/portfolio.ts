export type PortfolioProject = {
  name: string;
  image: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
  stack: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    name: 'Timely Capsule',
    image: '/portfolio/timelycap.png',
    description:
      'Timely Capsule lets you send messages into the future, connecting moments across time.',
    githubUrl: 'https://github.com/nottherealalanturing/timely_capsule',
    liveUrl: 'https://timely-capsule.vercel.app/',
    stack: ['Next.js', 'Firestore', 'Chakra UI'],
  },
  {
    name: 'Block Party',
    image: '/portfolio/blockparty.png',
    description:
      'A neighborhood app that brings people together based on shared interests and local support.',
    githubUrl: 'https://github.com/adedotxn/block-party',
    liveUrl: 'https://the-blockparty.vercel.app/invite/P15Ry1',
    stack: ['TypeScript', 'Next.js', 'React Router', 'Chart.js'],
  },
  {
    name: 'Windows 95 Portfolio',
    image: '/portfolio/portfolio.png',
    description:
      'A Windows 95-inspired portfolio with draggable apps and a faithful retro UI.',
    githubUrl: 'https://github.com/nottherealalanturing/portfolio',
    liveUrl: 'https://www.nottherealalanturing.tech/',
    stack: ['React', 'Redux'],
  },
  {
    name: 'Crypto Bazaar',
    image: '/portfolio/cryptobazaar.png',
    description:
      'Track 1000+ crypto currencies with live pricing and short-term performance charts.',
    githubUrl: 'https://github.com/nottherealalanturing/cryptobazaar',
    liveUrl: 'https://cryptobazaar.netlify.app/',
    stack: ['React', 'Redux', 'React Router', 'Chart.js'],
  },
  {
    name: 'Blogger API',
    image: '/portfolio/events.png',
    description: 'A RESTful API for managing posts and content workflows.',
    githubUrl: 'https://github.com/nottherealalanturing/Blogger-API',
    liveUrl: 'https://blogger-api-production.up.railway.app/api/docs/',
    stack: ['Node.js', 'PassportJS', 'Jest', 'MongoDB'],
  },
];
