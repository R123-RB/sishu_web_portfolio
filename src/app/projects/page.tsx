import { StudentProjectsSection } from "@/components/sections/StudentProjectsSection";
import { GlobalCollaborators } from "@/components/sections/GlobalCollaborators";

export const metadata = {
  title: 'Projects & Collaborations | Dr. Sishu Shankar Muni',
  description: 'Student projects and global collaborations guided by Dr. Sishu Shankar Muni.',
};

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20 pt-10">
      <div className="w-full mt-10">
        <StudentProjectsSection />
      </div>
      <div className="w-full mt-20">
        <GlobalCollaborators />
      </div>
    </main>
  );
}
