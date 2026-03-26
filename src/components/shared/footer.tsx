import { navData } from "./data-nav"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function Footer() {
    return (
        <footer className="dark text-foreground min-h-screen relative flex flex-col justify-between">
            <div className="page-width py-30 z-20">
                <div className="max-w-xl space-y-2">
                    <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight">Time is money,<br />save both.</h2>
                    <p className="mb-8">Streamline your operations, boost efficiency, and drive profitability with Automotiv.</p>
                    <div className="flex items-center gap-2 p-2 pl-4 rounded-xl border border-foreground/20 bg-brand-dark-1/80 backdrop-blur-sm focus-within:border-foreground/50">
                        <input type="text" placeholder="Email address" className="flex-1 text-sm border-0 focus:ring-0 outline-0" />
                        <Link href="#" className="button-brand-red px-4">Join the waitlist <ChevronRight className="size-3 -mr-2" /></Link>
                    </div>
                </div>
            </div>
            <div className="bg-linear-to-b from-brand-dark-1 from-[64px] to-transparent z-10 absolute inset-0" />
            <Image src="/media/pictures/modern-warehouse.jpg" alt="Footer Background" fill className="object-cover" />
            <div className="pb-2 px-2 z-20">
                <div className="bg-linear-to-b from-brand-dark-1/80 to-brand-dark-1 backdrop-blur-xl rounded-4xl border shadow-md/10">
                    <div className="page-width py-20">
                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-12">
                            <div className="col-span-2 flex flex-col space-y-2">
                                <h1 className="text-md font-bold tracking-tight">automotiv</h1>
                                <p className="text-sm text-muted-foreground">The All-in-One Platform for Automotive Service Businesses</p>
                            </div>
                            {navData.filter(p => p.title === "Platform").map(parent => (
                                <div key={parent.title} className="space-y-2">
                                    <h2 className="text-md font-semibold">{parent.title}</h2>
                                    <ul className="space-y-2">
                                        {navData.filter(item => item.childOf === parent.title).map(item => (
                                            <li key={item.title}>
                                                <Link href={item.href} className="text-sm text-muted-foreground hover:text-white transition-colors duration-300 ease-in-out">
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            {navData.filter(p => p.title === "Solutions").map(parent => (
                                <div key={parent.title} className="space-y-2">
                                    <h2 className="text-md font-semibold">{parent.title}</h2>
                                    <ul className="space-y-2">
                                        {navData.filter(item => item.childOf === parent.title).map(item => (
                                            <li key={item.title}>
                                                <Link href={item.href} className="text-sm text-muted-foreground hover:text-white transition-colors duration-300 ease-in-out">
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            {navData.filter(p => p.title === "Resources").map(parent => (
                                <div key={parent.title} className="space-y-2">
                                    <h2 className="text-md font-semibold">{parent.title}</h2>
                                    <ul className="space-y-2">
                                        {navData.filter(item => item.childOf === parent.title).map(item => (
                                            <li key={item.title}>
                                                <Link href={item.href} className="text-sm text-muted-foreground hover:text-white transition-colors duration-300 ease-in-out">
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            <div className="space-y-2">
                                <h2 className="text-md font-semibold">Legal</h2>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href={"/legal/privacy-policy"} className="text-sm text-muted-foreground hover:text-white transition-colors duration-300 ease-in-out">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"/legal/terms-of-service"} className="text-sm text-muted-foreground hover:text-white transition-colors duration-300 ease-in-out">
                                            Terms of Service
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Separator className="bg-white/10" />
                    <div className="page-width py-6">
                        <div className="text-xs text-muted-foreground">© 2026 Automotiv. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}