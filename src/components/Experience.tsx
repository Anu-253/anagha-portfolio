"use client";
import { data } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" ref={ref as React.RefObject<HTMLElement>} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel index="03" title="EXPERIENCE" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-[#F59E0B]/50 via-[#F59E0B]/10 to-transparent hidden md:block" />

          <div className="space-y-6">
            {data.experience.map((exp, idx) => (
              <div key={exp.company} className="reveal relative">
                {/* Timeline node */}
                <div className="hidden md:flex absolute left-0 top-6 items-center justify-center">
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-[#F59E0B] bg-[#0A0A0B]" />
                </div>

                <div className="md:ml-10 bg-[#18181B] border border-[#27272A] rounded-xl p-6 card-lift hover:border-[#F59E0B]/25">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display text-2xl text-[#FAFAFA] tracking-wide">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-mono text-sm text-[#F59E0B]">{exp.company}</span>
                        <span className="text-[#27272A]">·</span>
                        <span className="font-mono text-xs text-[#52525B]">{exp.location}</span>
                      </div>
                    </div>
                    <span className="flex-shrink-0 font-mono text-xs text-[#3F3F46] bg-[#111113] border border-[#27272A] px-3 py-1.5 rounded">
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-4">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="w-1 h-1 rounded-full bg-[#F59E0B] mt-2.5 flex-shrink-0" />
                        <p className="text-sm text-[#71717A] leading-relaxed">{h}</p>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <span key={t} className="tag-neutral tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
