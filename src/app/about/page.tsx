import { AboutSection } from "@/components/sections/AboutSection";
import { AwardsSection } from "@/components/sections/AwardsSection";

export const metadata = {
  title: 'About | Dr. Sishu Shankar Muni',
  description: 'About Dr. Sishu Shankar Muni, Assistant Professor and Data Analytics mentor.',
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20 pt-10">
      <AboutSection />
      <div className="w-full mt-20">
        <AwardsSection />
      </div>
    </main>
  );
}
