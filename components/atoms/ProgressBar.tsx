'use client';

import { useEffect, useState } from 'react';

interface ProgressBarProps {
  level: number;
  color?: string;
}

export default function ProgressBar({ level, color = 'cyan' }: ProgressBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), 100);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
      <div
        className={`h-full bg-${color}-500 transition-all duration-1000 ease-out`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
