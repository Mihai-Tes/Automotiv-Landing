import { ArrowUpRight } from "lucide-react";

export default function ProductsSection3() {
    return (
        <section className="py-30 space-y-10">
            <div className="page-width space-y-20">
                <header className="max-w-xl mx-auto text-center space-y-10">
                    <h2 className="text-4xl lg:text-5xl font-medium tracking-tight">Intelligence at the core of every charge</h2>
                    <p className=" text-muted-foreground">Harness the power of AI-driven energy management to optimize your charging operations and reduce costs.</p>
                </header>
            </div>
            <div className="page-width max-sm:px-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6">

                    <div className="group aspect-square rounded-xl relative overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <img src="https://cdn.prod.website-files.com/68187b38d432b3fdc3704ead/6838657b0eb8858a7ba703c6_harmony-os.webp" alt="" className="h-full object-cover group-hover:scale-105 transition-all duration-500" />
                        </div>
                        <div className="flex items-center justify-between gap-8 p-6 lg:p-8 bg-brand-dark-2/80 backdrop-blur-xl absolute bottom-2 left-2 right-2 rounded-lg">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-background">Dynamic Load Balancing</h3>
                                <p className="text-xs lg:text-sm text-background/60">Automatically distribute power across your EV fleet to optimize charging efficiency and prevent grid overload.</p>
                            </div>
                            <div className="size-12 shrink-0 rounded-lg flex items-center justify-center bg-white/20 group-hover:bg-white/30 transition-all duration-300">
                                <ArrowUpRight className="size-4 text-background" />
                            </div>
                        </div>
                    </div>

                    <div className="group aspect-square rounded-xl relative overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <img src="https://cdn.prod.website-files.com/68187b38d432b3fdc3704ead/6838657b1416c7f8075cbb52_harmony-net.webp" alt="" className="h-full object-cover group-hover:scale-105 transition-all duration-500" />
                        </div>
                        <div className="flex items-center justify-between gap-8 p-6 lg:p-8 bg-brand-dark-2/80 backdrop-blur-xl absolute bottom-2 left-2 right-2 rounded-lg">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-background">Dynamic Load Balancing</h3>
                                <p className="text-xs lg:text-sm text-background/60">Automatically distribute power across your EV fleet to optimize charging efficiency and prevent grid overload.</p>
                            </div>
                            <div className="size-12 shrink-0 rounded-lg flex items-center justify-center bg-white/20 group-hover:bg-white/30 transition-all duration-300">
                                <ArrowUpRight className="size-4 text-background" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}