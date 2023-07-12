import Image from "next/image";
import Link from "next/link";


export const Services = () => {
    return <div className="m-[30px]">

        <div className="block w-full">
            <div className="grid md:grid-cols-3 gap-6 ">
                <div className="w-[343px] bg-primary max-w-[400px] h-[300px] md:h-[400px] flex flex-col text-white relative">
                    <div className="p-[25px] mt-6 ml-6 w-20 h-20 bg-[#D9D9D9]  rounded-full">
                        <Image height={30} width={30} src={"/images/zakkah.svg"} />
                    </div>
                    <div className="ml-[24px] mt-[20px] max-w-[285px] md:max-w-[336px] ">
                        <h1 className="text-[14px] leading-4 md:font-medium md:text-[24px] md:leading-7 ">Zakah and Sadaqah services</h1>
                        <p className="mt-[20px] text-[15px] leading-7">Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                    </div>
                    <div className="absolute right-[20px] bottom-[21px]">
                        <Link href={"/"} >
                            <button className="mt- text-primary w-[130px] h-[50px] rounded-br-lg bg-white  ">
                                View more
                            </button>
                        </Link>
                    </div>
                </div>
                <div className=" bg-primary max-w-[400px] h-[300px] md:h-[400px] flex flex-col text-white relative">
                    <div className="p-[25px] mt-6 ml-6 w-20 h-20 bg-[#D9D9D9]  rounded-full">
                        <Image height={30} width={30} src={"/images/orphan.svg"} />
                    </div>
                    <div className="ml-[24px] mt-[20px] max-w-[336px] ">
                        <h1 className="font-medium text-[24px] leading-7 ">Orphan and prisoners welfare</h1>
                        <p className="mt-[20px] text-[15px] leading-7">Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                    </div>
                    <div className="absolute right-[20px] bottom-[21px]">
                        <Link href={"/"} >
                            <button className="mt- text-primary w-[130px] h-[50px] rounded-br-lg bg-white  ">
                                View more
                            </button>
                        </Link>
                    </div>
                </div>
                <div className=" bg-primary max-w-[400px] h-[300px] md:h-[400px] flex flex-col text-white relative">
                    <div className="p-[25px] mt-6 ml-6 w-20 h-20 bg-[#D9D9D9]  rounded-full">
                        <Image height={30} width={30} src={"/images/water.svg"} />
                    </div>
                    <div className="ml-[24px] mt-[20px] max-w-[336px] ">
                        <h1 className="font-medium text-[24px] leading-7 ">Water Aid</h1>
                        <p className="mt-[20px] text-[15px] leading-7">Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                    </div>
                    <div className="absolute right-[20px] bottom-[21px]">
                        <Link href={"/"} >
                            <button className="mt- text-primary w-[130px] h-[50px] rounded-br-lg bg-white  ">
                                View more
                            </button>
                        </Link>
                    </div>
                </div>
                <div className=" bg-primary max-w-[400px] h-[300px] md:h-[400px] flex flex-col text-white relative">
                    <div className="p-[25px] mt-6 ml-6 w-20 h-20 bg-[#D9D9D9]  rounded-full">
                        <Image height={30} width={30} src={"/images/building.svg"} />
                    </div>
                    <div className="ml-[24px] mt-[20px] max-w-[336px] ">
                        <h1 className="font-medium text-[24px] leading-7 ">Building Islamic schools and mosques</h1>
                        <p className="mt-[20px] text-[15px] leading-7">Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                    </div>
                    <div className="absolute right-[20px] bottom-[21px]">
                        <Link href={"/"} >
                            <button className="mt- text-primary w-[130px] h-[50px] rounded-br-lg bg-white  ">
                                View more
                            </button>
                        </Link>
                    </div>
                </div>
                <div className=" bg-primary max-w-[400px] h-[300px] md:h-[400px] flex flex-col text-white relative">
                    <div className="p-[25px] mt-6 ml-6 w-20 h-20 bg-[#D9D9D9]  rounded-full">
                        <Image height={30} width={30} src={"/images/daawah.svg"} />
                    </div>
                    <div className="ml-[24px] mt-[20px] max-w-[336px] ">
                        <h1 className="font-medium text-[24px] leading-7 ">Da'awah committee</h1>
                        <p className="mt-[20px] text-[15px] leading-7">Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                    </div>
                    <div className="absolute right-[20px] bottom-[21px]">
                        <Link href={"/"} >
                            <button className="mt- text-primary w-[130px] h-[50px] rounded-br-lg bg-white  ">
                                View more
                            </button>
                        </Link>
                    </div>
                </div>
                <div className=" bg-primary max-w-[400px] h-[300px] md:h-[400px] flex flex-col text-white relative">
                    <div className="p-[25px] mt-6 ml-6 w-20 h-20 bg-[#D9D9D9]  rounded-full">
                        <Image height={30} width={30} src={"/images/emergency.svg"} />
                    </div>
                    <div className="ml-[24px] mt-[20px] max-w-[336px] ">
                        <h1 className="font-medium text-[24px] leading-7 ">Emergency & Health care services</h1>
                        <p className="mt-[20px] text-[15px] leading-7">Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                    </div>
                    <div className="absolute right-[20px] bottom-[21px]">
                        <Link href={"/"} >
                            <button className="mt- text-primary w-[130px] h-[50px] rounded-br-lg bg-white  ">
                                View more
                            </button>
                        </Link>
                    </div>
                </div>


            </div>
        </div>


    </div>
}