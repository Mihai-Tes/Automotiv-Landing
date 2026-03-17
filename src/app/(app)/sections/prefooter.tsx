import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function PrefooterSection() {
    return (
        <section className="py-30">
            <div className="page-width">
                <header className="max-w-xl mx-auto mb-15 space-y-6">
                    <h3 className="text-4xl font-bold tracking-tight">Time is money. Save both.</h3>
                    <p className="text-sm lg:text-md text-muted-foregroundt lg:mb-12">Increase savings, automate busy work, and make better decisions by managing global HR, Payroll, IT, and Finance in one place.</p>
                    <div className="flex items-center gap-2 p-2 pl-4 rounded-xl border border-foreground/20 focus-within:border-foreground/50">
                        <input type="text" placeholder="Email address" className="flex-1 text-sm border-0 focus:ring-0 outline-0" />
                        <Link href="#" className="button-brand-red px-4">Join the waitlist <ChevronRight className="size-3 -mr-2" /></Link>
                    </div>
                </header>
            </div>
        </section>
    )
}