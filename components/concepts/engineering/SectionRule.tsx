import { container, hairline, mono } from "./tokens";

// Mjerna linija između sekcija — jedina jeka kotnog motiva iz hero nacrta:
// kose crtice na krajevima i mono koordinata lista, kao presjek na nacrtu.
export default function SectionRule({ code }: { code: string }) {
  return (
    <div aria-hidden="true" className={container}>
      <div className="flex items-center gap-3">
        <span className="block h-2.5 w-px rotate-45 bg-[#8a8f98]" />
        <span className={`h-px flex-1 ${hairline} border-t`} />
        <span className={`${mono} text-[10px] uppercase tracking-[0.24em] text-gray`}>
          {code}
        </span>
        <span className={`h-px w-10 ${hairline} border-t`} />
        <span className="block h-2.5 w-px rotate-45 bg-[#8a8f98]" />
      </div>
    </div>
  );
}
