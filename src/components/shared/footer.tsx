import { navData } from "./data-nav"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-[#242429] text-white pt-30 pb-15">
            <div className="page-width">
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
        </footer>
    );
}