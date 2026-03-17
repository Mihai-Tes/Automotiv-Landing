import Link from "next/link"
import { LayoutDashboard, Check, ChevronRight, Calendar1, FileText, Bell, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function PlatformGridSection2() {
    return (
        <section className="py-30">
            <div className="page-width space-y-20">
                <header className="flex flex-col space-y-1">
                    <h2 className="max-w-xl text-4xl font-bold tracking-tight">
                        Products that work together to help you <span className="text-brand-red">break down silos</span> between departments
                    </h2>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {/* Cards */}

                    <Link href="/platform/dashboard/" className="group flex flex-col space-y-4 p-6 lg:p-8 bg-white rounded-lg transition-colors duration-300 ease-in-out">
                        <div className="flex items-center gap-2">
                            <LayoutDashboard className="text-brand-red" />
                            <h3 className="text-lg font-semibold tracking-tight">Dashboard</h3>
                        </div>
                        <Separator decorative />
                        <ul className="space-y-2">
                            <li className="flex gap-2 text-sm text-muted-foreground">
                                <Check size={14} className="text-brand-red h-5" />
                                Manage your shop&apos;s operations in one place.
                            </li>
                            <li className="flex gap-2 text-sm text-muted-foreground">
                                <Check size={14} className="text-brand-red h-5" />
                                Track your income and expenses.
                            </li>
                            <li className="flex gap-2 text-sm text-muted-foreground">
                                <Check size={14} className="text-brand-red h-5" />
                                Manage your inventory.
                            </li>
                        </ul>
                        <Button variant="link" className="w-full justify-start mt-12">
                            Learn more
                            <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
                        </Button>
                    </Link>

                    <Link href="/platform/appointments/" className="group flex flex-col space-y-4 p-6 lg:p-8 bg-white rounded-lg transition-colors duration-300 ease-in-out">
                        <div className="flex items-center gap-2">
                            <Calendar1 className="text-brand-red" />
                            <h3 className="text-lg font-semibold tracking-tight">Appointments</h3>
                        </div>
                        <Separator decorative />
                        <ul className="space-y-2">
                            <li className="flex gap-2 text-sm text-muted-foreground">
                                <Check size={14} className="text-brand-red h-5" />
                                Seamless scheduling
                            </li>
                            <li className="flex gap-2 text-sm text-muted-foreground">
                                <Check size={14} className="text-brand-red h-5" />
                                Track your income and expenses.
                            </li>
                            <li className="flex gap-2 text-sm text-muted-foreground">
                                <Check size={14} className="text-brand-red h-5" />
                                Manage your inventory.
                            </li>
                        </ul>
                        <Button variant="link" className="w-full justify-start mt-12">
                            Learn more
                            <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
                        </Button>
                    </Link>

                    <Link href="/platform/estimates/" className="group flex flex-col space-y-4 p-6 lg:p-8 bg-white rounded-lg transition-colors duration-300 ease-in-out">
                        <div className="flex items-center gap-2">
                            <FileText className="text-brand-red" />
                            <h3 className="text-lg font-semibold tracking-tight">Invoicing</h3>
                        </div>
                        <Separator decorative />
                        <ul className="space-y-2">
                            <li className="flex gap-2 text-sm text-muted-foreground">
                                <Check size={14} className="text-brand-red h-5" />
                                Create professional estimates in seconds.
                            </li>
                            <li className="flex gap-2 text-sm text-muted-foreground">
                                <Check size={14} className="text-brand-red h-5" />
                                Track your income and expenses.
                            </li>
                            <li className="flex gap-2 text-sm text-muted-foreground">
                                <Check size={14} className="text-brand-red h-5" />
                                Manage your inventory.
                            </li>
                        </ul>
                        <Button variant="link" className="w-full justify-start mt-12">
                            Learn more
                            <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
                        </Button>
                    </Link>

                    <Link href="/platform/notifications/" className="group flex flex-col space-y-4 p-6 lg:p-8 bg-white rounded-lg transition-colors duration-300 ease-in-out">
                        <div className="flex items-center gap-2">
                            <Bell className="text-brand-red" />
                            <h3 className="text-lg font-semibold tracking-tight">Notifications</h3>
                        </div>
                        <Separator decorative />
                        <ul className="space-y-2">
                            <li className="flex gap-2 text-sm text-muted-foreground">
                                <Check size={14} className="text-brand-red h-5" />
                                Create professional estimates in seconds.
                            </li>
                            <li className="flex gap-2 text-sm text-muted-foreground">
                                <Check size={14} className="text-brand-red h-5" />
                                Track your income and expenses.
                            </li>
                            <li className="flex gap-2 text-sm text-muted-foreground">
                                <Check size={14} className="text-brand-red h-5" />
                                Manage your inventory.
                            </li>
                        </ul>
                        <Button variant="link" className="w-full justify-start mt-12">
                            Learn more
                            <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
                        </Button>
                    </Link>

                    <Link href="/platform/automations/" className="group flex flex-col space-y-4 p-6 lg:p-8 bg-white rounded-lg transition-colors duration-300 ease-in-out">
                        <div className="flex items-center gap-2">
                            <Workflow className="text-brand-red" />
                            <h3 className="text-lg font-semibold tracking-tight">Automations</h3>
                        </div>
                        <Separator decorative />
                        <ul className="space-y-2">
                            <li className="flex gap-2 text-sm text-muted-foreground">
                                <Check size={14} className="text-brand-red h-5" />
                                Create professional estimates in seconds.
                            </li>
                            <li className="flex gap-2 text-sm text-muted-foreground">
                                <Check size={14} className="text-brand-red h-5" />
                                Track your income and expenses.
                            </li>
                            <li className="flex gap-2 text-sm text-muted-foreground">
                                <Check size={14} className="text-brand-red h-5" />
                                Manage your inventory.
                            </li>
                        </ul>
                        <Button variant="link" className="w-full justify-start mt-12">
                            Learn more
                            <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
                        </Button>
                    </Link>

                    <Link href="/platform/ai/" className="relative group flex items-end p-4 rounded-lg transition-colors duration-300 ease-in-out overflow-hidden">
                        <div className="absolute inset-0">
                            <img src="https://demo.7iquid.com/apexus/wp-content/uploads/2025/12/img26-home4.webp" alt="" className="group-hover:scale-105 object-cover w-full h-full z-0 transition-all duration-300" />
                        </div>
                        <div className="w-full h-12 flex items-center justify-between bg-brand-red text-white text-xs rounded-md px-6 hover:pr-4 z-10 transition-all duration-300">
                            Go to dashboard<ChevronRight className="size-5" />
                        </div>
                    </Link>

                </div>

            </div>
        </section>
    )
}