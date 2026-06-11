"use client";
import { data } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} className="py-28 relative overflow-hidden">
      {/* Bottom ambient */}
      <div
        className="absolute inset-x-0 bottom-0 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 110%, rgba(245,158,11,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <SectionLabel index="05" title="CONTACT" />

        <h2 className="reveal font-display text-6xl lg:text-8xl leading-none text-[#FAFAFA] mb-4 tracking-wide">
          LET&apos;S BUILD
          <br />
          <span className="grad-warm">TOGETHER.</span>
        </h2>

        <p className="reveal text-lg text-[#71717A] leading-relaxed max-w-lg mx-auto mb-12">
          Looking for an intern who ships? I bring 4 internships of ML pipeline and full-stack experience — and I&apos;m hungry for more.
        </p>

        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href={`mailto:${data.email}`}
            className="btn-shimmer px-10 py-4 rounded-sm font-heading font-600 text-base"
          >
            Send an Email →
          </a>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-sm border border-[#27272A] text-[#71717A] font-mono text-sm hover:border-[#F59E0B]/40 hover:text-[#E4E4E7] transition-all"
          >
            LinkedIn ↗
          </a>
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-sm border border-[#27272A] text-[#71717A] font-mono text-sm hover:border-[#F59E0B]/40 hover:text-[#E4E4E7] transition-all"
          >
            GitHub ↗
          </a>
        </div>

        {/* Contact card */}
        <div className="reveal inline-flex items-center gap-3 px-6 py-3.5 bg-[#18181B] border border-[#27272A] rounded-full">
          <span className="pulse-dot relative w-2.5 h-2.5 rounded-full bg-[#4ADE80] flex-shrink-0" />
          <a
            href={`mailto:${data.email}`}
            className="font-mono text-sm text-[#71717A] hover:text-[#F59E0B] transition-colors"
          >
            {data.email}
          </a>
          <span className="text-[#27272A]">·</span>
          <span className="font-mono text-sm text-[#3F3F46]">{data.phone}</span>
        </div>
      </div>
    </section>
  );
}
