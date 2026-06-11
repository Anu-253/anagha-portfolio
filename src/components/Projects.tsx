"use client";
import Image from "next/image";
import { data } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";
import SectionLabel from "./SectionLabel";

// Infer the project type from the data array
type Project = (typeof data.projects)[number];

const accentStyles: Record<string, { border: string; tag: string; dot: string; label: string; btn: string }> = {
  amber: {
    border: "hover:border-[#F59E0B]/35",
    tag: "bg-[#F59E0B]/8 border-[#F59E0B]/20 text-[#F59E0B]",
    dot: "bg-[#F59E0B]",
    label: "text-[#F59E0B]",
    btn: "border-[#F59E0B]/30 text-[#F59E0B] hover:bg-[#F59E0B]/8",
  },
  rose: {
    border: "hover:border-[#F43F5E]/35",
    tag: "bg-[#F43F5E]/8 border-[#F43F5E]/20 text-[#F43F5E]",
    dot: "bg-[#F43F5E]",
    label: "text-[#F43F5E]",
    btn: "border-[#F43F5E]/30 text-[#F43F5E] hover:bg-[#F43F5E]/8",
  },
  sage: {
    border: "hover:border-[#4ADE80]/35",
    tag: "bg-[#4ADE80]/8 border-[#4ADE80]/20 text-[#4ADE80]",
    dot: "bg-[#4ADE80]",
    label: "text-[#4ADE80]",
    btn: "border-[#4ADE80]/30 text-[#4ADE80] hover:bg-[#4ADE80]/8",
  },
};

function ProjectLinks({ project, ac }: { project: Project; ac: (typeof accentStyles)[string] }) {
  const hasGithub = project.github && project.github.length > 0;
  const hasDemo = project.demo && project.demo.length > 0;
  if (!hasGithub && !hasDemo) return null;
  return (
    <div className="flex gap-2 mt-4">
      {hasGithub && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded border font-mono text-xs transition-all duration-200 ${ac.btn}`}
        >
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>
      )}
      {hasDemo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#27272A] text-[#71717A] font-mono text-xs hover:border-[#A1A1AA]/40 hover:text-[#E4E4E7] transition-all duration-200"
        >
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          Live Demo
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const ref = useReveal();
  const featured = data.projects.filter((p) => p.featured);
  const secondary = data.projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28 bg-[#0D0D0F] relative"
    >
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionLabel index="02" title="PROJECTS" />

        {/* Featured — large cards */}
        <div className="space-y-6 mb-8">
          {featured.map((project, idx) => {
            const ac = accentStyles[project.accent] || accentStyles.amber;
            const hasImage = project.image && project.image.length > 0;
            return (
              <div
                key={project.id}
                className={`reveal card-lift bg-[#18181B] border border-[#27272A] rounded-xl overflow-hidden ${ac.border}`}
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Left panel */}
                  <div className="lg:col-span-3 p-8 border-r border-[#27272A]">
                    <div className="flex items-center gap-3 mb-5">
                      <span className={`font-mono text-xs tracking-widest uppercase ${ac.label}`}>
                        {project.category}
                      </span>
                      <span className="font-mono text-xs text-[#3F3F46]">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="font-display text-3xl text-[#FAFAFA] tracking-wide mb-1">
                      {project.title}
                    </h3>
                    <p className="font-mono text-sm text-[#52525B] mb-6">{project.subtitle}</p>

                    <div className="space-y-4">
                      <div>
                        <p className="font-mono text-xs text-[#3F3F46] tracking-widest uppercase mb-1.5">Problem</p>
                        <p className="text-sm text-[#71717A] leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <p className="font-mono text-xs text-[#3F3F46] tracking-widest uppercase mb-1.5">Solution</p>
                        <p className="text-sm text-[#71717A] leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.stack.map((t) => (
                        <span key={t} className={`tag border ${ac.tag}`}>{t}</span>
                      ))}
                    </div>

                    <ProjectLinks project={project} ac={ac} />
                  </div>

                  {/* Right panel — Image + Impact */}
                  <div className="lg:col-span-2 bg-[#111113] flex flex-col">
                    {/* Project screenshot */}
                    {hasImage && (
                      <div className="relative w-full h-44 border-b border-[#27272A] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={`${project.title} screenshot`}
                          fill
                          className="object-cover object-top opacity-80 hover:opacity-100 transition-opacity duration-300"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                        {/* Gradient fade at bottom */}
                        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#111113] to-transparent" />
                      </div>
                    )}

                    {/* Impact */}
                    <div className="p-8 flex-1">
                      <p className="font-mono text-xs text-[#3F3F46] tracking-widest uppercase mb-5">
                        Impact & Results
                      </p>
                      <ul className="space-y-4">
                        {project.impact.map((point, i) => (
                          <li key={i} className="flex gap-3">
                            <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${ac.dot}`} />
                            <p className="text-sm text-[#A1A1AA] leading-relaxed">{point}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary — smaller cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {secondary.map((project) => {
            const ac = accentStyles[project.accent] || accentStyles.amber;
            return (
              <div
                key={project.id}
                className={`reveal card-lift bg-[#18181B] border border-[#27272A] rounded-xl p-6 ${ac.border} flex flex-col`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`font-mono text-xs tracking-widest uppercase ${ac.label}`}>
                    {project.category}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-[#FAFAFA] tracking-wide mb-1">{project.title}</h3>
                <p className="font-mono text-xs text-[#52525B] mb-4">{project.subtitle}</p>
                <ul className="space-y-2 mb-5 flex-1">
                  {project.impact.map((point, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className={`w-1 h-1 rounded-full mt-2 flex-shrink-0 ${ac.dot}`} />
                      <p className="text-xs text-[#71717A] leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.stack.map((t) => (
                    <span key={t} className="tag-neutral tag">{t}</span>
                  ))}
                </div>
                <ProjectLinks project={project} ac={ac} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
