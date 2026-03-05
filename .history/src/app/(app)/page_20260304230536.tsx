import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";


export default function Home() {
  return (
    <div className="wrapper">
      <section className="h-screen bg-neutral-900 text-white pt-16">
        <div className="page-width grid sm:grid-cols-1 lg:grid-cols-6 h-full">
          <div className="col-span-2 flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="fill-current" size={14} />
                <Star className="fill-current" size={14} />
                <Star className="fill-current" size={14} />
                <Star className="fill-current" size={14} />
                <Star className="fill-current" size={14} />

              </div>
              <span className="text-xs">4.86/5 Google Rating</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tigh">The All-in-One solution for auto repair shops</h1>
            <p className="text-xs lg:text-md text-muted-foregroundt mb-12">Increase savings, automate busy work, and make better decisions by managing global HR, Payroll, IT, and Finance in one place.</p>
            <div className="flex gap-2">
              <Button variant="secondary">Dashboard</Button>
              <Button variant="ghost">Pricing</Button>
            </div>
          </div>
          <div className="col-span-4 relative">
            <div className="lg:absolute lg:bottom-0 lg:right-0">
              <img src="https://images.ctfassets.net/k0itp0ir7ty4/53zTNXtkmfyj4EDjHZ9oc0/202efa01b6aa891add91b8e5844b92c4/Tablet-Hands.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
