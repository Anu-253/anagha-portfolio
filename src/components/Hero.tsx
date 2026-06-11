"use client";
import { useEffect, useState } from "react";
import { data } from "@/lib/data";

const words = [
  "AI solutions.",
  "RAG chatbots.",
  "ML pipelines.",
  "full-stack applications."
];
export default function Hero() {
  const [wIdx, setWIdx] = useState(0);
  const [chars, setChars] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wIdx];
    let t: NodeJS.Timeout;
    if (!deleting && chars < word.length) {
      t = setTimeout(() => setChars((c) => c + 1), 75);
    } else if (!deleting && chars === word.length) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && chars > 0) {
      t = setTimeout(() => setChars((c) => c - 1), 40);
    } else {
      setDeleting(false);
      setWIdx((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [chars, deleting, wIdx]);

  const displayed = words[wIdx].slice(0, chars);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden dot-grid">
      {/* Ambient orbs */}
      <div className="orb absolute top-1/3 -left-48 w-[500px] h-[500px] bg-amber-500/10 pointer-events-none" />
      <div className="orb-alt absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-rose-500/8 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ── LEFT ─────────────────────────────── */}
          <div>
            <div className="anim-fade-up delay-1 inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-[#27272A] bg-[#18181B]/70 backdrop-blur">
              <span className="pulse-dot relative w-2 h-2 rounded-full bg-[#4ADE80] flex-shrink-0" />
              <span className="font-mono text-xs text-[#52525B] tracking-widest uppercase">
                Available · Bengaluru · Graduating 2027
              </span>
            </div>

            <h1 className="anim-fade-up delay-2 leading-none mb-3">
              <span className="block font-display text-[88px] lg:text-[110px] text-[#FAFAFA] leading-none tracking-wider">
                ANAGHA P
              </span>
              <span className="block font-display text-[88px] lg:text-[110px] grad-amber leading-none tracking-wider">
                KULKARNI
              </span>
            </h1>

            <div className="anim-fade-up delay-3 font-mono text-xl text-[#52525B] mb-8 h-8 flex items-center gap-2">
              <span className="text-[#F59E0B]">$</span>
              <span className="text-[#E4E4E7]">I ship {displayed}</span>
              <span className="cursor-blink text-[#F59E0B]">▌</span>
            </div>

            <p className="anim-fade-up delay-4 text-[#71717A] text-lg leading-relaxed max-w-md mb-10">
              {data.subline}
            </p>

            <div className="anim-fade-up delay-5 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="btn-shimmer px-7 py-3.5 rounded-sm font-heading font-600 text-sm tracking-wide"
              >
                See My Work →
              </a>
              <a
                href={data.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-sm border border-[#F59E0B]/40 text-[#F59E0B] font-mono text-sm hover:bg-[#F59E0B]/8 transition-all duration-200"
              >
                Resume ↗
              </a>
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-sm border border-[#27272A] text-[#71717A] font-mono text-sm hover:border-[#F59E0B]/40 hover:text-[#E4E4E7] transition-all duration-200"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* ── RIGHT — Stats + Snapshot ─────────── */}
          <div className="anim-fade-up delay-6 hidden lg:block space-y-4">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {data.stats.map((s) => (
                <div
                  key={s.label}
                  className="card-lift bg-[#18181B] border border-[#27272A] rounded-lg p-5"
                >
                  <p className="font-display text-4xl grad-amber text-glow-amber tracking-wide">
                    {s.value}
                  </p>
                  <p className="font-mono text-xs text-[#52525B] tracking-widest uppercase mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Mini role card */}
            <div className="bg-[#111113] border border-[#27272A] rounded-lg p-5 glow-amber">
              <p className="font-mono text-xs text-[#52525B] tracking-widest uppercase mb-3">
                Core Focus
              </p>
              {[
                { icon: "", label: "ML / Computer Vision Pipelines" },
                { icon: "", label: "FastAPI · React · Full-Stack AI" },
                { icon: "", label: "Data Analytics · BI Dashboards" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 py-2 border-b border-[#27272A] last:border-0">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm text-[#A1A1AA]">{item.label}</span>
                </div>
              ))}

              {/* Quick links for recruiters */}
              <div className="flex gap-3 mt-4 pt-4 border-t border-[#27272A]">
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center font-mono text-xs text-[#52525B] hover:text-[#F59E0B] transition-colors py-1.5 border border-[#27272A] rounded hover:border-[#F59E0B]/30"
                >
                  GitHub ↗
                </a>
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center font-mono text-xs text-[#52525B] hover:text-[#F59E0B] transition-colors py-1.5 border border-[#27272A] rounded hover:border-[#F59E0B]/30"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={data.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center font-mono text-xs text-[#F59E0B] hover:text-[#FCD34D] transition-colors py-1.5 border border-[#F59E0B]/30 rounded hover:border-[#F59E0B]/60"
                >
                  Resume ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30">
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#52525B]">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#52525B] to-transparent" />
        </div>
      </div>
    </section>
  );
}
