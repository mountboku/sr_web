import { products } from "../data/products";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import ForkliftArt from "./ForkliftArt";

const base_url = "https://website-sr-data-517255845732-ap-south-1-an.s3.ap-south-1.amazonaws.com/product-list/"
export default function ProductStrip({ productList = [] }) {
  return (
    <section className="bg-zinc-100 px-4 py-7 md:px-12">
      <div className="mx-auto flex max-w-[1450px] items-center gap-3">
        <button className="hidden h-11 w-11 shrink-0 place-items-center rounded-full bg-zinc-500 text-white lg:grid"><ChevronLeft /></button>
        <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide">
          {productList && productList.map((item, i) => {
            // const Icon = item.icon;
            const icon = `${base_url}${item.image}`
            console.log("icon :: ", icon)
            return (
              <div key={i} className="group flex min-h-[108px] items-center gap-4 rounded-lg border border-zinc-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <div className="relative h-20 w-24 overflow-hidden">
                  {!item.image ? <ForkliftArt small electric={i === 1} /> : <img src={icon} alt="Engine Pallet" className="absolute inset-0 m-auto h-12 w-12 text-brand-orange" strokeWidth={1.5} />}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-black tracking-wide text-zinc-700">{item.name}</h3>
                  <div className="mt-2 flex items-center gap-2 text-xs font-bold text-brand-orange">
                    <span>Product</span><ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="hidden h-11 w-11 shrink-0 place-items-center rounded-full bg-zinc-500 text-white lg:grid"><ChevronRight /></button>
      </div>
    </section>
  );
}

/**
 * 
AWS S3 Bucket
|
|- product-list
      |- JIGS_AND_FIXTURES
              |- BENDING FIXTURE
                    |- pictures
                          |-Bending_Fixture_web.png
              |- JIGS CBSA
                    |- pictures/
                          |-Jigs_Cbsa_web.png
              |- JIGS CBHA
                    |- pictures/
                          |-Jigs_Cbha_web.png
                          |-Jigs_cbha2_web.png
      |-Trolley_Material_handling  
              |- Bin transfer trolley
                    |- pictures
                          |-Bin_transfer_trolley_web.png    


this is the structure of bucket 

i want the list like 

productList =
[
  {
    name: JIGS_AND_FIXTURES
    data: [
      {
        name: BENDING FIXTURE
        image : Bending_Fixture_web.png
      }
    ]
  }
]






 */