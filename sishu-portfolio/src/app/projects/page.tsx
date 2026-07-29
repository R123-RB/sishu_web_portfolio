import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { StudentProjectsSection } from "@/components/sections/StudentProjectsSection";

export const metadata = {
  title: 'Projects | Dr. Sishu Shankar Muni',
  description: 'Project showcase featuring student and lab projects guided by Dr. Sishu Shankar Muni.',
};

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20 pt-10">
      <ProjectShowcase />
      <div className="w-full mt-20">
        <StudentProjectsSection />
      </div>
    </main>
  );
}
