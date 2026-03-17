import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, ChevronRight, Star, LayoutDashboard, Calendar1, FileText, Bell, Workflow, Sparkles, Plus } from "lucide-react";
import Link from "next/link";
import PlatformGridSection from "./sections/platform-grid";
import PlatformGridSection2 from "./sections/platform-grid2";
import HomeHeroSection from "./sections/home-hero";
import WarehouseBgSection from "./sections/warehouse-bg";
import UseCasesSection from "./sections/use-cases";
import BlogSliderSection from "./sections/blog-slider";
import { FaqSection } from "./sections/faq-section";
import AllInOne from "./sections/all-in-one";
import CustomersGridSection from "./sections/customers-grid";
import ProductsSection from "./sections/products-section";
import PrefooterSection from "./sections/prefooter";
import ProductsSection2 from "./sections/products-section2";
import ProductsSection3 from "./sections/products-section3";
import ProductsSection4 from "./sections/products-section4";
import ReviewsSection from "./sections/reviews";

export default function Home() {
  return (
    <div className="wrapper">

      <HomeHeroSection />

      {/* <ProductsSection4 /> */}

      <ProductsSection2 />

      <ProductsSection3 />

      {/* <ProductsSection /> */}


      {/* <AllInOne /> */}

      {/* <PlatformGridSection /> */}

      <CustomersGridSection />

      <div className="w-screen h-screen">
        <img src="https://framerusercontent.com/images/7fshAqoL1O3dFQK0x0MXpNnO8RU.webp?scale-down-to=4096&width=9504&height=6336" alt="" className="w-full h-full object-cover" />
      </div>

      {/* <WarehouseBgSection /> */}

      {/* <PlatformGridSection2 /> */}

      {/* <UseCasesSection /> */}

      {/* <ReviewsSection /> */}

      <BlogSliderSection />

      <FaqSection />

    </div>
  );
}
