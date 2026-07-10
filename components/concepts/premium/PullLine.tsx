import Reveal from "./Reveal";
import { serif, container } from "./tokens";

// Izvučena rečenica ("pull-line"): kurzivni serif u velikom slogu s tankom
// bordo linijom — prenosi pripovijest iz arka u arak.
export default function PullLine({
  children,
  indent = false,
}: {
  children: React.ReactNode;
  indent?: boolean;
}) {
  return (
    <Reveal className={container}>
      <div
        data-reveal
        className={`max-w-3xl py-16 md:py-24 ${indent ? "md:ml-[30%]" : "md:ml-[8.333%]"}`}
      >
        <span aria-hidden="true" className="block h-px w-16 bg-primary" />
        <p
          className={`${serif} mt-7 text-[clamp(1.55rem,3.4vw,2.5rem)] font-light italic leading-[1.25] text-foreground`}
        >
          {children}
        </p>
      </div>
    </Reveal>
  );
}
