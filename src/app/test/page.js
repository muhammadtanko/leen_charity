"use client";
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { NavBar } from "@comp/NavBar";


export default function Page() {
    const projects = [
        {
            name: "zakkah",
            date: "01/2/23",
            location: "kaduna"
        },
        {
            name: "zakkah",
            date: "01/2/23",
            location: "kano"
        },
        {
            name: "zakkah",
            date: "01/2/23",
            location: "zaria"
        },
        {
            name: "zakkah",
            date: "01/2/23",
            location: "katsina"
        },
        {
            name: "zakkah",
            date: "01/2/23",
            location: "zamfara"
        },
        {
            name: "zakkah",
            date: "01/2/23",
            location: "abuja"
        },
        {
            name: "zakkah",
            date: "01/2/23",
            location: "adamawa"
        }
        ,
        {
            name: "zakkah",
            date: "01/2/23",
            location: "yobe"
        },
        {
            name: "zakkah",
            date: "01/2/23",
            location: "sokoto"
        },
        {
            name: "zakkah",
            date: "01/2/23",
            location: "taraba"
        },
        {
            name: "zakkah",
            date: "01/2/23",
            location: "jalingo"
        },
    ]
    return (
        <div className="mx-[20px] my-[30px] block md:block ">
            <NavBar />
            <Swiper
                className="mySwiper border-2 border-primary"
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true
                }}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
            >
                <SwiperSlide className="">
                    <Image src="/images/img142.png" width={1320} height={600} alt="photo" />
                </SwiperSlide>
                <SwiperSlide className="">
                    <Image src="/images/img142.png" width={1320} height={600} alt="photo" />
                </SwiperSlide>
                <SwiperSlide className="">
                    <Image src="/images/img142.png" width={1320} height={600} alt="photo" />
                </SwiperSlide>

            </Swiper>
            <div className="bg-primary w-full h-[26px] md:h-[104px] text-[#FFFFFFBF] ">
                <div className="grid grid-cols-10 divide-x">
                    {projects.map((item, idx) => {
                        return (<div className="flex p-5 items-center gap-3">
                            <div className="font-light text-[40px] leading-[40px] ">
                                {idx}
                            </div>
                            <div className="">
                                <div className="font-medium text-[18px] leading-[18px] pb-[6px]">{item.name}</div>
                                <div className="font-bold text-[12px] leading-[12px] ">{item.date} | {item.location}</div>
                            </div>
                        </div>)
                    })}
                </div>
            </div>

        </div>
    )
}