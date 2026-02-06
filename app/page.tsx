import Hero from '@/components/organisms/Hero';
import SkillsSection from '@/components/organisms/SkillsSection';
import ProjectsSection from '@/components/organisms/ProjectsSection';
import StrengthsSection from '@/components/organisms/StrengthsSection';
import profileData from '@/mocks/profile.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero
        name={profileData.name}
        title={profileData.title}
        bio={profileData.bio}
        github={profileData.github}
        blog={profileData.blog}
        email={profileData.email}
        company={profileData.company}
        experience={profileData.experience}
      />
      <SkillsSection skills={profileData.skills} />
      <StrengthsSection strengths={profileData.strengths} />
      <ProjectsSection projects={profileData.projects} />

      <footer className="py-12 px-6 text-center border-t border-zinc-900">
        <p className="text-zinc-500">
          © 2026 {profileData.name}. All rights reserved.
        </p>
        <p className="text-zinc-600 text-sm mt-2">
          macOS Application Developer
        </p>
      </footer>
    </div>
  );
}
