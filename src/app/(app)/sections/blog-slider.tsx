"use client"

import Link from "next/link"
import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"
import { Mousewheel, Navigation } from 'swiper/modules'
import 'swiper/css';
import "swiper/css/pagination"
import { ChevronLeft, ChevronRight, Warehouse } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function BlogSliderSection() {
    return (
        <section className="py-30 overflow-x-hidden">
            <div className="page-width">
                <header className="flex flex-col space-y-1 mb-15">
                    <h2 className="max-w-xl text-4xl font-bold tracking-tight">
                        Latest Insights from the Future of Garage Automation
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
                        <Link href="#" className="group flex flex-col border hover:border-brand-red p-2">
                            <figure className="w-full aspect-4/3 relative overflow-hidden">

                                <Image

                                    src="/media/pictures/modern-warehouse.jpg"
                                    alt="Warehouse"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-all duration-300 will-change-transform"
                                />
                            </figure>
                            <div className="flex flex-col p-4 space-y-6">

                                <h3 className="text-xl font-semibold tracking-tighr">Manage all your fleet costs from one modern dashboard</h3>
                                <div className="flex items-center gap-2">
                                    <Avatar size="lg">
                                        <AvatarImage src="#" />
                                        <AvatarFallback>XX</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-semibold">Editor</span>
                                        <span className="text-xs text-muted-foreground">21 Apr 2027</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href="#" className="group flex flex-col border hover:border-brand-red p-2">
                            <figure className="w-full aspect-4/3 relative overflow-hidden">

                                <Image

                                    src="/media/pictures/modern-warehouse.jpg"
                                    alt="Warehouse"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-all duration-300 will-change-transform"
                                />
                            </figure>
                            <div className="flex flex-col p-4 space-y-6">

                                <h3 className="text-xl font-semibold tracking-tighr">Manage all your fleet costs from one modern dashboard</h3>
                                <div className="flex items-center gap-2">
                                    <Avatar size="lg">
                                        <AvatarImage src="#" />
                                        <AvatarFallback>XX</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-semibold">Editor</span>
                                        <span className="text-xs text-muted-foreground">21 Apr 2027</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href="#" className="group flex flex-col border hover:border-brand-red p-2">
                            <figure className="w-full aspect-4/3 relative overflow-hidden">

                                <Image

                                    src="/media/pictures/modern-warehouse.jpg"
                                    alt="Warehouse"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-all duration-300 will-change-transform"
                                />
                            </figure>
                            <div className="flex flex-col p-4 space-y-6">

                                <h3 className="text-xl font-semibold tracking-tighr">Manage all your fleet costs from one modern dashboard</h3>
                                <div className="flex items-center gap-2">
                                    <Avatar size="lg">
                                        <AvatarImage src="#" />
                                        <AvatarFallback>XX</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-semibold">Editor</span>
                                        <span className="text-xs text-muted-foreground">21 Apr 2027</span>
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