"use client"

import { ChevronRight, LayoutDashboard, Calendar1, FileText, Bell, Workflow, Sparkles } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
    { id: "workshop-manager", title: "Workshop manager", icon: LayoutDashboard },
    { id: "appointments", title: "Appointments", icon: Calendar1 },
    { id: "inventory", title: "Inventory", icon: FileText },
    { id: "invoicing", title: "Invoicing", icon: Bell },
    { id: "notifications", title: "Notifications", icon: Workflow },
    { id: "integrations", title: "Integrations", icon: Sparkles },
];

export default function ProductsSection2() {
    const [activeSection, setActiveSection] = useState<string>("workshop-manager");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Trigger when the element crosses the middle-ish of the viewport
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                // Root margin targeting the "top center" of the viewport
                rootMargin: "-20% 0px -60% 0px",
                threshold: 0,
            }
        );

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-30">
            <div className="page-width grid grid-cols-1 lg:grid-cols-3 gap-y-10 items-start">
                <header className="lg:sticky lg:top-46 flex flex-col justify-between pr-10 lg:h-[calc(100vh-304px)]">
                    <h2 className="text-4xl lg:text-5xl font-medium tracking-tight">Built to handle<br /> the complexity</h2>
                    <div className="max-lg:hidden flex flex-col pt-10">
                        {sections.map((section, index) => {
                            const Icon = section.icon;
                            const isActive = activeSection === section.id;
                            return (
                                <div key={section.id} className="flex flex-col">
                                    <Link
                                        href={`#${section.id}`}
                                        className={cn(
                                            "flex items-center gap-2 text-sm transition-colors duration-300",
                                            isActive
                                                ? "font-semibold text-foreground"
                                                : "text-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        <Icon className="size-4" />
                                        {section.title}
                                    </Link>
                                    {index < sections.length - 1 && <Separator className="opacity-50 my-4" />}
                                </div>
                            );
                        })}
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

                    <div id="inventory" className="scroll-mt-46 rounded-xl lg:bg-white">
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

                    <div id="invoicing" className="scroll-mt-46 rounded-xl lg:bg-white">
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

                    <div id="notifications" className="scroll-mt-46 rounded-xl lg:bg-white">
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

                    <div id="integrations" className="scroll-mt-46 rounded-xl lg:bg-white">
                        <div className="lg:p-10 flex items-center gap-6">
                            <div className="lg:hidden size-20 shrink-0 grid place-items-center bg-white rounded-lg">
                                <LayoutDashboard className="size-6" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="lg:text-2xl font-semibold">Integrations</h3>
                                <p className="text-xs lg:text-sm text-muted-foreground lg:mb-4">Connect seamlessly with your favorite tools and platforms.</p>
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