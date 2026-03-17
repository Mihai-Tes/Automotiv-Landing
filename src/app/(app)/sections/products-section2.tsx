import { ChevronRight, LayoutDashboard, Calendar1, FileText, Bell, Workflow, Sparkles } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function ProductsSection2() {
    return (
        <section className="py-30">
            <div className="page-width grid grid-cols-1 lg:grid-cols-3 gap-y-10 items-start">
                <header className="lg:sticky lg:top-46 flex flex-col justify-between pr-10 lg:h-[calc(100vh-304px)]">
                    <h2 className="text-4xl lg:text-5xl font-medium tracking-tight">Built to handle<br /> the complexity</h2>
                    <div className="max-lg:hidden space-y-4">
                        <Link href="#workshop-manager" className="flex items-center gap-2 font-semibold"><LayoutDashboard className="size-4" />Workshop manager</Link>
                        <Separator className="opacity-50" />
                        <Link href="#appointments" className="flex items-center gap-2 text-muted-foreground hover:text-foreground"><Calendar1 className="size-4" />Appointments</Link>
                        <Separator className="opacity-50" />
                        <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground"><FileText className="size-4" />Inventory</div>
                        <Separator className="opacity-50" />
                        <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground"><Bell className="size-4" />Invoicing</div>
                        <Separator className="opacity-50" />
                        <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground"><Workflow className="size-4" />Payments</div>
                        <Separator className="opacity-50" />
                        <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground"><Sparkles className="size-4" />Integrations</div>
                    </div>
                </header>

                <div className="col-span-2 space-y-6 lg:space-y-10">

                    <div id="workshop-manager" className="scroll-mt-46 rounded-xl lg:bg-white">
                        <div className="lg:p-10 flex items-center gap-6">
                            <div className="lg:hidden size-20 shrink-0 grid place-items-center bg-white rounded-lg">
                                <LayoutDashboard className="size-6" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="lg:text-2xl font-semibold">Workshop manager</h3>
                                <p className="text-xs lg:text-sm text-muted-foreground lg:mb-4">Manage work orders, track progress, and keep customers informed.</p>
                                <Link href="/dashboard" className="max-lg:hidden group text-sm font-medium flex items-center gap-1 leading-none">Go to dashboard <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" /></Link>
                            </div>
                            <ChevronRight className="size-6 ml-auto lg:hidden" />
                        </div>
                        <div className="aspect-square relative max-lg:hidden">
                            <img src="https://ramp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct-suite-intelligence.883c29bd.webp&w=1920&q=75&dpl=dpl_6hH2Ty16WJcavLRXHwfHSaB3tv1X" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div id="appointments" className="scroll-mt-46 rounded-xl lg:bg-white">
                        <div className="lg:p-10 flex items-center gap-6">
                            <div className="lg:hidden size-20 shrink-0 grid place-items-center bg-white rounded-lg">
                                <LayoutDashboard className="size-6" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="lg:text-2xl font-semibold">Appointments</h3>
                                <p className="text-xs lg:text-sm text-muted-foreground lg:mb-4">Manage bookings, send reminders, and reduce no-shows.</p>
                                <Link href="/dashboard" className="max-lg:hidden group text-sm font-medium flex items-center gap-1 leading-none">Go to dashboard <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" /></Link>
                            </div>
                            <ChevronRight className="size-6 ml-auto lg:hidden" />
                        </div>
                        <div className="aspect-square relative max-lg:hidden">
                            <img src="https://ramp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct-suite-accounting-automation.670180b8.webp&w=1920&q=75&dpl=dpl_6hH2Ty16WJcavLRXHwfHSaB3tv1X" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="rounded-xl lg:bg-white">
                        <div className="lg:p-10 flex items-center gap-6">
                            <div className="lg:hidden size-20 shrink-0 grid place-items-center bg-white rounded-lg">
                                <LayoutDashboard className="size-6" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="lg:text-2xl font-semibold">Inventory</h3>
                                <p className="text-xs lg:text-sm text-muted-foreground lg:mb-4">Track parts, manage stock levels, and automate reordering.</p>
                                <Link href="/dashboard" className="max-lg:hidden group text-sm font-medium flex items-center gap-1 leading-none">Go to dashboard <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" /></Link>
                            </div>
                            <ChevronRight className="size-6 ml-auto lg:hidden" />
                        </div>
                        <div className="aspect-square relative max-lg:hidden">
                            <img src="https://ramp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct-suite-accounting-automation.670180b8.webp&w=1920&q=75&dpl=dpl_6hH2Ty16WJcavLRXHwfHSaB3tv1X" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="rounded-xl lg:bg-white">
                        <div className="lg:p-10 flex items-center gap-6">
                            <div className="lg:hidden size-20 shrink-0 grid place-items-center bg-white rounded-lg">
                                <LayoutDashboard className="size-6" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="lg:text-2xl font-semibold">Invoicing</h3>
                                <p className="text-xs lg:text-sm text-muted-foreground lg:mb-4">Send professional invoices and get paid faster with integrated payment options.</p>
                                <Link href="/dashboard" className="max-lg:hidden group text-sm font-medium flex items-center gap-1 leading-none">Go to dashboard <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" /></Link>
                            </div>
                            <ChevronRight className="size-6 ml-auto lg:hidden" />
                        </div>
                        <div className="aspect-square relative max-lg:hidden">
                            <img src="https://ramp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct-suite-accounting-automation.670180b8.webp&w=1920&q=75&dpl=dpl_6hH2Ty16WJcavLRXHwfHSaB3tv1X" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="rounded-xl lg:bg-white">
                        <div className="lg:p-10 flex items-center gap-6">
                            <div className="lg:hidden size-20 shrink-0 grid place-items-center bg-white rounded-lg">
                                <LayoutDashboard className="size-6" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="lg:text-2xl font-semibold">Notifications</h3>
                                <p className="text-xs lg:text-sm text-muted-foreground lg:mb-4">Keep customers up to date with automated SMS and email reminders.</p>
                                <Link href="/dashboard" className="max-lg:hidden group text-sm font-medium flex items-center gap-1 leading-none">Go to dashboard <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" /></Link>
                            </div>
                            <ChevronRight className="size-6 ml-auto lg:hidden" />
                        </div>
                        <div className="aspect-square relative max-lg:hidden">
                            <img src="https://ramp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct-suite-accounting-automation.670180b8.webp&w=1920&q=75&dpl=dpl_6hH2Ty16WJcavLRXHwfHSaB3tv1X" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}