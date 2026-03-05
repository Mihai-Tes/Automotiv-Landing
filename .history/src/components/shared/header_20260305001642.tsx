
"use client"

import { cn } from "@/lib/utils";
import DesktopNav from "./desktop-nav"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react";


export default function Header() {

    // Scroll
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="h-14 md:h-16 fixed top-0 left-0 right-0 z-50 text-white">
            <div className="page-width h-full flex items-center gap-12 z-10 relative">
                <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                    <img src="/media/logo_symbol_wt.svg" alt="" className="size-6" />
                    automotiv
                </div>
                <nav className="flex-1 max-md:hidden">
                    <DesktopNav />
                </nav>

                <div className="max-md:hidden flex items-center gap-4 ml-auto">
                    <Button variant="ghost">Login</Button>
                    <Button variant="secondary" className="bg-red-700 hover:bg-red-600 text-whtie">
                        Get Started
                    </Button>
                </div>
                <Button variant="ghost" className="md:hidden ml-auto">
                    <Menu />
                </Button>
            </div>
            <div className={cn("absolute left-0 right-0 top-0 h-0 bg-[#242429]/90 backdrop-blur-md opacity-0 transition-all duration-300 ease-in-out", scroll && "h-full opacity-100 shadow-lg/10")}></div>
        </header>
    );
}