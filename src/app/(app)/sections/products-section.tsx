import { Button } from "@/components/ui/button";
import { Check, ShipWheel, Truck, Warehouse } from "lucide-react";

export default function ProductsSectiom() {
    return (
        <section className="py-30">
            <div className="page-width space-y-20">
                <header className="flex flex-col">
                    <h2 className="text-4xl font-semibold tracking-tight">
                        Trusted by pro owners for 20+ years.
                    </h2>
                </header>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="col-span-full text-xs text-muted-foreground uppercase mb-4">MODULES</div>

                    <div className="card flex flex-col items-center rounded-lg bg-white p-6 space-y-6">
                        <div className="size-16 bg-foreground text-blue-500 rounded-xl grid place-items-center my-15">
                            <Warehouse />
                        </div>
                        <div className="w-full flex flex-col space-y-1">

                            <h3 className="text-xl font-semibold">Service Manager</h3>
                            <p className="text-xs text-muted-foreground">
                                Auto repair shop operations
                            </p>
                        </div>
                    </div>


                    <div className="card flex flex-col items-center rounded-lg bg-white p-6 space-y-6">
                        <div className="size-16 bg-foreground text-orange-500 rounded-xl grid place-items-center my-15">
                            <ShipWheel />
                        </div>
                        <div className="w-full flex flex-col space-y-1">

                            <h3 className="text-xl font-semibold">Tyre shop</h3>
                            <p className="text-xs text-muted-foreground">
                                Tyre shop operations with inventory
                            </p>
                        </div>
                    </div>


                    <div className="card flex flex-col items-center rounded-lg bg-white p-6 space-y-6">
                        <div className="size-16 bg-foreground text-pink-500 rounded-xl grid place-items-center my-15">
                            <Truck />
                        </div>
                        <div className="w-full flex flex-col space-y-1">

                            <h3 className="text-xl font-semibold">Fleet manager</h3>
                            <p className="text-xs text-muted-foreground">
                                Fleet operations with vehicle inventory
                            </p>
                        </div>
                    </div>

                </div>


                <div className="w-full flex flex-wrap  justify-between gap-6">

                    <Button size="lg" className="bg-brand-red text-white">
                        Get into the dashboard
                    </Button>

                    <div className="review-card max-w-sm flex flex-col grow-0 space-y-6">
                        <p className="text-lg font-medium">"Automotiv is an indispensable part of my operations workflow."</p>
                        <div className="flex items-center gap-3">
                            <div className="size-10 bg-gray-300 rounded-full grid place-items-center">
                                JD
                            </div>
                            <div className="text-xs text-muted-foreground">John D, Trustpilot Review</div>
                        </div>
                    </div>

                    <div className="hidden max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-10">

                        <div className="space-y-2">
                            <p className="flex items-center gap-1 text-md font-medium">
                                <span className=" size-3 mr-1  rounded-full bg-blue-600 inline-grid place-items-center">
                                    <Check className="inline-block size-2 text-white" />
                                </span>
                                Calendar appointments
                            </p>
                            <p className="text-xs text-muted-foreground">Zoom in with lossless crop, sharpen details, and denoise high ISO shots captured in unpredictable conditions.</p>
                        </div>
                        <div className="space-y-2">
                            <p className="flex items-center gap-1 text-md font-medium">
                                <span className=" size-3 mr-1  rounded-full bg-blue-600 inline-grid place-items-center">
                                    <Check className="inline-block size-2 text-white" />
                                </span>
                                Calendar appointments
                            </p>
                            <p className="text-xs text-muted-foreground">Zoom in with lossless crop, sharpen details, and denoise high ISO shots captured in unpredictable conditions.</p>
                        </div>
                        <div className="space-y-2">
                            <p className="flex items-center gap-1 text-md font-medium">
                                <span className=" size-3 mr-1  rounded-full bg-blue-600 inline-grid place-items-center">
                                    <Check className="inline-block size-2 text-white" />
                                </span>
                                Calendar appointments
                            </p>
                            <p className="text-xs text-muted-foreground">Zoom in with lossless crop, sharpen details, and denoise high ISO shots captured in unpredictable conditions.</p>
                        </div>
                        <div className="space-y-2">
                            <p className="flex items-center gap-1 text-md font-medium">
                                <span className=" size-3 mr-1  rounded-full bg-blue-600 inline-grid place-items-center">
                                    <Check className="inline-block size-2 text-white" />
                                </span>
                                Calendar appointments
                            </p>
                            <p className="text-xs text-muted-foreground">Zoom in with lossless crop, sharpen details, and denoise high ISO shots captured in unpredictable conditions.</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}