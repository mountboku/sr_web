import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import { ProductProvider } from "./context/productList";

export default function App() {
  return (
    // <div className="min-h-screen bg-zinc-200 p-2 sm:p-4 lg:p-6">
    <div className="min-h-screen bg-zinc-200" >
      <div className="mx-auto max-w-[1900px] overflow-hidden rounded-b-[34px] bg-white shadow-soft">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div >
  );
}