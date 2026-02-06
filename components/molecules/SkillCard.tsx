interface SkillCardProps {
  name: string;
  category: string;
}

export default function SkillCard({ name, category }: SkillCardProps) {
  return (
    <div className="px-4 py-2 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-cyan-500 transition-all duration-300">
      <span className="text-white font-medium">{name}</span>
    </div>
  );
}
