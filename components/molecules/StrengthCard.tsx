import { Award } from 'lucide-react';

interface StrengthCardProps {
  title: string;
  description: string;
}

export default function StrengthCard({ title, description }: StrengthCardProps) {
  return (
    <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-cyan-500 transition-all duration-300">
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 bg-cyan-500/10 rounded-lg">
          <Award size={24} className="text-cyan-400" />
        </div>
        <h3 className="text-xl font-bold text-white flex-1">{title}</h3>
      </div>
      <p className="text-zinc-400 leading-relaxed">{description}</p>
    </div>
  );
}
