import type { ComponentPropsWithoutRef } from "react";

type ExternalLinkProps = Omit<ComponentPropsWithoutRef<"a">, "target" | "rel">;

/** Yeni sekmede açılan dış bağlantı. Ekran okuyucuya bunu ayrıca bildirir. */
export function ExternalLink({ children, ...props }: ExternalLinkProps) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (yeni sekmede açılır)</span>
    </a>
  );
}
