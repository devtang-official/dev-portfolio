import StrengthCard from '../molecules/StrengthCard';

interface Strength {
  title: string;
  description: string;
}

interface StrengthsSectionProps {
  strengths: Strength[];
}

export default function StrengthsSection({ strengths }: StrengthsSectionProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          강점
        </h2>
        <p className="text-zinc-400 mb-12">
          차별화된 역량과 경험입니다
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strengths.map((strength, index) => (
            <StrengthCard
              key={index}
              title={strength.title}
              description={strength.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
