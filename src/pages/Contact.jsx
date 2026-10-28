import { Mail, MapPin, Phone } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useProducts } from "../context/productList";
const PRODUCTS_URL = "https://website-sr-data-517255845732-ap-south-1-an.s3.ap-south-1.amazonaws.com/product-list/productList.json"

function Contact() {
  const [sent, setSent] = useState(false);
  const { productList, setProducts } = useProducts();

  // const [productData, setProductData] = useState(false)

  const callData = async () => {
    try {
      const response = await fetch(`${PRODUCTS_URL}?v=${Date.now()}`);

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      console.log("Product list:", data);

      setProductData(data);
      // setProductList(productListNew)

      return data;
    } catch (error) {
      console.log("error ::", error);
    }
  }

  useEffect(() => {
    console.log("productList", productList)
    // if (!productData || productData.length <= 0) {
    //   callData()
    // }
  }, [])
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
            <option value="" disabled selected hidden>Select Product ...</option>
            {/* {
              productData && productData.categories.map((item, index) => {
                return item.products.map((subItem, subIndex) => <option key={subIndex} value="">{subItem.name}</option>)
              })

            } */}
            {/* <option>Product interested in</option><option>Diesel Forklift</option><option>Electric Forklift</option><option>GTWY</option><option>Hand Pallet</option> */}
          </select>
          <textarea rows="6" placeholder="Tell us what you need..." className="mt-5 w-full rounded-lg border border-zinc-200 px-4 py-3 outline-none focus:border-brand-orange"></textarea>
          <button className="mt-5 rounded-full bg-brand-orange px-7 py-3 text-sm font-black text-white hover:bg-brand-orangeDark">SEND ENQUIRY</button>
          {sent && <p className="mt-4 text-sm font-bold text-green-600">Thank you. Connect this form to your API or email service for production.</p>}
        </form>
      </div>
    </main>
  );
}

export default React.memo(Contact)