
"use client"

import { cn } from "@/lib/utils";
import DesktopNav from "./desktop-nav"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navData } from "./data-nav"
import Image from "next/image";

import { Button } from "@/components/ui/button"
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
        <header className={cn("fixed top-0 left-0 right-0 z-50 text-white bg-[#242429]/0 transition-all duration-300 ease-in-out", (scroll || subNavOpen) && "bg-[#242429]/90 backdrop-blur-md shadow-md/10")}>
            <div className="page-width h-14 md:h-16 flex items-center gap-12 z-10 relative">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                    <Image width={24} height={24} src="/media/logo_symbol_wt.svg" alt="" className="size-5 lg:size-6" />
                    automotiv
                </Link>
                <nav className="flex-1 max-md:hidden">
                    <DesktopNav />
                </nav>

                <div className="max-md:hidden flex items-center gap-4 ml-auto">
                    <Button variant="ghost">Login</Button>
                    <Button variant="brand">Dashboard</Button>
                </div>
                <Button variant="ghost" className="md:hidden ml-auto">
                    <Menu />
                </Button>
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