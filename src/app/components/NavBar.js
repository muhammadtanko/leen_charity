"use client";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { RiMenu3Fill, } from "react-icons/ri"
import Link from "next/link"
import { useState } from "react";
import { usePathname } from "next/navigation"

const navItem = [
    {
        name: "Home",
        to: "/",
    },
    {
        name: "Services",
        to: "/services",
    },
    {
        name: "Gallery",
        to: "/gallery",
    }
]

export const NavBar = () => {

    const pathName = usePathname()
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    return (
        <div className="font-WorkSans">
            <div className="flex justify-between px-6 py-4 mx-[30px]">
                <div className="block md:hidden pt-1">
                    {open ? (
                        <div onClick={() => setOpen(false)}>
                            <AiOutlineCloseCircle />
                        </div>
                    ) : (
                        <div onClick={handleOpen}>
                            <RiMenu3Fill />
                        </div>
                    )}

                </div>
                <Link href="/">
                    <div className="hidden md:block text-primary md:text-[24px] font-[700] cursor-pointer">
                        <h1>LOGO</h1>
                    </div>
                </Link>

                <div className="hidden md:block lg:block"  >
                    {navItem.map((item, idx) => {
                        // const isActive = pathName.startsWith(item.to)
                        // console.log(typeof(pathName));
                        // console.log(item.to);
                        return (
                            <Link
                                href={item.to}
                                key={idx}
                                // className={isActive ? "mx-4 text-primary hover:text-primary " : "mx-4 text-black hover:text-primary active:text-primary"}
                            className="mx-4 text-black hover:text-primary active:text-primary"
                            >
                                {item.name}
                            </Link>
                        )

                    })}
                </div>
                <div className="hidden md:block">
                    <Link
                        href="/login"
                    >
                        <button className="py-4 px-6 rounded-br-xl md:rounded-br-3xl text-primary border-2 border-primary">Log in</button>
                    </Link>
                </div>
                <div className="block md:hidden">
                    <Link href="/login">
                        <BsPersonFill />
                    </Link>
                </div>

            </div>
            {open &&
                <div className="px-6 z-100 md:hidden min-h-screen">
                    <ul>
                        {navItem.map((item, idx) => (
                            <Link
                                href={item.to}
                                key={idx}
                                className="mx-4 font-bold"
                            >
                                <li >
                                    {item.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                    <Link href="/login">
                        <button className="text-white w-full rounded py-4 px-3 bg-primary">Log in</button>
                    </Link>
                </div>
            }

        </div>
    )
}