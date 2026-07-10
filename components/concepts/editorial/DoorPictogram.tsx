// Linijski piktogrami vrata u stilu tehničkog crteža — jedinstvena debljina
// poteza 1.5, bez ispune, boja preko currentColor.

export type PictogramVariant = "single" | "glazed" | "wall" | "panel";

const STROKE = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "square" as const,
};

function SingleDoor() {
  return (
    <>
      {/* dovratnik, otvoren prema podu */}
      <path d="M13 43V5h22v38" {...STROKE} />
      {/* krilo */}
      <path d="M16.5 43V8.5h15V43" {...STROKE} />
      {/* kvaka */}
      <circle cx="28.2" cy="26" r="1.4" {...STROKE} />
      {/* linija poda */}
      <path d="M7 43h34" {...STROKE} />
    </>
  );
}

function GlazedDoor() {
  return (
    <>
      <path d="M13 43V5h22v38" {...STROKE} />
      <path d="M16.5 43V8.5h15V43" {...STROKE} />
      {/* stakleni panel s odsjajem */}
      <rect x="19.5" y="12" width="9" height="24" {...STROKE} />
      <path d="M21.5 31l5-14" {...STROKE} />
      <circle cx="31" cy="26" r="1.4" {...STROKE} />
      <path d="M7 43h34" {...STROKE} />
    </>
  );
}

function GlassWall() {
  return (
    <>
      {/* gornji profil i vertikalni profili modula */}
      <path d="M6 9h36" {...STROKE} />
      <path d="M6 9v32M18 9v32M30 9v32M42 9v32" {...STROKE} />
      {/* odsjaj u srednjem panelu */}
      <path d="M21 33l6-16" {...STROKE} />
      <path d="M4 41h40" {...STROKE} />
    </>
  );
}

function AccessPanel() {
  return (
    <>
      {/* okvir i poklopac */}
      <rect x="11" y="11" width="26" height="26" {...STROKE} />
      <rect x="14.5" y="14.5" width="19" height="19" {...STROKE} />
      {/* šarke */}
      <path d="M14.5 19v3.5M14.5 25.5V29" {...STROKE} strokeWidth={2} />
      {/* brava */}
      <circle cx="30.5" cy="24" r="1.4" {...STROKE} />
      {/* mjerne oznake kuta */}
      <path d="M4 7h4M6 5v4" {...STROKE} />
      <path d="M44 41h-4M42 43v-4" {...STROKE} />
    </>
  );
}

const VARIANTS: Record<PictogramVariant, () => React.ReactElement> = {
  single: SingleDoor,
  glazed: GlazedDoor,
  wall: GlassWall,
  panel: AccessPanel,
};

export default function DoorPictogram({
  variant,
  className,
}: {
  variant: PictogramVariant;
  className?: string;
}) {
  const Drawing = VARIANTS[variant];
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <Drawing />
    </svg>
  );
}
