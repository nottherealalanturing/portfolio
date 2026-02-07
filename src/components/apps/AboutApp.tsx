import React from 'react';
import { BsGithub, BsLinkedin, BsMedium, BsMailbox } from 'react-icons/bs';
import { images } from '@/lib/icons';

const badges = [
  {
    alt: 'React',
    src: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
  },
  {
    alt: 'JavaScript',
    src: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
  },
  {
    alt: 'AWS Amplify',
    src: 'https://img.shields.io/static/v1?style=for-the-badge&message=AWS+Amplify&color=222222&logo=AWS+Amplify&logoColor=FF9900&label=',
  },
  {
    alt: 'Ruby',
    src: 'https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white',
  },
  {
    alt: 'Git',
    src: 'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white',
  },
  {
    alt: 'Rails',
    src: 'https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white',
  },
  {
    alt: 'Webpack',
    src: 'https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black',
  },
  {
    alt: 'Postgres',
    src: 'https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white',
  },
  {
    alt: 'Express',
    src: 'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB',
  },
  {
    alt: 'GraphQL',
    src: 'https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white',
  },
  {
    alt: 'Redux',
    src: 'https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white',
  },
  {
    alt: 'Next.js',
    src: 'https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white',
  },
  {
    alt: 'Node.js',
    src: 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white',
  },
  {
    alt: 'MongoDB',
    src: 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white',
  },
];

const AboutApp = () => (
  <div className="flex h-full w-full flex-col gap-4 overflow-auto p-5">
    <div className="grid gap-4 lg:grid-cols-[260px,1fr]">
      <section className="win-panel flex flex-col items-center gap-3 p-4 text-center">
        <img
          src={images.hero}
          alt="Assad Isah"
          className="win-panel h-40 w-40 object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">Assad Isah</h2>
          <p className="text-sm text-gray-700">(nottherealalanturing)</p>
        </div>
        <div className="space-y-1 text-xs text-gray-700">
          <p>Full-stack Developer</p>
          <p>Kaduna, Nigeria</p>
        </div>
        <div className="flex gap-3">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/nottherealalanturing"
          >
            <BsGithub size="30px" color="#3d3d3d" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/assadisah/"
          >
            <BsLinkedin size="30px" color="#3d3d3d" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://medium.com/@nottherealalanturing"
          >
            <BsMedium size="30px" color="#3d3d3d" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="mailto:nottherealalanturing@gmail.com"
          >
            <BsMailbox size="30px" color="#3d3d3d" />
          </a>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="win-panel p-4">
          <h3 className="mb-2 text-lg font-semibold">Profile</h3>
          <p className="text-sm leading-5 text-gray-700">
            Hi, I&apos;m Assad — a software engineer focused on building
            scalable, user-centric web products. I work across the stack,
            contribute to open-source, and care deeply about clean architecture,
            maintainable code, and real-world impact. Explore my work to see how
            I turn ideas into reliable products, and feel free to reach out if
            you&apos;d like to collaborate.
          </p>
        </div>

        <div className="win-panel p-4">
          <h3 className="mb-3 text-lg font-semibold">Toolbox</h3>
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge.alt}
                className="win-panel-inset flex items-center gap-2 px-2 py-1 text-[11px]"
              >
                <img src={badge.src} alt={badge.alt} className="h-4" />
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default AboutApp;
