import Link from "next/link"
import Image from "next/image"
export const Testimonial = () => {
    return (
        <div className="px-6 py-4">
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <div className="">
                        <span className="text-primary text-sm font-normal md:text-2xl ">Testimonial</span>
                        <p className="text-black font-semibold text-base md:text-5xl md:max-w-[450px] ">
                            What People Say About Us
                        </p>
                    </div>
                    <div className="self-end">
                        <Link href="/">
                            <button className="bg-primary rounded-tr-[29px] w-10 md:w-[61px] h-[64px] ">
                                <Image className="w-[50px] h-[40px] " width={50} height={40} src={"/images/arrow.svg"}></Image>
                            </button>
                        </Link>

                    </div>
                </div>
                <div className="mt-[53px] grid md:grid-cols-3 gap-4">
                    <div className="border-2 border-primary h-[452px] flex flex-col ">
                        <div className="mt-[40px] ml-[24px] w-[24px] h-[43px] md:mt-[37px] md:ml-[13px] md:w-[36px] md:h-[56px] ">
                            <Image className="w-full h-auto" src="/images/double.svg" width={0} height={0} sizes="100vw" />
                        </div>
                        <div className="font-normal mx-[24px] mb-[67px] ">
                            <div className="text-[#1D1D1D] leading-[35px] text-[14px]  md:text-[24px] ">Kindness</div>
                            <div className="mt-4 text-[10px] leading-[15px] md:text-[16px] leading-[24px] ">Lorem Ipsum is simply dummy text  Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text  Lorem Ipsum is simply dummy text Lorem Ipsum is </div>
                        </div>
                        <div className="flex gap-[10px] md:gap-[15px] mx-[24px]">
                            <div className="w-[53px] h-[60px] md:w-[78px] h-[78px] ">
                                <Image className="w-full h-auto" src="/images/bash.svg" width={0} height={0} />
                            </div>
                            <div className="self-center flex flex-col font-normal">
                                <div className="text-[#454545] md:leading-[36px] text-[24px] ">Bashir Muhammad</div>
                                <div className="">Senior Gardener Farmer</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 border-primary h-[452px] flex flex-col ">
                        <div className="mt-[40px] ml-[24px] w-[24px] h-[43px] md:mt-[37px] md:ml-[13px] md:w-[36px] md:h-[56px] ">
                            <Image className="w-full h-auto" src="/images/double.svg" width={0} height={0} sizes="100vw" />
                        </div>
                        <div className="font-normal mx-[24px] mb-[67px] ">
                            <div className="text-[#1D1D1D] leading-[35px] text-[14px]  md:text-[24px] ">Ethics & Morality</div>
                            <div className="mt-4 text-[10px] leading-[15px] md:text-[16px] leading-[24px] ">Lorem Ipsum is simply dummy text  Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text  Lorem Ipsum is simply dummy text Lorem Ipsum is </div>
                        </div>
                        <div className="flex gap-[10px] md:gap-[15px] mx-[24px]">
                            <div className="w-[53px] h-[60px] md:w-[78px] h-[78px] ">
                                <Image className="w-full h-auto" src="/images/bash.svg" width={0} height={0} />
                            </div>
                            <div className="self-center flex flex-col font-normal">
                                <div className="text-[#454545] md:leading-[36px] text-[24px] ">Bashir Muhammad</div>
                                <div className="">Senior Gardener Farmer</div>
                            </div>
                        </div>
                    </div>


                    <div className="border-2 border-primary h-[452px] flex flex-col ">
                        <div className="mt-[40px] ml-[24px] w-[24px] h-[43px] md:mt-[37px] md:ml-[13px] md:w-[36px] md:h-[56px] ">
                            <Image className="w-full h-auto" src="/images/double.svg" width={0} height={0} sizes="100vw" />
                        </div>
                        <div className="font-normal mx-[24px] mb-[67px] ">
                            <div className="text-[#1D1D1D] leading-[35px] text-[14px]  md:text-[24px] ">Humanity</div>
                            <div className="mt-4 text-[10px] leading-[15px] md:text-[16px] leading-[24px] ">Lorem Ipsum is simply dummy text  Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text  Lorem Ipsum is simply dummy text Lorem Ipsum is </div>
                        </div>
                        <div className="flex gap-[10px] md:gap-[15px] mx-[24px]">
                            <div className="w-[53px] h-[60px] md:w-[78px] h-[78px] ">
                                <Image className="w-full h-auto" src="/images/bash.svg" width={0} height={0} />
                            </div>
                            <div className="self-center flex flex-col font-normal">
                                <div className="text-[#454545] md:leading-[36px] text-[24px] ">Bashir Muhammad</div>
                                <div className="">Senior Gardener Farmer</div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}