import { Button } from "@/components/ui/button"
import { Star, ChevronRight, Check } from "lucide-react"

export default function HeroHomeSection() {
    return (
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
                        <Button variant="brand">
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
                    <div className="relative lg:absolute bottom-0 lg:right-0 z-5">
                        <img src="https://images.ctfassets.net/k0itp0ir7ty4/53zTNXtkmfyj4EDjHZ9oc0/202efa01b6aa891add91b8e5844b92c4/Tablet-Hands.png" alt="" />
                    </div>
                </div>
            </div>
            <img src="/media/logo_symbol_wt.svg" alt="" className="absolute bottom-0 right-0 w-[90vw] lg:w-[40vw] opacity-5" />
        </section>
    )
}