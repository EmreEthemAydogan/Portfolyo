import { cn } from "@/lib/cn";

type SectionEyebrowProps = {
  index: string;
  label: string;
  className?: string;
};

/** Bölüm ve proje başlıklarının üstündeki numaralı etiket. */
export function SectionEyebrow({ index, label, className }: SectionEyebrowProps) {
  return (
    <p className={cn("eyebrow flex flex-wrap items-center gap-x-3 gap-y-2", className)}>
      <span className="tabular-nums">{index}</span>
      <span aria-hidden="true" className="h-px w-8 bg-current opacity-50" />
      <span>{label}</span>
    </p>
  );
}
