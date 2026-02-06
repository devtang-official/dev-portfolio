import ProjectCard from '../molecules/ProjectCard';

interface Project {
  id: number;
  title: string;
  description: string;
  period?: string;
  role?: string;
  tags: string[];
  achievements?: string[];
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          주요 프로젝트
        </h2>
        <p className="text-zinc-400 mb-12">
          3년간 개발하고 운영해온 프로젝트들입니다
        </p>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              period={project.period}
              role={project.role}
              tags={project.tags}
              achievements={project.achievements}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
