// Tehnički nacrt vratnog krila s kotama — potpisni element koncepta.
// Klase za GSAP orkestraciju (u Hero.tsx):
//  .schematic-path  — pune linije, iscrtavaju se (stroke-dashoffset, pathLength=1)
//  .schematic-dash  — isprekidane pomoćne linije, fade-in
//  .schematic-label — mono oznake, "pečatiraju se" u koracima

const INK = "#edeae4";
const GRAY = "#8a8f98";
const FIRE = "#b3223d";
const MONO = "var(--font-mono)";

export default function DoorSchematic({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 440 580"
      role="img"
      aria-label="Tehnička shema čeličnih protupožarnih vrata s kotama 2100 × 1000 milimetara i oznakom klase EI90"
      className={className}
      fill="none"
    >
      <title>
        Tehnička shema protupožarnih vrata — 2100 × 1000 mm, klasa EI90
      </title>

      {/* Središnja os (dash-dot) */}
      <path
        className="schematic-dash"
        d="M210 52 V508"
        stroke={GRAY}
        strokeWidth="1"
        strokeOpacity="0.55"
        strokeDasharray="16 6 2 6"
      />

      {/* Podna linija */}
      <path
        className="schematic-path"
        pathLength={1}
        d="M62 480 H378"
        stroke={INK}
        strokeWidth="2"
      />

      {/* Dovratnik — vanjski i unutarnji rub */}
      <path
        className="schematic-path"
        pathLength={1}
        d="M100 480 V70 H320 V480"
        stroke={INK}
        strokeWidth="1.6"
      />
      <path
        className="schematic-path"
        pathLength={1}
        d="M116 480 V86 H304 V480"
        stroke={INK}
        strokeWidth="1"
        strokeOpacity="0.8"
      />

      {/* Vratno krilo */}
      <path
        className="schematic-path"
        pathLength={1}
        d="M124 480 V94 H296 V480"
        stroke={INK}
        strokeWidth="1.2"
      />

      {/* Smjer otvaranja (konvencija nacrta) */}
      <path
        className="schematic-dash"
        d="M124 96 L296 287 M124 478 L296 287"
        stroke={GRAY}
        strokeWidth="1"
        strokeDasharray="7 5"
      />

      {/* Šarke */}
      <path
        className="schematic-path"
        pathLength={1}
        d="M120 140 V168"
        stroke={INK}
        strokeWidth="4"
      />
      <path
        className="schematic-path"
        pathLength={1}
        d="M120 273 V301"
        stroke={INK}
        strokeWidth="4"
      />
      <path
        className="schematic-path"
        pathLength={1}
        d="M120 406 V434"
        stroke={INK}
        strokeWidth="4"
      />

      {/* Kvaka */}
      <path
        className="schematic-path"
        pathLength={1}
        d="M280 288.5 a3.5 3.5 0 1 0 0.01 0"
        stroke={INK}
        strokeWidth="1.4"
      />
      <path
        className="schematic-path"
        pathLength={1}
        d="M280 292 H256"
        stroke={INK}
        strokeWidth="1.4"
      />

      {/* Kota visine — pomoćne linije, kotna linija, kose crtice */}
      <path
        className="schematic-dash"
        d="M322 70 H360 M322 480 H360"
        stroke={GRAY}
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      <path
        className="schematic-path"
        pathLength={1}
        d="M352 70 V480"
        stroke={GRAY}
        strokeWidth="1"
      />
      <path
        className="schematic-path"
        pathLength={1}
        d="M347 75 L357 65 M347 485 L357 475"
        stroke={GRAY}
        strokeWidth="1.4"
      />
      <text
        className="schematic-label"
        transform="rotate(-90 372 275)"
        x="372"
        y="275"
        textAnchor="middle"
        fill={INK}
        fontFamily={MONO}
        fontSize="15"
        letterSpacing="3"
      >
        2100
      </text>

      {/* Kota širine */}
      <path
        className="schematic-dash"
        d="M100 482 V528 M320 482 V528"
        stroke={GRAY}
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      <path
        className="schematic-path"
        pathLength={1}
        d="M100 520 H320"
        stroke={GRAY}
        strokeWidth="1"
      />
      <path
        className="schematic-path"
        pathLength={1}
        d="M95 525 L105 515 M315 525 L325 515"
        stroke={GRAY}
        strokeWidth="1.4"
      />
      <text
        className="schematic-label"
        x="210"
        y="545"
        textAnchor="middle"
        fill={INK}
        fontFamily={MONO}
        fontSize="15"
        letterSpacing="3"
      >
        1000
      </text>

      {/* Pokazivač debljine krila */}
      <path
        className="schematic-path"
        pathLength={1}
        d="M296 122 L336 104 H396"
        stroke={GRAY}
        strokeWidth="1"
      />
      <text
        className="schematic-label"
        x="338"
        y="97"
        fill={GRAY}
        fontFamily={MONO}
        fontSize="12"
        letterSpacing="1.5"
      >
        d = 72 mm
      </text>

      {/* Oznaka klase — jedini "vatreni" naglasak na nacrtu */}
      <path
        className="schematic-path"
        pathLength={1}
        d="M180 252 H240 V286 H180 Z"
        stroke={FIRE}
        strokeWidth="1.4"
      />
      <text
        className="schematic-label"
        x="210"
        y="275"
        textAnchor="middle"
        fill={FIRE}
        fontFamily={MONO}
        fontSize="16"
        fontWeight="600"
        letterSpacing="3"
      >
        EI90
      </text>

      {/* Mini sastavnica */}
      <text
        className="schematic-label"
        x="378"
        y="568"
        textAnchor="end"
        fill={GRAY}
        fontFamily={MONO}
        fontSize="11"
        letterSpacing="1.5"
      >
        FSD — SHEMA / M 1:20
      </text>
    </svg>
  );
}
