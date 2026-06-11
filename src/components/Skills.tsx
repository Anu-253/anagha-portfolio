"use client";
import { useEffect, useRef } from "react";
import { data } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";
import SectionLabel from "./SectionLabel";

const catColors: Record<string, string> = {
  "ML / AI":   "#F59E0B",
  "Backend":   "#F43F5E",
  "Frontend":  "#818CF8",
  "Data & BI": "#4ADE80",
  "Tools":     "#94A3B8",
};

export default function Skills() {
  const ref = useReveal();
  const barsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>(".bar-fill").forEach((bar) => {
            bar.style.width = bar.dataset.width || "0%";
          });
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28 bg-[#0D0D0F] relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel index="04" title="SKILLS" />

        <section ref={barsRef as React.RefObject<HTMLElement>}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(data.skills).map(([cat, { items, level }]) => {
              const color = catColors[cat] || "#F59E0B";
              return (
                <div
                  key={cat}
                  className="reveal bg-[#18181B] border border-[#27272A] rounded-xl p-6 card-lift hover:border-[rgba(245,158,11,0.2)]"
                >
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                    <p className="font-mono text-xs tracking-widest uppercase text-[#52525B]">{cat}</p>
                  </div>

                  <div className="space-y-3">
                    {items.map((skill, i) => (
                      <div key={skill}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-[#A1A1AA]">{skill}</span>
                          <span className="font-mono text-xs text-[#3F3F46]">{level[i]}%</span>
                        </div>
                        <div className="h-[3px] bg-[#27272A] rounded-full overflow-hidden">
                          <div
                            className="bar-fill h-full rounded-full transition-[width] duration-[1200ms] ease-out"
                            style={{
                              width: "0%",
                              background: `linear-gradient(90deg, ${color}99, ${color})`,
                            }}
                            data-width={`${level[i]}%`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}
