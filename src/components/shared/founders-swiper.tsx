"use client"
import Link from "next/link"


import { Swiper, SwiperSlide } from "swiper/react"
import { Mousewheel, Navigation } from 'swiper/modules'
import 'swiper/css';
import "swiper/css/pagination"
import { ChevronLeft, ChevronRight, Warehouse } from "lucide-react"
import { Button } from "@/components/ui/button"


const useCases = [
    {
        name: "Auto Service",
        image: "https://cdn.prod.website-files.com/67ffd68333438435025f18b3/680759476a9f379bb8e604cf_Card-8.avif",
        link: "#",
    },
    {
        name: "Auto Service",
        image: "https://cdn.prod.website-files.com/67ffd68333438435025f18b3/68075947e8daab1844529453_Card-10.avif",
        link: "#",
    },
    {
        name: "Auto Service",
        image: "https://cdn.prod.website-files.com/67ffd68333438435025f18b3/68075947e7d86fbde49ebf68_Card-9.avif",
        link: "#",
    },
    {
        name: "Auto Service",
        image: "https://cdn.prod.website-files.com/67ffd68333438435025f18b3/6807594733c247e272ede3ab_Card-6.avif",
        link: "#",
    },
]

function UseCaseCard({ name, image, link }: typeof useCases[0]) {
    return (
        <Link href={link} className="group block focus:outline-none h-full">
            <div className="use-case-card relative flex flex-col justify-between rounded-xl p-6 aspect-255/320 overflow-hidden">
                <img src={image} alt="" className="absolute inset-0 -z-2 w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" />
                <Button variant="ghost" size="icon" className="lg:w-12 lg:h-12 bg-white hover:bg-white">
                    <Warehouse />
                </Button>
                <p className="text-lg font-semibold tracking-tight text-white">{name}</p>
            </div>
        </Link>
    )
}

export default function FoundersSwiper() {
    return (
        <>
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
                        slidesPerView: 4,
                        slidesPerGroup: 4
                    },
                }}
                className="overflow-visible! mb-12"
            >
                {useCases.map((useCase, index) => (
                    <SwiperSlide key={index}>
                        <UseCaseCard {...useCase} />
                    </SwiperSlide>
                ))}


            </Swiper>

            <div className="w-full flex justify-end lg:hidden gap-2">
                <Button variant="outline" size="icon" className="swiper-prev size-12">
                    <ChevronLeft />
                </Button>
                <Button variant="outline" size="icon" className="swiper-next size-12">
                    <ChevronRight />
                </Button>
            </div>
        </>
    )
}
