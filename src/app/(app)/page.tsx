import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, ChevronRight, Star, LayoutDashboard, Calendar1, FileText, Bell, Workflow, Sparkles } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <div className="wrapper">

      <section className="h-screen bg-[#18181b] text-white pt-16">
        <div className="page-width grid grid-cols-1 lg:grid-cols-6 h-full">
          <div className="col-span-2 flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="fill-current" size={14} />
                <Star className="fill-current" size={14} />
                <Star className="fill-current" size={14} />
                <Star className="fill-current" size={14} />
                <Star className="fill-current" size={14} />

              </div>
              <p className="text-xs">4.86/5 <span className="text-muted-foreground">Google Rating</span></p>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">The All-in-One solution for auto repair shops</h1>
            <p className="text-sm lg:text-md text-muted-foregroundt lg:mb-12">Increase savings, automate busy work, and make better decisions by managing global HR, Payroll, IT, and Finance in one place.</p>
            <div className="flex gap-2">
              <Button variant="brand">
                Dashboard
                <img src="/media/logo_symbol_wt.svg" alt="" className="size-3" />
              </Button>
              <Button variant="ghost" className="hover:bg-background/5 hover:text-background">
                Pricing
                <ChevronRight />
              </Button>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Check size={14} />
              Free tier available. No credit card required.
            </div>
          </div>
          <div className="col-span-4 relative flex items-end">
            <div className="relative lg:absolute bottom-0 lg:right-0 z-5">
              <img src="https://images.ctfassets.net/k0itp0ir7ty4/53zTNXtkmfyj4EDjHZ9oc0/202efa01b6aa891add91b8e5844b92c4/Tablet-Hands.png" alt="" />
            </div>
          </div>
        </div>
        <img src="/media/logo_symbol_wt.svg" alt="" className="absolute bottom-0 right-0 w-[90vw] lg:w-[40vw] opacity-5" />
      </section>

      <section className="py-30">
        <div className="page-width space-y-30">
          <header className="flex flex-col space-y-1">
            <h2 className="max-w-xl text-4xl font-bold tracking-tight">
              Products that work together to help you <span className="text-brand-red">break down silos</span> between departments
            </h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {/* Cards */}

            <Link href="/platform/dashboard/" className="group flex flex-col space-y-4 p-6 lg:p-8 border hover:border-brand-red rounded-lg transition-colors duration-300 ease-in-out">
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

            <Link href="/platform/appointments/" className="group flex flex-col space-y-4 p-6 lg:p-8 border hover:border-brand-red rounded-lg transition-colors duration-300 ease-in-out">
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

            <Link href="/platform/estimates/" className="group flex flex-col space-y-4 p-6 lg:p-8 border hover:border-brand-red rounded-lg transition-colors duration-300 ease-in-out">
              <div className="flex items-center gap-2">
                <FileText className="text-brand-red" />
                <h3 className="text-lg font-semibold tracking-tight">Estimates</h3>
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

            <Link href="/platform/notifications/" className="group flex flex-col space-y-4 p-6 lg:p-8 border hover:border-brand-red rounded-lg transition-colors duration-300 ease-in-out">
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

            <Link href="/platform/automations/" className="group flex flex-col space-y-4 p-6 lg:p-8 border hover:border-brand-red rounded-lg transition-colors duration-300 ease-in-out">
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

            <Link href="/platform/ai/" className="group flex flex-col space-y-4 p-6 lg:p-8 border hover:border-brand-red rounded-lg transition-colors duration-300 ease-in-out">
              <div className="flex items-center gap-2">
                <Sparkles className="text-brand-red" />
                <h3 className="text-lg font-semibold tracking-tight">AI</h3>
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

            <div className="col-span-full flex flex-col items-center mt-11">
              <Link href="/platform/">
                <Button variant="brand" size="lg">Explore the platform</Button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <section className="py-30">
        <div className="page-width space-y-30">
          <header className="flex flex-col space-y-1">
            <h2 className="max-w-xl text-4xl font-bold tracking-tight">
              Meet the founders like you who chose to grow with Automotiv
            </h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="aspect-6/4 grid place-items-center border-r border-b">Logo</div>
            <div className="aspect-6/4 grid place-items-center border-r border-b">Logo</div>
            <div className="aspect-6/4 grid place-items-center border-b">Logo</div>
            <div className="aspect-6/4 grid place-items-center border-r">Logo</div>
            <div className="aspect-6/4 grid place-items-center border-r">Logo</div>
            <div className="aspect-6/4 grid place-items-center">Logo</div>
          </div>
        </div>
      </section>

      <section className="py-30 bg-accent">
        <div className="page-width space-y-30">
          <header className="flex flex-col space-y-1">
            <h2 className="max-w-xl text-4xl font-bold tracking-tight">
              Remarkable results for every size business.
            </h2>
            <p className="text-sm lg:text-md text-muted-foregroundt lg:mb-12">Increase savings, automate busy work, and make better decisions by managing global HR, Payroll, IT, and Finance in one place.</p>
          </header>
        </div>
      </section>

      <section className="py-30">
        <div className="page-width space-y-30">
          <header className="flex flex-col space-y-1">
            <h2 className="max-w-xl text-4xl font-bold tracking-tight">
              Built for the founders that keep the world moving
            </h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="aspect-square rounded-md bg-accent"></div>
            <div className="aspect-square rounded-md bg-accent"></div>
            <div className="aspect-square rounded-md bg-accent"></div>
            <div className="aspect-square rounded-md bg-accent"></div>
          </div>
        </div>
      </section>

    </div>
  );
}
