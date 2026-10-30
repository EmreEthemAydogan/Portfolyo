"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Bir CSS medya sorgusunu izler. Sunucuda ve ilk hidrasyonda `false` döner,
 * böylece hareket ve etkileşim yalnızca istemcide, koşullar uygunsa açılır.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mediaQuery = window.matchMedia(query);
      mediaQuery.addEventListener("change", onChange);
      return () => mediaQuery.removeEventListener("change", onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}
