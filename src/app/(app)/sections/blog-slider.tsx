"use client"

import Link from "next/link"
import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"
import { Mousewheel, Navigation } from 'swiper/modules'
import 'swiper/css';
import "swiper/css/pagination"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function BlogSliderSection() {
    return (
        <section className="dark bg-brand-dark-1 text-foreground py-30 overflow-x-hidden">
            <div className="page-width">
                <header className="flex flex-col space-y-1 mb-15">
                    <h2 className="text-5xl font-medium tracking-tight">
                        Latest Insights
                    </h2>
                </header>
                <Swiper
                    modules={[Navigation, Mousewheel]}
                    mousewheel={{ forceToAxis: true }}
                    spaceBetween={24}
                    navigation={{
                        nextEl: ".swiper-next",
                        prevEl: ".swiper-prev",
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.25,
                            centeredSlides: true,
                            centeredSlidesBounds: true
                        },
                        768: {
                            slidesPerView: 2.5,
                            slidesPerGroup: 2
                        },
                        1024: {
                            slidesPerView: 3,
                            slidesPerGroup: 3
                        },
                    }}
                    className="overflow-visible! mb-12"
                >

                    <SwiperSlide>
                        <Link href="#" className="group flex flex-col rounded-xl overflow-hidden bg-muted">
                            <figure className="w-full aspect-6/4 relative overflow-hidden">

                                <Image

                                    src="/media/pictures/modern-warehouse.jpg"
                                    alt="Warehouse"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-all duration-300 will-change-transform"
                                />
                                <div className="size-9 rounded-full bg-background/10 backdrop-blur-md absolute top-4 right-4 grid place-items-center">
                                    <ArrowUpRight className="size-4 text-white opacity-75" />
                                </div>
                            </figure>
                            <div className="flex flex-col p-4 space-y-6">

                                <h3 className="text-lg font-semibold tracking-tight">Manage all your fleet costs from one modern dashboard</h3>
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="#" />
                                        <AvatarFallback className="text-xs">Ed</AvatarFallback>
                                    </Avatar>
                                    <div className="flex items-center justify-between w-full">
                                        <span className="text-xs font-semibold">Editor</span>
                                        <span className="text-[11px] text-muted-foreground">21 Apr 2027</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>


                    <SwiperSlide>
                        <Link href="#" className="group flex flex-col rounded-xl overflow-hidden bg-muted">
                            <figure className="w-full aspect-6/4 relative overflow-hidden">

                                <Image

                                    src="/media/pictures/modern-warehouse.jpg"
                                    alt="Warehouse"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-all duration-300 will-change-transform"
                                />
                                <div className="size-9 rounded-full bg-background/10 backdrop-blur-md absolute top-4 right-4 grid place-items-center">
                                    <ArrowUpRight className="size-4 text-white opacity-75" />
                                </div>
                            </figure>
                            <div className="flex flex-col p-4 space-y-6">

                                <h3 className="text-lg font-semibold tracking-tight">Manage all your fleet costs from one modern dashboard</h3>
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="#" />
                                        <AvatarFallback className="text-xs">Ed</AvatarFallback>
                                    </Avatar>
                                    <div className="flex items-center justify-between w-full">
                                        <span className="text-xs font-semibold">Editor</span>
                                        <span className="text-[11px] text-muted-foreground">21 Apr 2027</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>


                    <SwiperSlide>
                        <Link href="#" className="group flex flex-col rounded-xl overflow-hidden bg-muted">
                            <figure className="w-full aspect-6/4 relative overflow-hidden">

                                <Image

                                    src="/media/pictures/modern-warehouse.jpg"
                                    alt="Warehouse"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-all duration-300 will-change-transform"
                                />
                                <div className="size-9 rounded-full bg-background/10 backdrop-blur-md absolute top-4 right-4 grid place-items-center">
                                    <ArrowUpRight className="size-4 text-white opacity-75" />
                                </div>
                            </figure>
                            <div className="flex flex-col p-4 space-y-6">

                                <h3 className="text-lg font-semibold tracking-tight">Manage all your fleet costs from one modern dashboard</h3>
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="#" />
                                        <AvatarFallback className="text-xs">Ed</AvatarFallback>
                                    </Avatar>
                                    <div className="flex items-center justify-between w-full">
                                        <span className="text-xs font-semibold">Editor</span>
                                        <span className="text-[11px] text-muted-foreground">21 Apr 2027</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>



                </Swiper>

                <div className="w-full flex justify-end lg:hidden gap-2">
                    <Button variant="outline" size="icon" className="swiper-prev size-12">
                        <ChevronLeft />
                    </Button>
                    <Button variant="outline" size="icon" className="swiper-next size-12">
                        <ChevronRight />
                    </Button>
                </div>

            </div>
        </section>
    )
}