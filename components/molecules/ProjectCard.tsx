'use client';

import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  demoUrl,
  githubUrl
}: ProjectCardProps) {
  return (
    <div className="group bg-zinc-900 rounded-xl border border-zinc-800 hover:border-cyan-500 transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-zinc-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-zinc-800 text-cyan-400 text-sm rounded-full border border-zinc-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ExternalLink size={16} />
              <span className="text-sm">Demo</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <Github size={16} />
              <span className="text-sm">Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
