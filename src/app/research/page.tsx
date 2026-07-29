import { PublicationsSection } from "@/components/sections/PublicationsSection";
import { FundingSection } from "@/components/sections/FundingSection";
import { AcademicServiceSection } from "@/components/sections/AcademicServiceSection";

export const metadata = {
  title: 'Research & Publications | Dr. Sishu Shankar Muni',
  description: 'Research publications, citations, funded projects, and editorial roles of Dr. Sishu Shankar Muni.',
};

export default function ResearchPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20 pt-10">
      <PublicationsSection />
      <div className="w-full">
        <FundingSection />
      </div>
      <div className="w-full">
        <AcademicServiceSection />
      </div>
    </main>
  );
}
