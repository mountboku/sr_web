import { BadgeCheck, Building2, MapPin, Wrench } from "lucide-react";

export default function About() {
  const stats = [["10+","Years Experience"],["6","Product Categories"],["24/7","Service Support"],["100%","Original Products"]];
  return (
    <main className="bg-white pt-28">
      <section className="bg-brand-charcoal px-6 py-20 text-white md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black tracking-[0.2em] text-brand-orange">WHO WE ARE</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-7xl">A modern industrial equipment partner.</h1>
          <p className="mt-6 max-w-2xl leading-8 text-white/65">Replace this content with your company history and dealership profile. The page is already structured for a professional industrial website.</p>
        </div>
      </section>
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([n,t]) => <div key={t} className="rounded-2xl border border-zinc-200 p-6"><b className="text-4xl font-black text-brand-orange">{n}</b><p className="mt-2 text-sm font-bold text-zinc-600">{t}</p></div>)}
        </div>
      </section>
      <section className="bg-zinc-100 px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {[[Building2,"Professional Distribution"],[BadgeCheck,"Genuine Equipment"],[Wrench,"Technical Service"],[MapPin,"Regional Coverage"]].map(([Icon,title]) => <div key={title} className="flex gap-4 rounded-xl bg-white p-7 shadow-sm"><Icon className="h-8 w-8 text-brand-orange"/><div><h3 className="text-lg font-black text-zinc-800">{title}</h3><p className="mt-2 text-sm leading-6 text-zinc-500">Add your company-specific description and supporting information here.</p></div></div>)}
        </div>
      </section>
    </main>
  );
}