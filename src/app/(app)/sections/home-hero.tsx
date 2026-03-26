import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, ChevronRight, Check, ArrowRight } from "lucide-react"

export default function HeroHomeSection() {
    return (
        <section className="h-screen bg-[#18181b] text-white pt-16">
            <div className="page-width grid grid-cols-1 lg:grid-cols-12 h-full">
                <div className="col-span-4 flex flex-col justify-center space-y-6">
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
                    <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight">The All-in-One Platform for Workshops and Fleets</h1>
                    <p className="text-sm lg:text-md text-muted-foregroundt lg:mb-12">Increase savings, automate busy work, and make better decisions by managing global HR, Payroll, IT, and Finance in one place.</p>
                    <div className="flex items-center gap-2 p-2 pl-4 rounded-xl border border-background/20 focus-within:border-background/50">
                        <input type="text" placeholder="Email address" className="flex-1 text-sm border-0 focus:ring-0 outline-0" />
                        <Link href="#" className="button-brand-red px-4">Get early access <ChevronRight className="size-3 -mr-2" /></Link>
                    </div>
                    {/* <div className="flex gap-2">
                        <Link href="#" className="button-brand-red">Get to dashboard <ChevronRight className="size-3 -mr-2" /></Link>
                        <Link href="/pricing" className="button-brand">Pricing</Link>
                    </div> */}
                    <div className="flex flex-col text-[11px] text-muted-foreground">
                        <span>Get notified when we launch.</span>
                        <span>We care about your data in our <Link href="#" className="underline">privacy policy</Link>.</span>
                        {/* Free tier available. No credit card required. */}
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-[11px] text-muted-foreground">Trusted by</span>
                        <div className="marquee-wrapper relative z-10">
                            <div className="marquee absolute left-0 right-0">
                                <div className="marquee-content flex items-center gap-10 overflow-hidden invert whitespace-nowrap">
                                    <img src="https://framerusercontent.com/images/r460TShC3vPmDSlt33D6qGyfw.svg?width=151&height=37" alt="" className="w-24" />
                                    <img src="https://framerusercontent.com/images/HiGAuMpQ2cZIqZAoeisAZ0Wf0k.svg?width=99&height=29" alt="" className="w-24" />
                                    <img src="https://framerusercontent.com/images/Qwup2aFsHBvFPna2irxUJcwMo.svg?width=154&height=37" alt="" className="w-24" />
                                    <img src="https://framerusercontent.com/images/1l9i5n4v2OoLhJTtl2wevJbn2DM.svg?width=100&height=25" alt="" className="w-24" />
                                    <img src="https://framerusercontent.com/images/1l9i5n4v2OoLhJTtl2wevJbn2DM.svg?width=100&height=25" alt="" className="w-24" />
                                    <img src="https://framerusercontent.com/images/vNWaR5nx51nsA2XoOA1k7tzVS4.svg?width=157&height=37" alt="" className="w-24" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-8 relative flex items-end">
                    <div className="relative lg:absolute bottom-0 lg:right-0 z-5">
                        <img src="https://images.ctfassets.net/k0itp0ir7ty4/53zTNXtkmfyj4EDjHZ9oc0/202efa01b6aa891add91b8e5844b92c4/Tablet-Hands.png" alt="" />
                    </div>
                </div>
            </div>
            <img src="/media/logo_symbol_wt.svg" alt="" className="absolute bottom-0 right-0 w-[90vw] lg:w-[40vw] opacity-5" />
        </section>
    )
}