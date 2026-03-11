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


export default function Home() {
  return (
    <div className="wrapper">

      <HomeHeroSection />

      <ProductsSection />

      {/* <AllInOne /> */}




      {/* <PlatformGridSection /> */}

      <CustomersGridSection />

      <WarehouseBgSection />

      <PlatformGridSection2 />

      <UseCasesSection />

      <BlogSliderSection />

      <FaqSection />

    </div>
  );
}
