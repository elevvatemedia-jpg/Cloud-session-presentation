import type { SVGProps } from "react";

/**
 * One stroke weight, one cap style, one 24-grid across the whole page.
 * All are decorative by default (aria-hidden); pass a title when an icon
 * is the only label for a control.
 */
type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function Svg({ title, children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export const MailIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3.5 7 7.4 5.3a2 2 0 0 0 2.2 0L20.5 7" />
  </Svg>
);

export const CalendarIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2.5" />
    <path d="M3 9.5h18M8 3v4M16 3v4" />
  </Svg>
);

export const NoteIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5.5 3.5h9L19 8v12.5H5.5z" />
    <path d="M14 3.5V8h4.5M8.5 13h7M8.5 16.5h4.5" />
  </Svg>
);

export const SignalIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3.5 16.5 9 11l3.5 3.5L20.5 6.5" />
    <path d="M15.5 6.5h5v5" />
  </Svg>
);

export const TargetIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
  </Svg>
);

export const SendIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M21 3.5 10.5 14" />
    <path d="M21 3.5 14.5 21l-4-7-7-4z" />
  </Svg>
);

export const BoardIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="4" width="5" height="16" rx="1.6" />
    <rect x="9.5" y="4" width="5" height="11" rx="1.6" />
    <rect x="16" y="4" width="5" height="14" rx="1.6" />
  </Svg>
);

export const SparkIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3.5 13.6 9 19 10.5 13.6 12 12 17.5 10.4 12 5 10.5 10.4 9z" />
    <path d="M18.5 16.5 19 18.5l2 .5-2 .5-.5 2-.5-2-2-.5 2-.5z" />
  </Svg>
);

export const LayersIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m12 3.5 8.5 4.3-8.5 4.3-8.5-4.3z" />
    <path d="m4 12.2 8 4.1 8-4.1M4 16.4l8 4.1 8-4.1" />
  </Svg>
);

export const CheckIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m4.5 12.5 4.8 4.8L19.5 7" />
  </Svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4.5 12h15M13.5 6l6 6-6 6" />
  </Svg>
);

export const ArrowDownIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 4.5v15M6 13.5l6 6 6-6" />
  </Svg>
);

export const PlusIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 5v14M5 12h14" />
  </Svg>
);

export const ChevronIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m6.5 9.5 5.5 5.5 5.5-5.5" />
  </Svg>
);

export const SOURCE_ICONS = {
  email: MailIcon,
  meeting: CalendarIcon,
  note: NoteIcon,
  signal: SignalIcon,
} as const;

export const AGENT_ICONS = {
  lead: TargetIcon,
  followup: SendIcon,
  pipeline: BoardIcon,
  assistant: SparkIcon,
} as const;
