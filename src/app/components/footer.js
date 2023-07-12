import Link from "next/link"
import Image from "next/image"
export const Footer = () => {

    const navLinks = [
        {
            name: "About us",
            to: "/about"
        },
        {
            name: "Services",
            to: "/services"
        },
        {
            name: "Contact us",
            to: "/contact"
        },
        {
            name: "Home",
            to: "/home"
        }
    ]
    const helpLinks = [
        {
            name: "FAQ",
            to: "/"
        },
        {
            name: "Terms of use",
            to: "/"
        }, {
            name: "Privacy policy",
            to: "/"
        }
    ]
    const socials = [
        {
            name: "facebook",
            to: "/",
            icon: "/images/facebook.svg"
        },
        {
            name: "linkedin",
            to: "/",
            icon: "/images/linkedin.svg"
        },
        {
            name: "instagram",
            to: "/",
            icon: "/images/instagram.svg"
        },
    ]

    return (
        <div className="bg-footerbg">

            <div className=" mx-[30px] mt-[58px] py-[50px] flex  flex-col md:mt-[120px] md:flex-row md:justify-between md:py-[100px]">
                <div className="flex flex-col self-center">
                    <div className="">
                        <div className="text-primary font-medium text-[24px] leading-[36px] ">
                            LOGO
                        </div>
                        <div className="mt-[47px] md:mt-[32px] text-textblack font-normal text-[10px] leading-[15px] md:text-[16px] md:leading-[24px]">
                            280 Nothern Kaduna 326-324 Kaduna 125-1400.
                        </div>
                    </div>
                    <div className="">
                        <div className="mt-10 mb-[33px] md:mb-[24px] font-normal text-[#000504] text-[14px] leading-[21px]  md:text-[20px] md:leading-[30px] ">
                            Newsletter
                        </div>
                        <div className="">
                            <input placeholder="Input your email" type="text" className="bg-footerbg focus:outline-none w-[310px] border-primary border-b-2 " />
                        </div>
                    </div>

                </div>
                <div className="flex gap-[80px] mt-[70px] justify-center">
                    <div className="">
                        <div className="mb-10 font-medium text-[14px] leading-[21px] md:text-[20px] md:leading-[30px]">
                            Navigation
                        </div>

                        <ul className="">
                            {navLinks.map((item, idx) => (

                                <Link
                                    className="font-normal text-[10px] leading-[15px] md:text-[16px] md:leading-[24px]"
                                    key={idx}
                                    href={item.to}
                                >
                                    <li className="p-2">
                                        {item.name}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="">
                        <div className="mb-10 font-medium text-[14px] leading-[21px] md:text-[20px] md:leading-[30px]">
                            Help
                        </div>

                        <ul>
                            {helpLinks.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.to}
                                    className="font-normal text-[10px] leading-[15px] md:text-[16px] md:leading-[24px]"
                                >
                                    <li className="p-2">{item.name}</li>
                                </Link>
                            ))}

                        </ul>
                    </div>
                </div>
                <div className="mt-[76px] ">
                    <div className="text-center mb-10 font-medium text-[14px] leading-[21px] md:text-[20px] md:leading-[30px]">
                        Follow us on
                    </div>
                    <div className="flex justify-center">
                        {socials.map((item, idx) => (
                            <Link
                            className=" p-3"
                                href={item.to}
                                key={idx}
                            >
                                <Image src={item.icon} height={25} width={25} />
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}