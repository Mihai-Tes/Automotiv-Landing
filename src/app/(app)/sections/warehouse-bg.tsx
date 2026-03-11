"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";

export default function WarehouseBgSection() {
    return (
        <section className="relative h-screen py-30 overflow-x-hidden">
            <div className="page-width flex flex-col relative z-10 h-full">
                <header className="flex flex-col space-y-2 mb-15">
                    <h2 className="text-6xl font-bold tracking-tight text-white">Warehouse</h2>
                </header>
                <div className="w-full flex items-end justify-between mt-auto">
                    <div />
                    <Swiper
                        modules={[Navigation, Mousewheel]}
                        mousewheel={{ forceToAxis: true }}
                        spaceBetween={4}
                        navigation={{
                            nextEl: ".swiper-next",
                            prevEl: ".swiper-prev",
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.25,
                            },
                            1024: {
                                slidesPerView: 2,
                            },
                        }}
                        className="w-full lg:w-[644px] overflow-visible! mx-0!"
                    >
                        <SwiperSlide>
                            <div className="flex flex-col gap-1">
                                <div className="w-full flex gap-6 p-6 bg-background/10 backdrop-blur-md text-white rounded-lg shadow-lg/10 hover:bg-background/15 transition-all duration-400">
                                    <div className="text-4xl font-semibold tracking-tight mr-auto">
                                        58+
                                    </div>
                                    <div className="text-[10px] text-muted-foreground">01</div>
                                </div>
                                <div className="w-full h-[280px] flex flex-col p-6 justify-between bg-background/10 backdrop-blur-md text-white rounded-lg shadow-lg/10 hover:bg-background/15 transition-all duration-400">
                                    <p className="w-75/100 ml-auto mb-auto text-sm font-semibold text-end">Feature pack dashboard powered by AI</p>
                                    <p className="w-75/100 text-sm text-white/80  ">We’ve delivered 50+ projects that help companies generate real results.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col gap-1">
                                <div className="w-full flex gap-6 p-6 bg-background/10 backdrop-blur-md text-white rounded-lg shadow-lg/10 hover:bg-background/15 transition-all duration-400">
                                    <div className="text-4xl font-semibold tracking-tight mr-auto">
                                        58+
                                    </div>
                                    <div className="text-[10px] text-muted-foreground">01</div>
                                </div>
                                <div className="w-full h-[280px] flex flex-col p-6 justify-between bg-background/10 backdrop-blur-md text-white rounded-lg shadow-lg/10 hover:bg-background/15 transition-all duration-400">
                                    <p className="w-75/100 ml-auto mb-auto text-sm font-semibold text-end">Feature pack dashboard powered by AI</p>
                                    <p className="w-75/100 text-sm text-white/80  ">We’ve delivered 50+ projects that help companies generate real results.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <figure className="absolute inset-0">
                <Image
                    src="/media/pictures/modern-warehouse.jpg"
                    alt="Warehouse"
                    fill
                    className="object-cover"
                />
            </figure>
        </section>
    );
}
