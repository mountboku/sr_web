import { BadgeCheck, Handshake, ShieldCheck, BriefcaseBusiness } from "lucide-react";

const items = [
  [BadgeCheck, "High Quality", "Reliable industrial equipment"],
  [Handshake, "Trusted Partner", "Experienced technical support"],
  [ShieldCheck, "Competitive Value", "Quality solutions at the right cost"],
  [BriefcaseBusiness, "Industry Experience", "18 years of trusted engineering expertise"],
];

export default function FeatureList() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map(([Icon, title, text]) => (
        <div key={title} className="flex items-center gap-3">
          <Icon className="h-7 w-7 shrink-0 text-white/85" strokeWidth={1.5} />
          <div>
            <h4 className="text-sm font-bold text-white">{title}</h4>
            <p className="mt-0.5 text-xs text-white/65">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}