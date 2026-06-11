import { data } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#27272A] bg-[#0A0A0B] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-[#3F3F46]">
          © 2026 · Anagha P Kulkarni · Built with Next.js + Tailwind CSS
        </span>
        <div className="flex gap-6">
          {[
            { label: "GitHub", href: data.github },
            { label: "LinkedIn", href: data.linkedin },
            { label: "Email", href: `mailto:${data.email}` },
            { label: "Resume", href: data.resume },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") || l.href.startsWith("/") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#3F3F46] hover:text-[#F59E0B] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
