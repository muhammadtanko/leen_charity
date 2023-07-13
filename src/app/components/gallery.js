
import Link from "next/link"
import Image from "next/image"


export const ProjectsSumarry = () => {

    const summary = [
        {
            text: "View Active Projects",
            to: "/"
        },
        {
            text: "View Ongoing Projects",
            to: "/"
        },
        {
            text: "View Privious Projects",
            to: "/"
        }
    ]

    return (
        <div className="m-[50px] ">


            {
                summary.map((item, idx) => (
                    <div className="bg-primary w-full h-[120px] rounded-br-[30px] flex justify-between p-[25px] mb-[25px] place-items-center">

                        <div className="text-white font-[medium] text-[19px] leading-[20px] md:text-[32px] md:leading-[37px] ">
                            {item.text}
                        </div>
                        <div className="h-[70px] w-[70px] md:h-[70px] md:w-[70px] rounded-full bg-[#D9D9D9] p-[20px] ">
                            <Link href={item.to}
                                key={idx} >
                                <Image
                                    width={80}
                                    height={80}
                                    src={"/images/arrow-up.svg"}>

                                </Image>
                            </Link>
                        </div>
                    </div>

                ))
            }

        </div>
    )
}