"use client";

import { useEffect, useState } from "react";

type Status = "idle" | "copied" | "failed";

const LABELS: Record<Status, string> = {
  idle: "Adresi Kopyala",
  copied: "Kopyalandı",
  failed: "Kopyalanamadı",
};

const ANNOUNCEMENTS: Record<Status, string> = {
  idle: "",
  copied: "E-posta adresi panoya kopyalandı.",
  failed: "E-posta adresi kopyalanamadı.",
};

/** E-posta istemcisi tanımlı olmayan ziyaretçiler için adresi panoya kopyalar. */
export function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timeout = window.setTimeout(() => setStatus("idle"), 2400);
    return () => window.clearTimeout(timeout);
  }, [status]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  };

  return (
    <>
      <button type="button" onClick={copy} className="btn btn-ghost min-w-[11.5rem]">
        {LABELS[status]}
      </button>
      <span role="status" className="sr-only">
        {ANNOUNCEMENTS[status]}
      </span>
    </>
  );
}
