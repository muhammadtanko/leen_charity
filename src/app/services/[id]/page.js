"use client";
import { usePathname } from "next/navigation";
import { NavBar } from "@comp/NavBar"
import { Footer } from "@comp/footer"
import { services } from "../../data/services"
import Image from "next/image";
import Link from "next/link";


export default function Page() {
    const path = usePathname()
    const service = services.filter((item) => {
        return item.id == path.split("/")[2]
    })
    return (
        <div className="mx-[50px]">
            <NavBar />
            <main>
                <div className="text-primary font-normal text-[24px] leading-[28px] mb-5">
                    {service[0].name}
                </div>
                <div className="flex justify-between">
                    <div className="">
                        <Image src={"/images/img4.png"} height={445} width={376} />
                    </div>
                    <div className="">
                        <div className="text-primary font-semibold text-[36px] leading-[42px] ">
                            <div>
                                Donate now
                            </div>
                            <div className="">

                            </div>
                        </div>
                        <div className="flex justify-between">
                            <input type="radio" name="payment" id="" value="once" />
                            <label htmlFor="payment">One Time</label>
                            <input type="radio" name="payment" id="" value="monthly" />
                            <label htmlFor="payment">Monthly</label>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
                <div className="text-normal leading-9 text-[24px] mt-5">
                    Lorem ipsum dolor sit amet consectetur. Neque ut montes lorem ullamcorper pharetra et. Quam viverra sit in pretium quam. Consectetur posuere porta nam feugiat mauris ornare sapien scelerisque. Mauris ipsum porttitor aliquet pulvinar fermentum ut curabitur tempus nulla. At eleifend mollis tellus quis tristique orci orci. Interdum vitae aliquet enim ipsum auctor rutrum purus lacus. Tempor nunc sed nibh pulvinar nibh. Arcu quis ac sed sem.Lorem ipsum dolor sit amet consectetur. Neque ut montes lorem ullamcorper pharetra et. Quam viverra sit in pretium quam. Consectetur posuere porta nam feugiat mauris ornare sapien scelerisque. Mauris ipsum porttitor aliquet pulvinar fermentum ut curabitur tempus nulla. At eleifend mollis tellus quis tristique orci orci. Interdum vitae aliquet enim ipsum auctor rutrum purus lacus. Tempor nunc sed nibh pulvinar nibh. Arcu quis ac sed sem.Lorem ipsum dolor sit amet consectetur. Neque ut montes lorem ullamcorper pharetra et. Quam viverra sit in pretium quam. Consectetur posuere porta.
                </div>
                {service[0].previousProjects.map((item, idx) => (
                    <div key={idx} className="rounded-br-3xl bg-primary w-full md:h-[300px] text-white  grid grid-cols-1 divide-y p-4 my-[20px]">
                        <div className="flex justify-between">
                            <div className="md:w-[67px] md:h-[25px] w-[50px] h-[19px] rounded-lg bg-white text-[#000000B2] text-center mr-1 md:text-base text-[8px] font-bold p-1 md:p-0">
                                {item.status}
                            </div>
                            <div className="">
                                <p className="font-medium text-[10px] leading-[12px] mb-1 md:text-[24px] md:leading-[28px] md:mb-4">{item.name}</p>
                                <p className="font-normal text-[8px] leading-[10px] md:text-[16px] md:leading-[28px] max-w-[50%] ">{item.summary}</p>
                            </div>
                            <div className="px-3">
                                <p className="font-medium text-[10px] leading-[12px] mb-1 md:text-[24px] md:leading-[28px] md:mb-4">Location</p>
                                <p className="font-normal text-[8px] leading-[10px] md:text-[16px] md:leading-[28px]">{item.location} </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="w-[40px] h-[40px] rounded-full bg-[#D9D9D9] p-2  ">
                                    <Image src={"/images/link.svg"} height={20} width={17} />
                                </div>
                                <div className="ml-7 w-[40px] h-[40px] rounded-full bg-[#D9D9D9] p-1">
                                    <Link className="text-[#000000] text-[10px]" href={"/"}>Donate</Link>
                                </div>
                            </div>

                        </div>
                        <div className="flex justify-between pt-5">
                            <div className="">
                                <div className="font-normal text-[8px] leading-[12px] md:text-[24px] md:leading-[36px]">
                                    {item.DonationReceived}
                                </div>
                                <div className=" font-medium text-[10px] leading-[15px] md:text-[20px] md:leading-[30px]">
                                    Donation received
                                </div>
                            </div>
                            <div className="">
                                <div className="font-normal text-[8px] leading-[12px] md:text-[24px] md:leading-[36px]">
                                    {item.moneyDonated}
                                </div>
                                <div className=" font-medium text-[10px] leading-[15px] md:text-[20px] md:leading-[30px]">
                                    Money Donated
                                </div>
                            </div>
                            <div className="">
                                <div className="font-normal text-[8px] leading-[12px] md:text-[24px] md:leading-[36px]">
                                    {item.activeCampaings}
                                </div>
                                <div className=" font-medium text-[10px] leading-[15px] md:text-[20px] md:leading-[30px]">
                                    Active campains
                                </div>
                            </div>
                            <div className="">
                                <div className="font-normal text-[8px] leading-[12px] md:text-[24px] md:leading-[36px]">
                                    {item.openedCharity}
                                </div>
                                <div className=" font-medium text-[10px] leading-[15px] md:text-[20px] md:leading-[30px]">
                                    Opened Charity
                                </div>
                            </div>
                            <div className="">
                                <div className="font-normal text-[8px] leading-[12px] md:text-[24px] md:leading-[36px]">
                                    {item.totalCost}
                                </div>
                                <div className=" font-medium text-[10px] leading-[15px] md:text-[20px] md:leading-[30px]">
                                    Total Cost
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
            <Footer />
        </div>
    )
}

