import ProgressBar from '../atoms/ProgressBar';

interface SkillCardProps {
  name: string;
  level: number;
  category: string;
}

export default function SkillCard({ name, level, category }: SkillCardProps) {
  return (
    <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-cyan-500 transition-all duration-300">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-white font-semibold">{name}</h3>
        <span className="text-cyan-400 text-sm">{level}%</span>
      </div>
      <p className="text-zinc-500 text-xs mb-3">{category}</p>
      <ProgressBar level={level} />
    </div>
  );
}
