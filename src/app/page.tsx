import { HeroSection } from "@/components/sections/HeroSection";
import { YouTubeSection } from "@/components/sections/YouTubeSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20">
      <HeroSection />
      <YouTubeSection />
    </main>
  );
}
