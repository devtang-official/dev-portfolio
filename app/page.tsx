import Hero from '@/components/organisms/Hero';
import SkillsSection from '@/components/organisms/SkillsSection';
import ProjectsSection from '@/components/organisms/ProjectsSection';
import profileData from '@/mocks/profile.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero
        name={profileData.name}
        title={profileData.title}
        bio={profileData.bio}
        github={profileData.github}
        linkedin={profileData.linkedin}
        email={profileData.email}
      />
      <SkillsSection skills={profileData.skills} />
      <ProjectsSection projects={profileData.projects} />

      <footer className="py-12 px-6 text-center border-t border-zinc-900">
        <p className="text-zinc-500">
          © 2026 {profileData.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
