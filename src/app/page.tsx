import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20">
      <HeroSection />
      
      {/* FeedPulse Flag Counter */}
      <script src="https://feed-pulse.com/api/embed/flag-counter.js?site_id=b40ad17d-7bf6-42f1-9158-433abeec34b4&w=295&bc=FAF8F2&tc=1C1917&brd=E7E5E4&hb=1C1917&hf=FAF8F2&font=IBM+Plex+Sans&rows=6&cols=3&cod=1&poll=5000&nobot=1&lang=en&bstyle=animated&v=15" async></script>
      <script>(function(){function g(){try{var i=new Image();var t=(document.title||'').slice(0,160);i.src='https://feed-pulse.com/api/track-pixel/b40ad17d-7bf6-42f1-9158-433abeec34b4?path='+encodeURIComponent(location.pathname||'/')+'&title='+encodeURIComponent(t)+'&host='+encodeURIComponent(location.host)+'&ref='+encodeURIComponent(document.referrer||'');}catch(e){}}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',g,{once:true});}else{setTimeout(g,80);}})();</script>
      <noscript><img src="https://feed-pulse.com/api/track-pixel/b40ad17d-7bf6-42f1-9158-433abeec34b4?via=img&nojs=1" referrerpolicy="no-referrer-when-downgrade" style="position:absolute;width:1px;height:1px;border:0;opacity:0;pointer-events:none;" alt="" /></noscript>
    </main>
  );
}
