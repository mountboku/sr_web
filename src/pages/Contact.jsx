import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <main className="min-h-screen bg-zinc-100 px-5 pb-20 pt-28 md:px-10">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-card lg:grid-cols-[.9fr_1.1fr]">
        <div className="bg-brand-charcoal p-8 text-white md:p-14">
          <p className="text-xs font-black tracking-[0.2em] text-brand-orange">CONTACT US</p>
          <h1 className="mt-4 text-4xl font-black md:text-5xl">Let's discuss your equipment needs.</h1>
          <div className="mt-12 grid gap-6">
            {[[Phone, "0857-911-1139"], [Mail, "sales@SR Enterprises.example"], [MapPin, "Your industrial location"]].map(([Icon, text]) => <div key={text} className="flex items-center gap-4"><Icon className="text-brand-orange" /><span className="text-sm text-white/75">{text}</span></div>)}
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="p-8 md:p-14">
          <div className="grid gap-5 sm:grid-cols-2">
            <input required placeholder="Your name" className="rounded-lg border border-zinc-200 px-4 py-3 outline-none focus:border-brand-orange" />
            <input required type="email" placeholder="Email" className="rounded-lg border border-zinc-200 px-4 py-3 outline-none focus:border-brand-orange" />
          </div>
          <input placeholder="Company name" className="mt-5 w-full rounded-lg border border-zinc-200 px-4 py-3 outline-none focus:border-brand-orange" />
          <select className="mt-5 w-full rounded-lg border border-zinc-200 px-4 py-3 outline-none focus:border-brand-orange">
            <option>Product interested in</option><option>Diesel Forklift</option><option>Electric Forklift</option><option>GTWY</option><option>Hand Pallet</option>
          </select>
          <textarea rows="6" placeholder="Tell us what you need..." className="mt-5 w-full rounded-lg border border-zinc-200 px-4 py-3 outline-none focus:border-brand-orange"></textarea>
          <button className="mt-5 rounded-full bg-brand-orange px-7 py-3 text-sm font-black text-white hover:bg-brand-orangeDark">SEND ENQUIRY</button>
          {sent && <p className="mt-4 text-sm font-bold text-green-600">Thank you. Connect this form to your API or email service for production.</p>}
        </form>
      </div>
    </main>
  );
}