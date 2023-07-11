import Image from "next/image"


export const DonationCta = () => {
    return (
        <div className="m-[30px] flex flex-col md:flex-row md:gap-20 ">
            <div className="relative w-[650px] h-[570px] min-w-[600px] ">
                <div className="absolute top-0 left-0 z-10 ">
                    <img className="w-[151px] h-[207px] md:w-[283px] md:h-[380px] " src="/images/img1.png" alt="" />
                </div>
                <div className="absolute top-[85px] left-[81px] md:top-[101px] md:left-[111px]">
                    <img className="w-[228px] h-[291px] md:w-[428px] md:h-[533px] " src="/images/img2.png" alt="" />
                </div>
                <div className="absolute left-[210px] top-[178px] md:top-[283px] md:left-[350px] ">
                    <img className="w-[151px] h-[208px] md:w-[283px] md:h-[380px] " src="/images/img3.png" alt="" />
                </div>
            </div>
            <div className=" md:block md:flex md:flex-col ">
                <div className=" text-primary font-normal text-[24px] leading-[36px] ">Water Aid</div>
                <div className="mt-2 font-semibold text-[48px] leading-[57px] max-w-[500px] ">Lorem ipsum dolor sit amet consectetur.</div>
                <div className="mt-[32px] font-normal text-[16px] leading-[24px] md:max-w-[592px] ">Lorem ipsum dolor sit amet consectetur. Magna mauris vitae ipsum augue ultrices nulla neque. Amet nec odio enim amet sit id orci. Laoreet nibh
                    ornare sed adipiscing. Pretium molestie enim viverra enim pellentesque nunc. Nec ultrices interdum aliquet imperdiet. Neque enim nisi donec egestas lobortis.</div>
                <div className="mt-[32px] w-[585px] h-[126px] border-2 border-primary flex justify-between ">
                    <div className="flex flex-col place-self-center ">
                        <div className="">
                            Donation Goal
                        </div>
                        <div className="">
                            N1000000
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            Donation Raised
                        </div>
                        <div className="">
                            100000
                        </div>
                    </div>
                </div>
                <div className="">
                    <button className="mt-[32px] bg-primary px-[24px] py-[16px] rounded-br-[30px] text-white ">Donate now</button>
                </div>
            </div>
        </div>
    )
}