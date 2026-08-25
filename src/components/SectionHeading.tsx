type Props = {
  index?: string;
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "right";
};

export default function SectionHeading({ index, eyebrow, title, lead, align = "left" }: Props) {
  return (
    <div className={align === "right" ? "text-right ml-auto" : ""}>
      <div className={`flex items-baseline gap-3 ${align === "right" ? "justify-end" : ""}`}>
        {index && <span className="text-index">{index}</span>}
        <span className="text-eyebrow text-muted">{eyebrow}</span>
      </div>
      <h2 className="text-display-2 mt-3">{title}</h2>
      {lead && <p className="text-editorial-lead text-charcoal mt-5 max-w-xl">{lead}</p>}
    </div>
  );
}
