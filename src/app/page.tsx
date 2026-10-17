import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20">
      <HeroSection />
      
      {/* Flag Counter Widget */}
      <div 
        data-flag-counter 
        data-site-id="aHR0cHM6Ly9z" 
        data-api="https://analyticstail.org" 
        data-max-flags="10" 
        data-columns="3" 
        data-theme="dark"
      ></div>
      <script src="https://analyticstail.org/widget.js" async></script>
    </main>
  );
}
