import Image from "next/image"
import Link from "next/link";
const Login = () => {
    return (
        <div className="flex justify-items-center">
            <div className="p-6">
                <div className="pb-[30px] text-primary">
                    <Link href={"/"}>
                        LOGO
                    </Link>
                </div>
                <div className=" flex gap-[130px]">
                    <div className="hidden md:block">
                        <div className="relative block md:block min-w-[556px] w-[556px] h-[550px]">
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
                    <div className="">
                        <div className="mb-[40px] text-primary font-bold text-[20px] ">
                            Sign into LeenCharity Org.
                        </div>
                        <div className="mb-[40px]">
                            <input placeholder="email or phone number" type="text" className="focus:outline-none p-4 w-[322px] h-[62px] bg-[#00C89C1A] rounded-lg md:w-[369px]" name="" id="" />
                        </div>
                        <div className="mb-[80px]">
                            <input placeholder="password" type="password" className="focus:outline-none p-4 w-[322px] h-[62px] bg-[#00C89C1A] rounded-lg md:w-[369px]" name="" id="" />
                        </div>
                        <div className="">
                            <button className="bg-primary text-white w-[322px] h-[59px] rounded-br-lg md:w-[369px] " type="submit"> Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;