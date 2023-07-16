"use client";
import { usePathname } from "next/navigation";
import { NavBar } from "@comp/NavBar"
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
                <div className="text-primary font-normal text-[24px] leading-[28px]">
                    {service[0].name}
                </div>
                {service[0].previousProjects.map((item, idx) => (
                    <div key={idx} className="bg-primary w-full h-[300px] text-white rounded-br-2xl grid grid-cols-1 divide-y p-4 mb-[20px]">
                        <div className="flex justify-between">
                            <div className="">
                                <p className="font-medium text-[24px] leading-[28px] mb-4">{item.name}</p>
                                <p className="font-normal text-[16px] leading-[28px] max-w-[50%] ">{item.summary}</p>
                            </div>
                            <div className="px-3">
                                <p className="font-medium text-[24px] leading-[28px] mb-4 ">Location</p>
                                <p className="font-normal text-16px leading-[28px]">{item.location} </p>
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
                        <div className="flex justify-between">
                            <div className="">
                                <div className="font-medium text-[10px] leading-[15px] md:text-[20px] md:leading-[30px]">Donation received</div>
                                <div className="font-normal text-[8px] leading-[12px] md:text-[24px] md:leading-[36px]">{item.DonationReceived} </div>
                            </div>
                            <div className="">
                                <div className="font-medium text-[10px] leading-[15px] md:text-[20px] md:leading-[30px]">Money Donated</div>
                                <div className="font-normal text-[8px] leading-[12px] md:text-[24px] md:leading-[36px]">{item.moneyDonated} </div>
                            </div>
                            <div className="">
                                <div className="font-medium text-[10px] leading-[15px] md:text-[20px] md:leading-[30px]">Active campains</div>
                                <div className="font-normal text-[8px] leading-[12px] md:text-[24px] md:leading-[36px]">{item.activeCampaings} </div>
                            </div>
                            <div className="">
                                <div className="font-medium text-[10px] leading-[15px] md:text-[20px] md:leading-[30px]">Opened Charity</div>
                                <div className="font-normal text-[8px] leading-[12px] md:text-[24px] md:leading-[36px]">{item.openedCharity} </div>
                            </div>
                            <div className="">
                                <div className="font-medium text-[10px] leading-[15px] md:text-[20px] md:leading-[30px]">Total Cost</div>
                                <div className="font-normal text-[8px] leading-[12px] md:text-[24px] md:leading-[36px]">{item.totalCost} </div>
                            </div>
                        </div>
                    </div>
                ))}
            </main>

        </div>
    )
}

