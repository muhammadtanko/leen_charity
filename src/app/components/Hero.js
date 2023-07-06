import Image from "next/image"
import Link from "next/link"


export const Hero = () => {
    return (
        <div className="px-6 mx-[30px]">
            <div className="flex justify-between">
                <div className="font-bold mt-[36px]">
                    <p className="text-primary font-bold max-w-[250px]  text-sm md:text-4xl md:max-w-xl">Leen charity Organization is an
                        Organization that comes with...</p>
                    <p className="font-medium text-sm  max-w-[348px] md:max-w-[672px] md:text-2xl ">
                        Lorem ipsum dolor sit amet consectetur. Et vitae sapien odio dis. Scelerisque dolor fermentum pellentesque tincidunt gravida praesent sed.
                    </p>
                    <p className="mt-6 font-normal text-sm  max-w-[348px] md:max-w-[672px] md:text-2xl ">
                        Lorem ipsum dolor sit amet consectetur. Et vitae sapien odio dis. Scelerisque dolor fermentum pellentesque tincidunt gravida praesent sed.
                    </p>
                    <Link href="/donate">
                    <button className="mt-[29px] px-4 py-6 rounded-br-3xl text-white bg-primary"> Donate Now</button>
                    </Link>
                </div>
                <div className="relative hidden md:block  w-[556px] h-[570px]">
                    <div className="absolute z-10">
                        <Image height={362} width={242} src="/images/img1.png" />
                    </div>
                    <div className="absolute bottom-10 left-24">
                        <Image height={457} width={367} src="/images/img2.png" />
                    </div>
                    <div className="absolute right-0 bottom-0">
                        <Image height={362} width={242} src="/images/img3.png" />
                    </div>
                </div>
            </div>

        </div>

    )
}

