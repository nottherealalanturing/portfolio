import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { portfolioProjects } from '@/data/portfolio';

const PortfolioApp = () => (
  <div className="grid w-full grid-cols-1 gap-4 p-2 sm:grid-cols-2 xl:grid-cols-3">
    {portfolioProjects.map((project) => (
      <article
        key={project.name}
        className="win-panel group flex h-full min-h-[320px] flex-col bg-white/90 p-3 transition-shadow duration-150 hover:shadow-[2px_2px_0_#000]"
      >
        <div className="win-panel-inset flex h-36 items-center justify-center bg-white">
          <img
            src={project.image}
            alt={project.name}
            className="h-28 w-28 object-contain transition-transform duration-200 group-hover:scale-[1.03]"
          />
        </div>
        <div className="mt-3 flex flex-1 flex-col gap-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-semibold">{project.name}</h3>
            <div className="flex gap-2">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <FiExternalLink size="18px" color="#2a5f55" />
              </a>
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <FiGithub size="18px" color="#2a5f55" />
              </a>
            </div>
          </div>
          <p className="text-xs leading-4 text-gray-700">{project.description}</p>
          <div className="mt-auto flex flex-wrap gap-1">
            {project.stack.map((stack) => (
              <span
                key={stack}
                className="rounded-sm bg-[#2a5f55] px-2 py-1 text-[11px] text-white"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
      </article>
    ))}
  </div>
);

export default PortfolioApp;
