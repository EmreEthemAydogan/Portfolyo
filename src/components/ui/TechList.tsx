import { cn } from "@/lib/cn";

type TechListProps = {
  items: readonly string[];
  label?: string;
  className?: string;
};

/** Teknolojileri satır içi, virgülle ayrılmış editoryal bir liste olarak gösterir. */
export function TechList({ items, label = "Teknolojiler", className }: TechListProps) {
  return (
    <ul aria-label={label} className={cn("leading-relaxed", className)}>
      {items.map((item, index) => (
        <li key={item} className="inline">
          <span className="whitespace-nowrap">
            {item}
            {index < items.length - 1 ? <span aria-hidden="true" className="opacity-40">,</span> : null}
          </span>
          {index < items.length - 1 ? " " : null}
        </li>
      ))}
    </ul>
  );
}
