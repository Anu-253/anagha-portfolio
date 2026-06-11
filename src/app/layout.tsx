import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anagha P Kulkarni — AI/ML & Full-Stack Engineer",
  description:
    "Pre-final year engineer shipping end-to-end AI products — computer vision, audio ML, FastAPI backends. 4 internships before graduation.",
  keywords: ["AI Engineer", "ML Engineer", "Computer Vision", "FastAPI", "React", "Python"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
