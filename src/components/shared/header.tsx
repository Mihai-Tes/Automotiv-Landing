
"use client"

import { cn } from "@/lib/utils";
import DesktopNav from "./desktop-nav"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navData } from "./data-nav"
import Image from "next/image";

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ChevronDown, Menu } from "lucide-react";


export default function Header() {
    const pathname = usePathname();

    // Find if we are currently under a parent section that has children
    const activeParentItem = navData.find(item =>
        !item.childOf &&
        item.href !== "/" &&
        pathname.startsWith(item.href) &&
        navData.some(child => child.childOf === item.title)
    );

    const subNavItems = activeParentItem
        ? navData.filter(item => item.childOf === activeParentItem.title)
        : [];

    // Mobile sub-nav dropdown
    const [subNavOpen, setSubNavOpen] = useState(false);

    // Sliding indicator state
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
    const ulRef = useRef<HTMLUListElement>(null);

    // Set indicator to active item on mount / path change
    useEffect(() => {
        const activeIndex = subNavItems.findIndex(item => item.href === pathname);
        if (activeIndex >= 0 && itemRefs.current[activeIndex]) {
            const li = itemRefs.current[activeIndex]!;
            setIndicatorStyle({
                left: li.offsetLeft,
                width: li.offsetWidth,
                opacity: 1,
            });
        } else {
            setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
        }
    }, [pathname, activeParentItem]);

    const handleMouseEnter = (index: number) => {
        const li = itemRefs.current[index];
        if (li) {
            setIndicatorStyle({
                left: li.offsetLeft,
                width: li.offsetWidth,
                opacity: 1,
            });
        }
    };

    const handleMouseLeave = () => {
        // Snap back to active item
        const activeIndex = subNavItems.findIndex(item => item.href === pathname);
        if (activeIndex >= 0 && itemRefs.current[activeIndex]) {
            const li = itemRefs.current[activeIndex]!;
            setIndicatorStyle({
                left: li.offsetLeft,
                width: li.offsetWidth,
                opacity: 1,
            });
        } else {
            setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
        }
    };

    // Scroll
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={cn("fixed top-0 left-0 right-0 z-50 text-white bg-[#18181b]/0 transition-all duration-300 ease-in-out", (scroll || subNavOpen) && "bg-[#18181b]/90 backdrop-blur-md")}>
            <div className="page-width max-sm:px-5 h-14 md:h-16 flex items-center z-10 relative">
                <Link href="/" className="group flex items-center gap-2 font-bold text-xl tracking-tighter" aria-label="Automotiv Home">
                    <svg width="29" height="24" viewBox="0 0 7.57 6.35" xmlns="http://www.w3.org/2000/svg" className="size-5">
                        <path className="group-hover:fill-(--brand-red) transition-all active:scale-90" d="m1.5 0c-.834.00071-1.5098.67655-1.5104 1.5105v3.3291c7e-4.83397.6764 1.5097 1.5104 1.5104h1.5782c.3087 0 .6018-.13435.803-.36861l2.2452-2.6154v2.984h1.4321v-4.5601h5e-4c-2e-4-.19492-.1553-.35214-.3491-.35712h-.9612c-.01 0-.017-.00041-.026 0-.1814-.0142-.3222-.17043-.3224-.35662h5e-4v-.71638c-2e-4-.19808-.16-.35764-.3582-.35764zm5.6799 0c-.065 2e-4-.1271.0152-.1864.0488-.06.0325-.1065.0783-.1408.13913-.034.061-.051.12419-.051.19015 0 .0661.017.12907.051.18903.034.06.079.10681.1392.14025.06.0325.1231.0498.189.0498.066 0 .1284-.0163.188-.0498.06-.0345.1065-.0803.1397-.14025.034-.06.051-.12297.051-.18903 0-.0661-.017-.12947-.052-.19015-.034-.061-.08-.10711-.1402-.13913-.06-.0335-.1217-.0488-.1864-.0488zm0 .0752c.052 0 .1019.0132.1497.0386.048.0254.085.064.1129.1119.027.0488.042.0996.042.15326 0 .0528-.013.10386-.041.15183-.027.0478-.064.0854-.1124.11189-.048.0274-.099.0417-.1512.0417-.053 0-.1033-.0142-.1514-.0417-.048-.0274-.086-.064-.1129-.11189-.026-.0478-.04-.0986-.04-.15183 0-.0529.013-.10448.041-.15326.027-.0488.065-.0864.1129-.1119.048-.0264.097-.0386.1497-.0386zm-.165.0925v.42176h.077v-.15966h.1006c.022 0 .038 2e-4.047.0122.01.0102.015.0213.016.0376l.01.11088h.078l-.011-.12287c0-.0254-.01-.0437-.025-.0559-.01-.0102-.017-.0122-.03-.0152v-.00051h.0022l5e-4-.00051 5e-4-.00061h5e-4v-.00051h.0011v-.00051l5e-4-5e-4s0-.0102.01-.0102v-.00051h.001l5e-4-5e-4h.0011l5e-4-.00051h.0011l5e-4-.00051h6e-4c.014-.0102.025-.0203.034-.0366.01-.0152.012-.0325.012-.0518 0-.0264-.01-.0478-.019-.0671-.012-.0193-.029-.0335-.052-.0437-.022-.0102-.049-.0153-.078-.0153zm.077.065h.09c.025 0 .044.0102.057.0173.013.0112.02.0274.02.0478 0 .0203-.01.0356-.02.0467-.013.0112-.032.0173-.055.0173h-.094zm-5.6016 1.1974c0-.00031.01 0 .01 0v.00051h4.4016l-2.9946 3.4872h-1.407c-.044 0-.079-.0356-.078-.0793v-3.3302c-2e-4-.0417.031-.0742.071-.0783z" fill="currentColor" />
                    </svg>
                </Link>
                <Separator orientation="vertical" className="max-h-5 ml-6 mr-2 opacity-50" />
                <nav className="flex-1 max-md:hidden">
                    <DesktopNav />
                </nav>

                <div className="max-md:hidden flex items-center gap-4 ml-auto">
                    <Button variant="ghost">Login</Button>
                    <Button variant="brand">Dashboard</Button>
                </div>
                <div className="sm:hidden absolute top-0 right-0 bottom-0 h-full aspect-square grid place-items-center bg-brand-red">
                    <Menu className="size-4" />
                </div>
            </div>

            {activeParentItem && (
                <div className={cn(
                    "page-width z-10 relative overflow-hidden transition-all duration-300 ease-in-out",
                    // Desktop: fixed single-row height, border on inner div
                    "md:h-12",
                    // Mobile: collapsed = just the title row, expanded = title row + links
                    subNavOpen ? "h-auto border-b border-accent/10" : "h-10 border-b border-accent/10 md:border-none"
                )}>
                    {/* Title row */}
                    <div className="h-10 md:h-12 w-full flex items-center md:border-b md:border-accent/10 relative">
                        <h2 className="text-sm font-semibold mr-auto">{activeParentItem.title}</h2>

                        {/* Desktop: sliding indicator list */}
                        <ul
                            ref={ulRef}
                            className="relative hidden md:flex items-center h-full text-xs"
                            onMouseLeave={handleMouseLeave}
                        >
                            {subNavItems.map((item, index) => (
                                <li
                                    key={item.title}
                                    ref={el => { itemRefs.current[index] = el; }}
                                    className="h-full"
                                    onMouseEnter={() => handleMouseEnter(index)}
                                >
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "flex items-center h-full px-4 transition-colors duration-200",
                                            pathname === item.href ? "text-white" : "text-white/60 hover:text-white"
                                        )}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}

                            {/* Sliding indicator */}
                            <div
                                className="absolute bottom-0 h-[2px] bg-background rounded-full transition-all duration-200 ease-out pointer-events-none"
                                style={{
                                    left: indicatorStyle.left,
                                    width: indicatorStyle.width,
                                    opacity: indicatorStyle.opacity,
                                }}
                            />
                        </ul>

                        {/* Mobile toggle button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setSubNavOpen(prev => !prev)}
                        >
                            <ChevronDown className={cn("transition-transform duration-200", subNavOpen && "rotate-180")} />
                        </Button>
                    </div>

                    {/* Mobile: vertical link list, shown when open */}
                    <ul className="flex md:hidden flex-col pb-2">
                        {subNavItems.map((item) => (
                            <li key={item.title}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex items-center py-2 px-1 text-sm transition-colors duration-200",
                                        pathname === item.href ? "text-white font-medium" : "text-white/60 hover:text-white"
                                    )}
                                    onClick={() => setSubNavOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </header>
    );
}