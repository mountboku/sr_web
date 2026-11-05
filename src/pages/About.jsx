import { BadgeCheck, Building2, MapPin, Wrench } from "lucide-react";
import { useEffect, useState } from "react";
import { getClientList } from "../api/productApi";
import costants from '../utils/constants.json'
import design from "../images/design.png"
import idea from "../images/idea.png"
import cad from "../images/cad.png"
import finalProduct from "../images/finalProduct.png"
import { TiChevronRight } from "react-icons/ti";
import { FiChevronsRight } from "react-icons/fi";

const {
  about_page
} = costants
const stats = [
  [about_page.experience_count, about_page.experience_text],
  [about_page.manufacturing_footprint_stat, about_page.manufacturing_footprint_text],
  [about_page.faberication_unit_stat, about_page.faberication_unit_text],
  [about_page.monthly_production_capacity_stat, about_page.monthly_production_capacity_text],
  [about_page.supplier_vendor_stat, about_page.supplier_vendor_text],
  [about_page.OEM_and_industrial_customer_stat, about_page.OEM_and_industrial_customer_text],
  [about_page.customer_support_hours, about_page.customer_support_text],
  [about_page.orignal_products_percentage, about_page.orignal_products],
];

const our_process_steps = [
  [about_page.process_step_1_title, design, about_page.process_step_1_desc],
  [about_page.process_step_2_title, idea, about_page.process_step_2_desc],
  [about_page.process_step_3_title, cad, about_page.process_step_3_desc],
  [about_page.process_step_4_title, finalProduct, about_page.process_step_4_desc],
];

export default function About() {


  const [clientList, setClientList] = useState();
  const callClientList = async () => {
    try {
      const data = await getClientList()
      setClientList(data);
    } catch (error) {
      console.log("error")
    }
  }
  async function sendMyEmail() {
    try {
      const message = await client.sendAsync({
        message: 'Hello from emailjs! This is a test message.',
        name: 'keee',
        to: 'someone@example.com',
        subject: 'Exciting News from emailjs! 🎉',
      })
    } catch (err) {
      console.error('Failed to send email:', err)
    } finally {
      client.smtp.close() // Don't forget to close the connection!
    }
  }
  useEffect(() => {
    callClientList()
  }, [])
  return (
    <main className="bg-white pt-28">
      <section className="bg-brand-charcoal px-6 py-20 text-white md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black tracking-[0.2em] text-brand-orange">{about_page.who_we_are.toLocaleUpperCase()}</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-7xl">{about_page.slogan_top}</h1>
          <p className="mt-6 max-w-2xl leading-8 text-white/65">{about_page.description_top}</p>
        </div>
      </section>
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([n, t]) =>
            <div key={t}
              className="rounded-2xl border border-zinc-200  items-center justify-center flex flex-col h-29 items-center justify-center  transition-all duration-300 hover:border-zinc-300 hover:bg-white hover:shadow-md py-6">
              <b className="text-3xl font-black text-brand-orange">{n}</b>
              <p className="mt-2 text-sm font-bold text-zinc-600">{t}</p>
            </div>
          )
          }
        </div>
      </section>
      <section className="bg-zinc-100 px-6 py-12 md:px-12">
        <div className="mx-auto ">
          <div className="mx-auto mb-12  text-center">
            <h2 className="text-l font-black tracking-[0.2em] text-brand-orange">
              OUR PROCESS
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-500 md:text-base">
              FROM YOUR IDEA TO A COMPLETE MATERIAL HANDLING SOLUTION
            </p>
            <div className="mx-auto grid mt-10  gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {our_process_steps.map(([title, image, desc], index) =>
                <div className="flex">

                  <div key={title}
                    className="rounded-2xl   items-center justify-center flex flex-col  transition-all duration-300 hover:border-zinc-300 bg-white hover:bg-white hover:shadow-md p-6">
                    <b className="text-xl font-black text-brand-orange">{title}</b>
                    <img src={image} alt="Engine Pallet"
                      x="0"
                      y="0"
                      width="300"
                      height="300"
                    />
                    <p className="mt-2 text-sm font-bold text-zinc-600">{desc}</p>
                  </div>
                  {our_process_steps.length - 1 !== index && (
                    <div className=" my-5">
                      <div className="rounded-2xl w-[2px] bg-brand-orange h-[42%] ml-3" />
                      <div className="h-[16%] items-center  flex ml-1 ">
                        <TiChevronRight style={{ color: "orange", }}
                        />

                      </div>
                      <div className="rounded-2xl w-[2px] bg-brand-orange h-[42%] ml-3" />
                      {/* <div className="rounded-2xl border border-brand-orange h-[42%] " /> */}
                    </div>
                  )}
                </div>
              )
              }
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-zinc-200 bg-white px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-l font-black tracking-[0.2em] text-brand-orange">
              OUR CLIENTS & PARTNERS
            </p>

            <h2 className="mt-4 text-xl font-black text-brand-charcoal md:text-3xl">
              Trusted by Industry Leaders
            </h2>

            <p className="mt-4 text-sm leading-7 text-zinc-500 md:text-base">
              Building lasting relationships with companies through reliable
              industrial equipment, genuine products, and dependable service.
            </p>
          </div>

          <div className="grid grid-cols-2 items-center gap-10 sm:grid-cols-3 md:grid-cols-4">
            {clientList && clientList.map((company) => (
              <div
                key={company.client_name}
                // className="flex h-28 items-center justify-center rounded-xl border border-zinc-100 bg-zinc-50 p-5 transition-all duration-300 hover:border-zinc-300 hover:bg-white hover:shadow-md"
                className="flex h-20 items-center justify-center  transition-all duration-300 hover:border-zinc-300 hover:bg-white hover:shadow-md"

              >
                <img
                  src={company.client_logo}
                  alt={`${company.client_name} logo`}
                  loading="lazy"
                  className="h-28 w-full object-contain transition duration-300 hover:grayscale-0 hover:opacity-100"

                // className="max-h-14 w-full object-contain transition duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-zinc-100 px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {[[Building2, "Professional Distribution"], [BadgeCheck, "Genuine Equipment"], [Wrench, "Technical Service"], [MapPin, "Regional Coverage"]].map(([Icon, title]) => <div key={title} className="flex gap-4 rounded-xl bg-white p-7 shadow-sm"><Icon className="h-8 w-8 text-brand-orange" /><div><h3 className="text-lg font-black text-zinc-800">{title}</h3><p className="mt-2 text-sm leading-6 text-zinc-500">Add your company-specific description and supporting information here.</p></div></div>)}
        </div>
      </section>
    </main>
  );
}