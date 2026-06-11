import { data } from "@/lib/data";

export default function Ticker() {
  const items = [...data.ticker, ...data.ticker]; // duplicate for seamless loop

  return (
    <div className="border-y border-[#27272A] bg-[#111113] py-3.5 overflow-hidden">
      <div className="ticker-inner">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-mono text-xs text-[#52525B] tracking-widest uppercase whitespace-nowrap px-6">
              {item}
            </span>
            <span className="text-[#F59E0B] opacity-40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
