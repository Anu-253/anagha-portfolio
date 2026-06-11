"use client";
import { data } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" ref={ref as React.RefObject<HTMLElement>} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel index="01" title="ABOUT" />

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Bio */}
          <div className="lg:col-span-3 space-y-6">
            <p className="reveal text-lg text-[#71717A] leading-relaxed">{data.pitch}</p>
            <p className="reveal text-lg text-[#71717A] leading-relaxed">{data.pitch2}</p>

            {/* Education */}
            <div className="reveal mt-4 p-5 bg-[#18181B] border border-[#27272A] rounded-lg card-lift">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center text-lg flex-shrink-0">
                  🎓
                </div>
                <div>
                  <p className="font-heading font-600 text-[#E4E4E7]">{data.education.degree}</p>
                  <p className="font-mono text-sm text-[#52525B] mt-0.5">{data.education.institution}</p>
                  <p className="font-mono text-xs text-[#3F3F46] mt-1.5">{data.education.period}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick facts */}
          <div className="lg:col-span-2">
            <p className="reveal font-mono text-xs text-[#3F3F46] tracking-widest uppercase mb-4">Quick Facts</p>
            <div className="reveal space-y-3">
              {[
                { icon: "📍", label: "Location", val: data.location },
                { icon: "🏫", label: "Institution", val: "ACS College of Engineering" },
                { icon: "📅", label: "Graduating", val: "August 2027" },
                { icon: "🔍", label: "Seeking", val: "Internship / Full-time (SWE · AI/ML)" },
                { icon: "🌐", label: "Mode", val: "Remote & On-site" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="flex items-start gap-3 p-3.5 bg-[#111113] border border-[#27272A] rounded-lg card-lift"
                >
                  <span className="text-base flex-shrink-0 mt-0.5">{f.icon}</span>
                  <div>
                    <p className="font-mono text-xs text-[#3F3F46] tracking-wider uppercase">{f.label}</p>
                    <p className="text-sm text-[#A1A1AA] mt-0.5">{f.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
