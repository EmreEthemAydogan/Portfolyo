import type { CSSProperties } from "react";

/** Satır içi CSS özel değişkeni üretir, örneğin kademeli animasyon gecikmesi için. */
export function cssVar(name: `--${string}`, value: string | number): CSSProperties {
  return { [name]: value } as CSSProperties;
}
