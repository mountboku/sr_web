export default function ForkliftArt({ small = false, electric = false }) {
  const scale = small ? "scale-[0.55] origin-center" : "";
  return (
    <div className={`relative h-full w-full ${scale}`}>
      <div className={`absolute bottom-[13%] left-[28%] h-[28%] w-[42%] rounded-2xl border-4 border-zinc-700 ${electric ? "bg-brand-orange" : "bg-zinc-800"} shadow-2xl`}></div>
      <div className={`absolute bottom-[22%] left-[34%] h-[18%] w-[22%] rounded-xl border-4 border-zinc-700 ${electric ? "bg-orange-500" : "bg-zinc-700"}`}></div>
      <div className="absolute bottom-[22%] left-[52%] h-[28%] w-[4%] bg-zinc-700"></div>
      <div className="absolute bottom-[22%] left-[54%] h-[5%] w-[28%] bg-zinc-800"></div>
      <div className="absolute bottom-[22%] left-[80%] h-[48%] w-[4%] bg-zinc-700"></div>
      <div className="absolute bottom-[25%] left-[61%] h-[4%] w-[23%] bg-zinc-600"></div>
      <div className="absolute bottom-[17%] left-[25%] h-[21%] w-[21%] rounded-full forklift-wheel border-4 border-zinc-700"></div>
      <div className="absolute bottom-[15%] left-[60%] h-[25%] w-[25%] rounded-full forklift-wheel border-4 border-zinc-700"></div>
      <div className="absolute bottom-[42%] left-[42%] h-[12%] w-[12%] rounded-t-full border-4 border-zinc-600 bg-zinc-900"></div>
      <div className="absolute bottom-[53%] left-[42%] h-[5%] w-[24%] -rotate-[10deg] rounded bg-zinc-700"></div>
    </div>
  );
}