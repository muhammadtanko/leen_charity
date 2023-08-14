"use client";
import { useState } from "react";
import Image from "next/image";



export default function Trial() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="">
            <div className="relative inline-block text-left">
                <button
                    type="button"
                    className="px-4 py-2 border-2 border-primary rounded-br-[30px] flex text-primary"
                    onClick={toggleDropdown}
                >
                    Payment Type<Image className="pt-2 pl-2" src={"/images/dropDown.svg"} height={35} width={30}/>
                </button>
                <div
                    className={`absolute ${isOpen ? "" : "hidden"
                        } mt-2 bg-white w-full text-black border rounded-md shadow-lg`}
                >
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Card
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Transfer
                    </a>
                </div>
            </div>
        </div>
    )
}