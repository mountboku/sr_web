import { ArrowRight, Mail, Phone, CircleArrowRight } from "lucide-react";
import ForkliftArt from "../components/ForkliftArt";
import ProductStrip from "../components/ProductStrip";
import FeatureList from "../components/FeatureList";
import { Link } from "react-router-dom";
import enginePallet from "../images/enginePallet.png";
import { useEffect, useState } from "react";
import { useProducts } from "../context/productList";

const PRODUCTS_URL = "https://website-sr-data-517255845732-ap-south-1-an.s3.ap-south-1.amazonaws.com/product-list/productList.json"

export default function Home() {
  const [productListHome, setProductList] = useState([])
  const { productList, setProducts } = useProducts();

  const callData = async () => {
    try {
      const response = await fetch(PRODUCTS_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();

      console.log("API data:", data);

      let productListNew = [];

      data.categories.forEach((item) => {
        productListNew = [
          ...productListNew,
          ...item.products,
        ];
      });

      console.log("Product list:", productListNew);

      setProducts(data);
      setProductList(productListNew)

      return data;
    } catch (error) {
      console.log("error ::", error);
    }
  }

  useEffect(() => {
    if (!productList || productList.length <= 0) {
      callData()
    }
  }, [])

  return (
    <main>
      <section className="relative min-h-[760px] overflow-hidden bg-brand-orange lg:min-h-[820px]">
        <div className="absolute inset-x-0 bottom-0 h-full grid-floor opacity-70"></div>
        {/* <div className="absolute left-0 top-0 h-[140px] w-[58%] rounded-br-[80px] bg-gradient-to-r from-orange-600 to-brand-orange"></div> */}

        <div className="relative mx-auto grid min-h-[760px] max-w-[1900px] grid-cols-1 pt-20 lg:grid-cols-[54%_46%] lg:pt-0">
          <div className="relative flex flex-col justify-center px-7 pb-20 pt-28 md:px-16 lg:px-24">
            <div className="relative z-10">
              {/* <p className="mb-2 text-center text-2xl font-black tracking-[0.06em] text-white sm:text-3xl lg:text-left">AUTHORIZED</p>
              <h1 className="hero-shadow text-center font-display text-6xl leading-[0.88] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-left xl:text-[100px]">
                DISTRIBUTOR<br />FORKLIFT
              </h1>
              <p className="mt-3 text-center text-3xl font-black tracking-[0.12em] text-yellow-300 sm:text-4xl lg:text-left">INDIA</p>
            */}
              {/* <p className="mb-2 text-center text-2xl font-black tracking-[0.06em] text-white sm:text-3xl lg:text-left">AUTHORIZED</p> */}
              <h1 className="hero-shadow text-center font-display text-6xl leading-[0.88] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-left xl:text-[100px]">
                Automotive<br />PACKAGING SPECIALIST
              </h1>
              <p className="mt-3 text-center text-3xl font-black tracking-[0.12em] text-yellow-300 sm:text-4xl lg:text-left">INDIA</p>

            </div>
            <div className="flex w-[100%] mt-10">
              {/* <div className="bottom-[-150px] left-5 h-[52%] w-[48%] sm:w-[42%]"> */}
              <div className="flex  w-[40%]" >
                <img src={enginePallet} alt="Engine Pallet"
                  x="0"
                  y="0"
                  width="300"
                  height="300"
                />

              </div>
              <div className=" w-[55%] ml-10">
                <h2 className="text-3xl font-bold text-white">Why Choose Us</h2>
                <div className="mt-6"><FeatureList /></div>
              </div>


            </div>

          </div>

          <div className="relative px-5 py-8 lg:px-0 lg:py-0">
            <div className="relative h-full min-h-[620px] overflow-hidden rounded-bl-[62px] rounded-tl-[62px] bg-brand-charcoal px-4 py-12 lg:mt-0 lg:min-h-[820px] lg:px-14 lg:py-20">
              <div className="absolute right-0 top-[16%] h-[46%] w-[54%] rounded-tl-[190px] bg-brand-orange"></div>
              <div className="flex h-full flex-col sm:justify-between">
                {/* <div className="relative z-10 mx-auto max-w-2xl"> */}
                <div className="relativ z-10">
                  <div className="mb-14 flex items-center justify-between text-white">
                    <span className="text-xs font-black tracking-[0.13em] text-white/70">Automobile Packaging Solutions</span>
                    <span className="hidden text-[9px] font-bold text-white/40 sm:block">FOLLOW US NOW</span>
                  </div>

                  <div className="max-w-md">
                    <h3 className="text-2xl font-bold tracking-wide text-brand-orange">SR Enterprises</h3>
                    <p className="mt-4 text-sm font-medium text-white/70">Leading Manufacturer of Steel Pallets & Industrial Packaging Solutions in India</p>
                  </div>

                  <div className="mt-10 grid max-w-xs gap-3">
                    <div className="h-12 overflow-hidden rounded-full bg-zinc-700 p-1 place-items-center">
                      <div className="grid h-full w-full rounded-full bg-gradient-to-r from-zinc-600 via-brand-orange to-zinc-600 text-white place-items-center tracking-wide">Highly Customizable</div>
                    </div>
                    <div className="grid place-items-center rounded-full bg-zinc-700 py-3 text-sm font-black tracking-wide text-white">BEST QUALITY</div>
                    <div className="h-12 overflow-hidden rounded-full bg-zinc-700 p-1 place-items-center" >
                      <div className="grid h-full w-full place-items-center rounded-full bg-gradient-to-r from-orange-300 via-zinc-800 to-brand-orange text-white tracking-wide ">Competitve lower rates</div>
                    </div>
                  </div>

                  {/* <div className="absolute right-[-80px] top-[210px] h-[420px] w-[620px] max-w-[90vw]"> */}
                  <div className="absolute left-[380px] bottom-[150px] h-[420px] w-[620px] max-w-[90vw]">
                    {/* <ForkliftArt electric /> */}
                    <img src={enginePallet} alt="Engine Pallet"
                      x="0"
                      y="0"
                      width="300"
                      height="300"
                    />
                  </div>


                </div>
                <div className=" left-8 right-8 flex flex-col gap-5 text-white sm:flex-row sm:items-center sm:justify-between">

                  <Link to="/contact" className="inline-flex w-fit items-center gap-2 rounded-full bg-zinc-700 px-4 py-2 text-xs font-bold">
                    <CircleArrowRight className="h-5 w-5 rounded-full bg-brand-orange p-1" /> CONTACT US
                  </Link>
                  <div className="flex items-center gap-3">
                    <Phone className="text-brand-orange" />
                    <div><b className="text-lg">0857-911-1139</b><p className="text-[9px] tracking-[0.2em] text-white/50">WWW.SR Enterprises.EXAMPLE</p></div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {productListHome.length >= 0 && <ProductStrip productList={productListHome} />}

      <section className="bg-white px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs font-black tracking-[0.2em] text-brand-orange">ABOUT SR Enterprises</p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-zinc-800">Industrial handling solutions built around your operation.</h2>
          </div>
          <div>
            <p className="leading-8 text-zinc-600">This section is ready for your actual company profile. Add your dealership information, product brands, years of experience, service locations and key differentiators.</p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-charcoal px-6 py-3 text-sm font-bold text-white hover:bg-brand-orange">
              Learn more <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main >
  );
}