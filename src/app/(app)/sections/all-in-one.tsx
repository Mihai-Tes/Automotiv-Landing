import { Check, Warehouse } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AllInOne() {
    return (
        <section className="py-30">
            <div className="page-width space-y-20">



                <header className="flex flex-col space-y-6">
                    <h2 className="max-w-xl text-4xl font-bold tracking-tight">
                        Products that work together to help you <span className="text-brand-red">break down silos</span> between departments
                    </h2>
                    <div className="flex items-center gap-6">
                        <div className="flex flex-col">
                            <p className="text-md">4 Modules</p>
                            <p className="text-xs text-muted-foreground">
                                Starting at 15Eur/mo
                            </p>
                        </div>
                        <Link href="#">
                            <Button size="lg" className="bg-brand-red text-white">Get Started</Button>
                        </Link>
                    </div>
                </header>



                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

                    <div className="col-span-full mb-4">
                        <h3 className="text-xs text-muted-foreground uppercase tracking-widest">Modules</h3>
                    </div>

                    <div className="card flex flex-col rounded-lg bg-white">
                        <div className="flex items-center justify-center py-15">
                            <div className="size-16 bg-foreground text-blue-400 rounded-xl grid place-items-center">
                                <Warehouse />
                            </div>
                        </div>
                        <div className="p-6 pt-0 space-y-2">
                            <div className="flex items-end justify-between gap-2">
                                <div>
                                    <h3 className="text-xl font-semibold tracking-tight">Service Manager</h3>
                                    <p className="text-xs text-muted-foreground">
                                        {/* <div className=" size-3 mr-1  rounded-full bg-blue-600 inline-grid place-items-center">
                                            <Check className="inline-block size-2 text-white" />
                                        </div> */}
                                        Auto repair shop management
                                    </p>
                                </div>
                                <span className="text-lg text-muted-foreground">15Eur/mo</span>
                            </div>
                        </div>
                    </div>

                    <div className="card flex flex-col rounded-lg bg-white">
                        <div className="flex items-center justify-center py-15">
                            <div className="size-16 bg-foreground text-green-400 rounded-xl grid place-items-center">
                                <Warehouse />
                            </div>
                        </div>
                        <div className="p-6 pt-0 space-y-2">
                            <div className="flex items-end justify-between gap-2">
                                <div>
                                    <h3 className="text-xl font-semibold tracking-tight">Service Manager</h3>
                                    <p className="text-xs text-muted-foreground">
                                        {/* <div className=" size-3 mr-1  rounded-full bg-blue-600 inline-grid place-items-center">
                                            <Check className="inline-block size-2 text-white" />
                                        </div> */}
                                        15 Eur / mo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card flex flex-col rounded-lg bg-white">
                        <div className="flex items-center justify-center py-15">
                            <div className="size-16 bg-foreground text-orange-400 rounded-xl grid place-items-center">
                                <Warehouse />
                            </div>
                        </div>
                        <div className="p-6 pt-0 space-y-2">
                            <div className="flex items-end justify-between gap-2">
                                <div>
                                    <h3 className="text-xl font-semibold tracking-tight">Service Manager</h3>
                                    <p className="text-xs text-muted-foreground">
                                        {/* <div className=" size-3 mr-1  rounded-full bg-blue-600 inline-grid place-items-center">
                                            <Check className="inline-block size-2 text-white" />
                                        </div> */}
                                        15 Eur / mo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

                    <div className="col-span-full mb-4">
                        <h3 className="text-xs text-muted-foreground uppercase tracking-widest">Features</h3>
                    </div>

                    <div className="card flex flex-col rounded-lg bg-white">
                        <div className="flex items-center justify-center py-15">
                            <div className="size-16 bg-foreground text-blue-400 rounded-xl grid place-items-center">
                                <Warehouse />
                            </div>
                        </div>
                        <div className="p-6 pt-0 space-y-2">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold tracking-tight">CRM</h3>
                                <p className="text-xs text-muted-foreground">
                                    <div className=" size-3 mr-1  rounded-full bg-blue-600 inline-grid place-items-center">
                                        <Check className="inline-block size-2 text-white" />
                                    </div>
                                    Included
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card flex flex-col rounded-lg bg-white">
                        <div className="flex items-center justify-center py-15">
                            <div className="size-16 bg-foreground text-blue-400 rounded-xl grid place-items-center">
                                <Warehouse />
                            </div>
                        </div>
                        <div className="p-6 pt-0 space-y-2">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold tracking-tight">Appointments</h3>
                                <p className="text-xs text-muted-foreground">
                                    <div className=" size-3 mr-1  rounded-full bg-blue-600 inline-grid place-items-center">
                                        <Check className="inline-block size-2 text-white" />
                                    </div>
                                    Included
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card flex flex-col rounded-lg bg-white">
                        <div className="flex items-center justify-center py-15">
                            <div className="size-16 bg-foreground text-blue-400 rounded-xl grid place-items-center">
                                <Warehouse />
                            </div>
                        </div>
                        <div className="p-6 pt-0 space-y-2">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold tracking-tight">Invoicing</h3>
                                <p className="text-xs text-muted-foreground">
                                    <div className=" size-3 mr-1  rounded-full bg-blue-600 inline-grid place-items-center">
                                        <Check className="inline-block size-2 text-white" />
                                    </div>
                                    Included
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card flex flex-col rounded-lg bg-white">
                        <div className="flex items-center justify-center py-15">
                            <div className="size-16 bg-foreground text-blue-400 rounded-xl grid place-items-center">
                                <Warehouse />
                            </div>
                        </div>
                        <div className="p-6 pt-0 space-y-2">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold tracking-tight">Notifications</h3>
                                <p className="text-xs text-muted-foreground">
                                    <div className=" size-3 mr-1  rounded-full bg-blue-600 inline-grid place-items-center">
                                        <Check className="inline-block size-2 text-white" />
                                    </div>
                                    Included
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card flex flex-col rounded-lg bg-white">
                        <div className="flex items-center justify-center py-15">
                            <div className="size-16 bg-foreground text-blue-400 rounded-xl grid place-items-center">
                                <Warehouse />
                            </div>
                        </div>
                        <div className="p-6 pt-0 space-y-2">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold tracking-tight">Automations</h3>
                                <p className="text-xs text-muted-foreground">
                                    <div className=" size-3 mr-1  rounded-full bg-blue-600 inline-grid place-items-center">
                                        <Check className="inline-block size-2 text-white" />
                                    </div>
                                    Included
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card flex flex-col rounded-lg bg-white">
                        <div className="flex items-center justify-center py-15">
                            <div className="size-16 bg-foreground text-blue-400 rounded-xl grid place-items-center">
                                <Warehouse />
                            </div>
                        </div>
                        <div className="p-6 pt-0 space-y-2">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold tracking-tight">Inventory</h3>
                                <p className="text-xs text-muted-foreground">
                                    <div className=" size-3 mr-1  rounded-full bg-blue-600 inline-grid place-items-center">
                                        <Check className="inline-block size-2 text-white" />
                                    </div>
                                    Included
                                </p>
                            </div>
                        </div>
                    </div>

                </div>



                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

                    <div className="col-span-full mb-4">
                        <h3 className="text-xs text-muted-foreground uppercase tracking-widest">Addons</h3>
                    </div>

                    <div className="card flex flex-col rounded-lg bg-white">
                        <div className="flex items-center justify-center py-15">
                            <div className="size-16 bg-foreground text-blue-400 rounded-xl grid place-items-center">
                                <Warehouse />
                            </div>
                        </div>
                        <div className="p-6 pt-0 space-y-2">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold tracking-tight">Email marketing</h3>
                                <p className="text-xs text-muted-foreground">
                                    <div className=" size-3 mr-1  rounded-full bg-blue-600 inline-grid place-items-center">
                                        <Check className="inline-block size-2 text-white" />
                                    </div>
                                    Pay as you go
                                </p>
                            </div>
                        </div>
                    </div>



                </div>



            </div>
        </section>
    );
}