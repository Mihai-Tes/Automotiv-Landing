import { Star } from "lucide-react"

export default function ReviewsSection() {
    return (
        <section className="py-30">
            <div className="page-width space-y-20">
                <header className="max-w-xl mx-auto mb-15">
                    <h3 className="text-4xl font-bold tracking-tight">Reviews</h3>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="">
                        <p className="text-xl font-medium text-muted-foreground mb-4">&quot;This is a great product! I love it.&quot;</p>
                        <div className="flex items-center gap-2">
                            <div className="size-10 rounded-full bg-accent" />
                            <div>
                                <p className="text-sm font-semibold">John Doe</p>
                                <p className="text-xs text-muted-foreground">Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}