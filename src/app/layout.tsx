import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Sishu Shankar Muni | Portfolio",
  description: "Building Future AI Engineers & Data Professionals. Mentorship, Projects, and AI Development.",
};

import Script from "next/script";
import { Navbar } from "@/components/ui/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-20" suppressHydrationWarning>
        <Navbar />
        {children}

        {/* FeedPulse Flag Counter Widget */}
        <Script
          src="https://feed-pulse.com/api/embed/flag-counter.js?site_id=b40ad17d-7bf6-42f1-9158-433abeec34b4&w=295&bc=FAF8F2&tc=1C1917&brd=E7E5E4&hb=1C1917&hf=FAF8F2&font=IBM+Plex+Sans&rows=6&cols=3&cod=1&poll=5000&nobot=1&lang=en&bstyle=animated&v=15"
          strategy="afterInteractive"
        />
        <Script id="feedpulse-tracker" strategy="afterInteractive">
          {`(function(){function g() { try { var i = new Image(); var t = (document.title || '').slice(0, 160); i.src = 'https://feed-pulse.com/api/track-pixel/b40ad17d-7bf6-42f1-9158-433abeec34b4?path=' + encodeURIComponent(location.pathname || '/') + '&title=' + encodeURIComponent(t) + '&host=' + encodeURIComponent(location.host) + '&ref=' + encodeURIComponent(document.referrer || ''); } catch (e) { } }if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded', g, { once: true });}else{setTimeout(g, 80);}})();`}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://feed-pulse.com/api/track-pixel/b40ad17d-7bf6-42f1-9158-433abeec34b4?via=img&nojs=1"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              border: 0,
              opacity: 0,
              pointerEvents: "none",
            }}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
