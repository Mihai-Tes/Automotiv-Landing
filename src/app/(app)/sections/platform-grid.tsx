import { ChevronRight, LayoutDashboard } from "lucide-react";
import Image from "next/image";

export default function PlatformGridSection() {
    return (
        <section className="py-30 relative">
            <div className="page-width z-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-3 max-sm:gap-6">
                    <h2 className="text-5xl font-semibold tracking-tight mb-15">Platform functions goes right here</h2>
                    <div className="lg:col-start-3 lg:col-end-4 flex flex-col gap-6 aspect-square p-6 bg-accent group">
                        <div className="size-12 grid place-items-center mb-auto bg-foreground group-hover:bg-brand-red text-white transition-all">
                            <LayoutDashboard />
                        </div>
                        <h3 className="text-4xl font-semibold tracking-tight">Inventory manager</h3>
                        <p className="text-muted-foreground">Secure storage with real-time stock visibility.</p>
                    </div>
                    <div className="lg:col-start-2 lg:col-end-3 flex flex-col gap-6 aspect-square p-6 bg-accent group">
                        <div className="size-12 grid place-items-center mb-auto bg-foreground group-hover:bg-brand-red text-white transition-all">
                            <LayoutDashboard />
                        </div>
                        <h3 className="text-4xl font-semibold tracking-tight">Inventory manager</h3>
                        <p className="text-muted-foreground">Secure storage with real-time stock visibility.</p>
                    </div>
                    <div className="lg:col-start-1 lg:col-end-2 flex flex-col gap-6 aspect-square p-6 bg-accent group">
                        <div className="size-12 grid place-items-center mb-auto bg-foreground group-hover:bg-brand-red text-white transition-all">
                            <LayoutDashboard />
                        </div>
                        <h3 className="text-4xl font-semibold tracking-tight">Inventory manager</h3>
                        <p className="text-muted-foreground">Secure storage with real-time stock visibility.</p>
                    </div>
                    <div className="lg:col-start-3 lg:col-end-4 flex flex-col justify-end gap-6 aspect-square p-6 bg-brand-red group relative overflow-hidden">
                        <div className="absolute inset-0">
                            <img src="https://demo.7iquid.com/apexus/wp-content/uploads/2025/12/img26-home4.webp" alt="" className="group-hover:scale-105 object-cover w-full h-full z-0 transition-all duration-300" />
                        </div>
                        <div className="w-full h-12 flex items-center justify-between bg-brand-red text-white text-xs px-6 hover:pr-4 z-10 transition-all duration-300">
                            Go to dashboard<ChevronRight className="size-5" />
                        </div>
                    </div>
                </div>
            </div>
            <img src="https://demo.7iquid.com/apexus/wp-content/uploads/2025/12/img27-home4.webp" alt="" className="absolute bottom-0 left-0 w-full" />
        </section>
    );
}