import { Mail, MapPin, Phone } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useProducts } from "../context/productList";
import emailjs from "@emailjs/browser";
import { getProductData } from "../api/productApi";
const PRODUCTS_URL = "https://website-sr-data-517255845732-ap-south-1-an.s3.ap-south-1.amazonaws.com/product-list/productList.json"

function Contact() {
  const [state, setState] = useState({
    name: null, email: null, company_name: null, message: null
  });
  const [sent, setSent] = useState(false);
  const [productListHome, setProductList] = useState([])
  const { products, setProducts } = useProducts();

  function validate(e) {
    let currentName = e.target.name
    let value = e.target.value
    setState({ ...state, [currentName]: value })
  }


  const setModifiedData = (data) => {
    let productListNew = [];

    data.categories.forEach((item) => {
      productListNew = [
        ...productListNew,
        ...item.products,
      ];
    });
    setProductList(productListNew)

  }

  const callData = async () => {
    try {
      const data = await getProductData()
      setProducts(data);
      setModifiedData(data)
    } catch (error) {
      console.log("error", error)
    }
  }

  const onSend = async () => {
    const templateParams = {
      ...state
    };

    try {
      await emailjs.send('service_s9br9b2', 'template_l5x13xh', templateParams);

    } catch (error) {
      console.error('Error sending email - ', error.text);
    }
  }

  useEffect(() => {
    if (!products || products.length <= 0) {
      callData()
    } else {
      setModifiedData(products)
    }
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
            <input required placeholder="Your name" name="name" className="rounded-lg border border-zinc-200 px-4 py-3 outline-none focus:border-brand-orange" value={state.name} onChange={(e) => validate(e)} />
            <input required type="email" placeholder="Email" name="email" className="rounded-lg border border-zinc-200 px-4 py-3 outline-none focus:border-brand-orange" value={state.email} onChange={(e) => validate(e)} />
          </div>
          <input placeholder="Company name" className="mt-5 w-full rounded-lg border border-zinc-200 px-4 py-3 outline-none focus:border-brand-orange" value={state.company_name} onChange={(e) => validate(e)} />
          <select className="mt-5 w-full rounded-lg border border-zinc-200 px-4 py-3 outline-none focus:border-brand-orange">
            <option defaultValue={"Select Select Product"} disabled selected hidden>Select Product ...</option>
            {
              productListHome && productListHome.map((item, index) => {
                return <option key={index} value={item.name}>{item.name}</option>
              })

            }
            {/* <option>Product interested in</option><option>Diesel Forklift</option><option>Electric Forklift</option><option>GTWY</option><option>Hand Pallet</option> */}
          </select>
          <textarea rows="6" name="message" placeholder="Tell us what you need..." className="mt-5 w-full rounded-lg border border-zinc-200 px-4 py-3 outline-none focus:border-brand-orange" value={state.message} onChange={(e) => validate(e)}></textarea>
          <button className="mt-5 rounded-full bg-brand-orange px-7 py-3 text-sm font-black text-white hover:bg-brand-orangeDark" onClick={onSend}>SEND ENQUIRY</button>
          {sent && <p className="mt-4 text-sm font-bold text-green-600">Thank you. Connect this form to your API or email service for production.</p>}
        </form>
      </div>
    </main>
  );
}

export default React.memo(Contact)