

import { products } from "../data/products";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ForkliftArt from "../components/ForkliftArt";
import { useProducts } from "../context/productList";
import { useEffect, useState } from "react";
import ProductImageCarousel from "../components/ProductImageCarousel";
const PRODUCTS_URL = "https://website-sr-data-517255845732-ap-south-1-an.s3.ap-south-1.amazonaws.com/product-list/productList.json"
const base_url = "https://website-sr-data-517255845732-ap-south-1-an.s3.ap-south-1.amazonaws.com/product-list/"

export default function Products() {
  const [productListHome, setProductList] = useState([])
  const { products, setProducts } = useProducts();


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
      console.log("error")
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
    <main className="bg-zinc-100 px-5 pb-16 pt-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-black tracking-[0.2em] text-brand-orange">OUR PRODUCTS</p>
        <h1 className="mt-3 text-4xl font-black text-zinc-800 md:text-6xl">Find the right machine for the job.</h1>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {productListHome.length > 0 && productListHome.map((product, index) => {
            const product_image = `${base_url}${product.image}`;
            return (
              <article key={index} className="group overflow-hidden rounded-2xl bg-white shadow-soft transition hover:-translate-y-1">
                {/* <div className="relative h-56 overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-700">
                  {
                    !product_image ? <ForkliftArt electric /> :
                      <img src={product_image} className=" h-56 w-full  text-brand-orange" strokeWidth={1.2} />}
                </div> */}
                <ProductImageCarousel
                  image={product.image}
                  name={product.name}
                />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">{product.tag}</p>
                  <h2 className="mt-2 text-xl font-black text-zinc-800">{product.name}</h2>
                  <p className="mt-2 text-sm text-zinc-500">{product.short}</p>
                  <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-zinc-800">Request details <ArrowUpRight size={17} /></Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}