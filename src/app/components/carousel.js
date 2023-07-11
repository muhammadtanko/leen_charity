"use client";
import { Swiper, SwiperSlide } from "swiper/react"
// import Image1 from "../../../public/images/img1.png"
import Image from "next/image"
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import './styles.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


export const Carousel = () => {
    return (
        <div className="mx-[30px] my-[30px] block md:block">
            <Swiper
                className="mySwiper"
                navigation={true}
                autoplay={{
                    delay:3000,
                    disableOnInteraction:false
                }}
                pagination={{
                    clickable:true
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

        </div>
    )
}