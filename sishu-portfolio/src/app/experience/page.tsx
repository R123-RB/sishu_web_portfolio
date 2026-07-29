import { GlobalCollaborators } from "@/components/sections/GlobalCollaborators";
import { TeachingSupervisionSection } from "@/components/sections/TeachingSupervisionSection";

export const metadata = {
  title: 'Experience | Dr. Sishu Shankar Muni',
  description: 'Academic experience, teaching, administrative responsibilities, and global collaborators.',
};

export default function ExperiencePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20 pt-10">
      <TeachingSupervisionSection />
      <div className="w-full mt-20">
        <GlobalCollaborators />
      </div>
    </main>
  );
}
