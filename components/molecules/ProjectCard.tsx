'use client';

import { Calendar, User, CheckCircle } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  period?: string;
  role?: string;
  tags: string[];
  achievements?: string[];
}

export default function ProjectCard({
  title,
  description,
  period,
  role,
  tags,
  achievements
}: ProjectCardProps) {
  return (
    <div className="group bg-zinc-900 rounded-xl border border-zinc-800 hover:border-cyan-500 transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>

        {(period || role) && (
          <div className="flex flex-wrap gap-4 mb-4 text-sm">
            {period && (
              <div className="flex items-center gap-2 text-zinc-400">
                <Calendar size={16} className="text-cyan-400" />
                <span>{period}</span>
              </div>
            )}
            {role && (
              <div className="flex items-center gap-2 text-zinc-400">
                <User size={16} className="text-cyan-400" />
                <span>{role}</span>
              </div>
            )}
          </div>
        )}

        <p className="text-zinc-300 mb-4 leading-relaxed">{description}</p>

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

        {achievements && achievements.length > 0 && (
          <div className="mt-4 pt-4 border-t border-zinc-800">
            <h4 className="text-sm font-semibold text-cyan-400 mb-2">주요 성과</h4>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-zinc-400">
                  <CheckCircle size={16} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
