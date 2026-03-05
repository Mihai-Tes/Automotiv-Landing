
"use client"

import { cn } from "@/lib/utils";
import DesktopNav from "./desktop-nav"
import { useState, useEffect } from "react"


export default function Header() {

    // Scroll
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
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
        <header className={cn("h-16 fixed top-0 left-0 right-0 z-50 text-white transition-all", scroll && "text-foreground bg-white/90")}>
            <div className="page-width h-full flex items-center gap-12">
                <div className="font-bold text-xl tracking-tighter">AUTOMOTIV</div>
                <nav className="flex-1">
                    <DesktopNav />
                </nav>

                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium text-zinc-600 hover:text-black">Login</button>
                    <button className="bg-black text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-zinc-800 transition-all active:scale-95">
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    );
}