interface Props {
  index: string;
  title: string;
}
export default function SectionLabel({ index, title }: Props) {
  return (
    <div className="reveal flex items-center gap-4 mb-14">
      <span className="font-mono text-xs text-[#F59E0B] tracking-widest">{index} /</span>
      <h2 className="font-display text-4xl text-[#FAFAFA] tracking-wide">{title}</h2>
      <div className="flex-1 hr-amber ml-4" />
    </div>
  );
}
