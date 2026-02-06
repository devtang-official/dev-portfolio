'use client';

import { useEffect, useState } from 'react';
import Button from '../atoms/Button';
import { Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  name: string;
  title: string;
  bio: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

export default function Hero({ name, title, bio, github, linkedin, email }: HeroProps) {
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
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
          {name}
        </h1>
        <h2 className="text-2xl md:text-3xl text-cyan-400 mb-6 font-mono h-10">
          {displayedText}
          <span className="animate-pulse">|</span>
        </h2>
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
            >
              <Github size={24} />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg border border-zinc-800 hover:border-cyan-500 transition-all"
            >
              <Linkedin size={24} />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="p-3 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg border border-zinc-800 hover:border-cyan-500 transition-all"
            >
              <Mail size={24} />
            </a>
          )}
        </div>

        <div className="flex gap-4">
          <Button variant="primary">프로젝트 보기</Button>
          <Button variant="ghost">연락하기</Button>
        </div>
      </div>
    </section>
  );
}
