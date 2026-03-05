import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Star } from "lucide-react";


export default function Home() {
  return (
    <div className="wrapper">

      <section className="h-screen bg-[#18181b] text-white pt-16">
        <div className="page-width grid grid-cols-1 lg:grid-cols-6 h-full">
          <div className="col-span-2 flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="fill-current" size={14} />
                <Star className="fill-current" size={14} />
                <Star className="fill-current" size={14} />
                <Star className="fill-current" size={14} />
                <Star className="fill-current" size={14} />

              </div>
              <p className="text-xs">4.86/5 <span className="text-muted-foreground">Google Rating</span></p>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">The All-in-One solution for auto repair shops</h1>
            <p className="text-sm lg:text-md text-muted-foregroundt lg:mb-12">Increase savings, automate busy work, and make better decisions by managing global HR, Payroll, IT, and Finance in one place.</p>
            <div className="flex gap-2">
              <Button variant="secondary" className="bg-red-700 hover:bg-red-600 text-whtie">
                Dashboard
                <img src="/media/logo_symbol_wt.svg" alt="" className="size-3" />
              </Button>
              <Button variant="ghost" className="hover:bg-background/5 hover:text-background">
                Pricing
                <ChevronRight />
              </Button>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Check size={14} />
              Free tier available. No credit card required.
            </div>
          </div>
          <div className="col-span-4 relative flex items-end">
            <div className="relative lg:absolute bottom-0 lg:right-0">
              <img src="https://images.ctfassets.net/k0itp0ir7ty4/53zTNXtkmfyj4EDjHZ9oc0/202efa01b6aa891add91b8e5844b92c4/Tablet-Hands.png" alt="" />
            </div>
          </div>
        </div>
        <img src="/media/logo_symbol_wt.svg" alt="" className="absolute top-16 right-0 w-[40vw] opacity-5" />

      </section>

      <section className="p-18">
        <div className="page-width flex flex-col items-center justify-center space-y-6">
          <h4 className="text-xl font-semibold">
            Join service managers and owners who use Automotiv to automate their workflows
          </h4>
          <div className="w-full grid grid-cols-6 gap-6">
            <span className="text-md font-bold h-16 text-center">AutoZone</span>
            <span className="text-md font-bold h-16 text-center">O'Reilly Auto Parts</span>
            <span className="text-md font-bold h-16 text-center">Advance Auto Parts</span>
            <span className="text-md font-bold h-16 text-center">NAPA Auto Parts</span>
            <span className="text-md font-bold h-16 text-center">Pep Boys</span>
            <span className="text-md font-bold h-16 text-center">Carquest Auto Parts</span>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="page-width space-y-18">
          <header className="flex flex-col space-y-1">
            <h2 className="max-w-xl text-4xl font-bold tracking-tight">
              Products that work together to help you break down silos between departments
            </h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col space-y-4 p-4 lg:p-6 border hover:border-red-600 rounded-lg transition-colors duration-300 ease-in-out">
              Card
            </div>
            <div className="flex flex-col space-y-4 p-4 lg:p-6 border hover:border-red-600 rounded-lg transition-colors duration-300 ease-in-out">
              Card
            </div>
            <div className="flex flex-col space-y-4 p-4 lg:p-6 border hover:border-red-600 rounded-lg transition-colors duration-300 ease-in-out">
              Card
            </div>
            <div className="flex flex-col space-y-4 p-4 lg:p-6 border hover:border-red-600 rounded-lg transition-colors duration-300 ease-in-out">
              Card
            </div>
            <div className="flex flex-col space-y-4 p-4 lg:p-6 border hover:border-red-600 rounded-lg transition-colors duration-300 ease-in-out">
              Card
            </div>
            <div className="flex flex-col space-y-4 p-4 lg:p-6 border hover:border-red-600 rounded-lg transition-colors duration-300 ease-in-out">
              Card
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
