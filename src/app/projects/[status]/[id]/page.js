"use client";
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { NavBar } from "@comp/NavBar";
import { usePathname } from "next/navigation";
import { services } from "src/app/data/services";
export default function Page() {
    const path = usePathname()
    const id = path.split("/")[3];


    const targetProject = services.flatMap(service => service.projects).filter((project) => project.pid == id)

    console.log("targetProject", targetProject);


    return (
        <div className="mx-[20px] my-[30px] block md:block ">
            <NavBar />
            <div className="my-[25px] font-medium text-primary md:text-[24px] md:leading-[28px] text-[16px] leading-[19px]">Gallerry</div>
            <main>
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
                <div className="bg-primary w-full h-[26px] md:h-[104px] text-[#FFFFFFBF]">

                </div>
                <div className="md:mt-[51px] md:mb-4  mt-[11px] mb-1 flex justify-between">
                    <div className="md:text-4xl md:leading-10 text-lg leading-5 text-primary font-semibold ">
                        Lorem ipsum dolor consectetur.
                    </div>
                    <div className="">
                        {path.split("/")[2] == "ongoing" ? <button className="bg-primary rounded-br-[30px] md:h-[60px] w-[120px] h-[43px] md:w-[150px] text-white">
                            Donate
                        </button>: null}

                    </div>
                </div>
                <div className="font-normal md:text-2xl md:leading-9 text-[10px] leading-[10px] text-dark ">
                    Lorem ipsum dolor sit amet consectetur. Neque ut montes lorem ullamcorper pharetra et. Quam viverra sit in pretium quam. Consectetur posuere porta nam feugiat mauris ornare sapien scelerisque. Mauris ipsum porttitor aliquet pulvinar fermentum ut curabitur tempus nulla. At eleifend mollis tellus quis tristique orci orci. Interdum vitae aliquet enim ipsum auctor rutrum purus lacus. Tempor nunc sed nibh pulvinar nibh. Arcu quis ac sed sem.Lorem ipsum dolor sit amet consectetur. Neque ut montes lorem ullamcorper pharetra et. Quam viverra sit in pretium quam. Consectetur posuere porta nam feugiat mauris ornare sapien scelerisque. Mauris ipsum porttitor aliquet pulvinar fermentum ut curabitur tempus nulla. At eleifend mollis tellus quis tristique orci orci. Interdum vitae aliquet enim ipsum auctor rutrum purus lacus. Tempor nunc sed nibh pulvinar nibh. Arcu quis ac sed sem.Lorem ipsum dolor sit amet consectetur. Neque ut montes lorem ullamcorper pharetra et. Quam viverra sit in pretium quam. Consectetur posuere porta.
                </div>
            </main>


        </div>
    )
}