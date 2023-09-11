import { NavBar } from "@comp/NavBar";
import Image from "next/image";

export default function Page() {
    const contactInfo = [
        {
            name: "phone",
            icon: "/images/phone.svg",
            info: "08012345678"
        },
        {
            name: "mail",
            icon: "/images/mail.svg",
            info: "leencharityislam@gmail.com"
        },
        {
            name: "address",
            icon: "/images/address.svg",
            info: " kaduna ,kaduna, kaduna"
        },
    ]
    return (
        <div className="mx-[20px] my-[30px]">
            <NavBar />
            <h1 className="ml-[50px] font-normal text-primary text-[24px] leading-[28px]">Contact Us</h1>
            <div className="text-center">
                <div className="font-[#000] font font-bold text-[40px] leading-[48px] ">
                    Contact Us
                </div>
                <div className="font-[#717171] font-medium md:text-[18px] md:leading-5 text-[10px] leading-3">
                    Any questions , remarks or want to sponsor a project ? Just write us a message.
                </div>
            </div>
            <div className="grid justify-items-center">
                <div className="md:w-[70%] w-full h-[647px] shadow-2xl rounded-md p-4 flex">
                    <div className="w-[45%] h-full bg-primary text-white p-6 rounded-xl">
                        <div className="font-bold md:text-[28px] text-[9px] leading-8 pb-[160px]">
                            Contact Information
                        </div>
                        <div className="">
                            {contactInfo.map((item, idx) => (
                                <div className="flex md:gap-6 gap-3 pb-[50px]">
                                    <div className="h-[18px] w-[18px]">
                                        <Image key={idx} src={item.icon} width={18} height={18} />
                                    </div>
                                    <div className="text-[9px]">
                                        {item.info}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="">
                        <div className="grid grid-cols-2 gap-6 pt-8 px-4">
                            <input className="border-b-2 focus:outline-none pb-4" placeholder="First Name" type="text" />
                            <input className="border-b-2 focus:outline-none pb-4" placeholder="Last Name" type="email" />
                            <input className="border-b-2 focus:outline-none pb-4" placeholder="Email" type="email" />
                            <input className="border-b-2 focus:outline-none pb-4" placeholder="Phone" type="number" />
                        </div>
                        <h1 className="pl-4 pt-6">Select Subject?</h1>
                        <div className="pt-4 px-4 md:flex md:justify-between ">
                            <div className="pb-3">
                                <input type="radio" name="type" />
                                <label htmlFor="type" className="pl-3">Inquiry</label>
                            </div>
                            <div className="pb-3">
                                <input type="radio" name="type" />
                                <label htmlFor="type" className="pl-3">Sponsor a project</label>
                            </div>
                            <div className="pb-3">
                                <input type="radio" name="type" />
                                <label htmlFor="type" className="pl-3">Other</label>
                            </div>

                        </div>
                        <div className="pt-6 pl-4 flex flex-col">
                            <div className="">
                                <label htmlFor="message">Message</label>
                                <input placeholder="Write message" className="text-[15px] w-full border-b-2 focus:outline-none" type="text" name="" id="" />
                            </div>
                            <div className="flex justify-end">
                                <button className="mt-11 bg-primary text-white h-[54px] w-[214px] rounded-lg ">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}