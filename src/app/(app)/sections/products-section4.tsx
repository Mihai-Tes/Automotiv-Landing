import { Warehouse } from "lucide-react";

export default function ProductsSection4() {
    return (
        <section className=" py-30 space-y-10">
            <div className="page-width">
                <header>
                    <h2 className="text-4xl lg:text-5xl font-medium tracking-tight">Built to handle<br /> the complexity</h2>
                </header>
            </div>
            <div className="page-width max-sm:px-3">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                    <div className="bg-white flex-1 rounded-3xl p-6">
                        <Warehouse />
                        <div className="text-foreground mt-20 text-lg font-medium">Built for flow</div>
                        <div className="text-muted-foreground max-w-[80%] text-sm">Fast, modern mobile and desktop apps that work offline</div>
                    </div>
                    <div className="bg-white flex-1 rounded-3xl p-6">
                        <Warehouse />
                        <div className="text-foreground mt-20 text-lg font-medium">Built for flow</div>
                        <div className="text-muted-foreground max-w-[80%] text-sm">Fast, modern mobile and desktop apps that work offline</div>
                    </div>
                    <div className="bg-white flex-1 rounded-3xl p-6">
                        <Warehouse />
                        <div className="text-foreground mt-20 text-lg font-medium">Built for flow</div>
                        <div className="text-muted-foreground max-w-[80%] text-sm">Fast, modern mobile and desktop apps that work offline</div>
                    </div>
                    <div className="bg-white flex-1 rounded-3xl p-6">
                        <Warehouse />
                        <div className="text-foreground mt-20 text-lg font-medium">Built for flow</div>
                        <div className="text-muted-foreground max-w-[80%] text-sm">Fast, modern mobile and desktop apps that work offline</div>
                    </div>
                    <div className="bg-white flex-1 rounded-3xl p-6">
                        <Warehouse />
                        <div className="text-foreground mt-20 text-lg font-medium">Built for flow</div>
                        <div className="text-muted-foreground max-w-[80%] text-sm">Fast, modern mobile and desktop apps that work offline</div>
                    </div>
                </div>
            </div>
        </section>
    )
}