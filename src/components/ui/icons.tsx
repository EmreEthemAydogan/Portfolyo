import type { SVGProps } from "react";

type IconProps = Omit<SVGProps<SVGSVGElement>, "children">;

function Icon({ name, path, ...props }: IconProps & { name: string; path: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      data-icon={name}
      {...props}
    >
      <path d={path} />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return <Icon name="up-right" path="M5 11 11 5M6.5 5H11v4.5" {...props} />;
}

export function ArrowDown(props: IconProps) {
  return <Icon name="down" path="M8 3v10M4 9l4 4 4-4" {...props} />;
}

export function ArrowRight(props: IconProps) {
  return <Icon name="right" path="M3 8h10M9 4l4 4-4 4" {...props} />;
}

export function ArrowUp(props: IconProps) {
  return <Icon name="up" path="M8 13V3M4 7l4-4 4 4" {...props} />;
}

export function Download(props: IconProps) {
  return <Icon name="download" path="M8 2.5v8M4.5 7 8 10.5 11.5 7M3 13.5h10" {...props} />;
}

export function PlayIcon(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false" {...props}>
      <path d="M5.25 3.4v9.2a.6.6 0 0 0 .9.52l7.5-4.6a.6.6 0 0 0 0-1.03l-7.5-4.6a.6.6 0 0 0-.9.51Z" fill="currentColor" />
    </svg>
  );
}
