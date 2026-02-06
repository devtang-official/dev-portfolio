'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Github, Mail, BookOpen, Briefcase } from 'lucide-react';

interface HeroProps {
  name: string;
  title: string;
  bio: string;
  profileImage?: string;
  github?: string;
  blog?: string;
  email?: string;
  company?: string;
  experience?: string;
}

export default function Hero({ name, title, bio, profileImage, github, blog, email, company, experience }: HeroProps) {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = title;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          {profileImage && (
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-cyan-500 shadow-lg shadow-cyan-500/50">
              <Image
                src={profileImage}
                alt={name}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              {name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-cyan-400 mb-4 font-mono">
              {displayedText}
              <span className="animate-pulse">|</span>
            </h2>

            {(company || experience) && (
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {company && (
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Briefcase size={20} className="text-cyan-400" />
                    <span>{company}</span>
                  </div>
                )}
                {experience && (
                  <div className="text-zinc-400">
                    <span>•</span>
                    <span className="ml-2">{experience}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
          {bio}
        </p>

        <div className="flex gap-4 mb-8">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg border border-zinc-800 hover:border-cyan-500 transition-all"
              title="GitHub"
            >
              <Github size={24} />
            </a>
          )}
          {blog && (
            <a
              href={blog}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg border border-zinc-800 hover:border-cyan-500 transition-all"
              title="Blog"
            >
              <BookOpen size={24} />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="p-3 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg border border-zinc-800 hover:border-cyan-500 transition-all"
              title="Email"
            >
              <Mail size={24} />
            </a>
          )}
        </div>

      </div>
    </section>
  );
}
