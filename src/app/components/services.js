import Image from "next/image";
import Link from "next/link";

const servicesArray = [
    {
        id: 1,
        header: "Zakah and Sadaqah services",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting ",
        icon: "/images/zakkah.svg"
    },
    {
        id: 2,
        header: "Orphan and prisoners welfare",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting ",
        icon: "/images/orphan.svg"
    },
    {
        id: 3,
        header: "Water Aid",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting ",
        icon: "/images/water.svg"
    },
    {
        id: 4,
        header: "Building Islamic schools and mosques",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting ",
        icon: "/images/building.svg"
    },
    {
        id: 5,
        header: "Da'awah committee",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting ",
        icon: "/images/daawah.svg"
    },
    {
        id: 6,
        header: "Emergency & Health care services",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting ",
        icon: "/images/emergency.svg"
    },

]
export const Services = () => {
    return <div className="m-[30px]">

        <div className="block w-full">
            <div className="grid md:grid-cols-3 gap-6 ">
                {
                    servicesArray.map((item, idx) => (
                        <div className="w-full bg-primary p-4 flex flex-col text-white relative">
                            <div className="p-[25px] mt-6 ml-6 w-20 h-20 bg-[#D9D9D9]  rounded-full">
                                <Image height={30} width={30} src={item.icon} />
                            </div>
                            <div className="ml-[24px] mt-[20px] mb-16 md:max-w-[336px] ">
                                <h1 className="text-[14px] leading-4 md:font-medium md:text-[24px] md:leading-7 ">{item.header}</h1>
                                <p className="mt-[20px] text-[15px] leading-7">{item.text} </p>
                            </div>
                            <div className="absolute right-[20px] md:bottom-[21px] bottom-[10px]">
                                
                                <Link href={`/services/${item.id}`} >
                                    <button className="mt- text-primary w-[130px] h-[50px] rounded-br-lg bg-white  ">
                                        View more
                                    </button>
                                </Link>
                            </div>
                        </div>

                    ))
                }



            </div>
        </div>


    </div>
}