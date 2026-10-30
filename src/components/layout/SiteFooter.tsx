import { ArrowUp } from "@/components/ui/icons";
import { person } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-heading/10">
      <div className="shell flex flex-col gap-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted">© {person.name}</p>
        <a
          href="#top"
          className="link-underline inline-flex items-center gap-2 self-start py-1 text-body hover:text-heading sm:self-auto"
        >
          Başa dön
          <ArrowUp className="size-3.5" />
        </a>
      </div>
    </footer>
  );
}
