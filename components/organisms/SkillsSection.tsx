import SkillCard from '../molecules/SkillCard';

interface Skill {
  name: string;
  category: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          기술 스택
        </h2>
        <p className="text-zinc-400 mb-12">
          다양한 기술을 활용하여 문제를 해결합니다
        </p>

        {categories.map((category) => (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <SkillCard
                    key={index}
                    name={skill.name}
                    category={skill.category}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
