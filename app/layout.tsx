import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MARADONAvx - Creative Developer Portfolio",
  description: "Creative Director and UI/UX Designer, working in web development and print media.",
  keywords: "web developer, ui/ux designer, creative director, portfolio",
  authors: [{ name: "MARADONAvx" }],
  viewport: "width=device-width, initial-scale=1",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* 🎵 Background Music */}
        <audio
          src="/audio/background-music.mp3"
          autoPlay
          loop
          controls
          className="sr-only"
          aria-label="Background music"
        ></audio>

        {children}

        {/* 🔐 Disable Inspect Script */}
        <script src="./disable-inspect.js"></script>

        {/* 💸 Monetag Push Ads Script (Example - replace if needed) */}
        <script
          async
          src="https://puqzjz.com/pfe/current/tag.min.js?z=6613472"
        ></script>

        {/* 🛠️ Optional: Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker
                  .register('/sw.js')
                  .then(function(reg) {
                    console.log('Service worker registered ✅', reg);
                  })
                  .catch(function(err) {
                    console.warn('Service worker failed ❌', err);
                  });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
