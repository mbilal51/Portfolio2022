import Link from "next/link"
import React from "react"
import Image from "next/image"
import logo from "../public/limelight-logo.png"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import ThemeSwitch from "@components/ThemeSwitch";

const Navigation = () => {
    return (
        <div className="sticky top-0 z-20 py-2 md:py-6 md:mb-6 dark:bg-black bg-white">
            <div className="container px-4 mx-auto lg:max-w-5xl flex items-center justify-between">
                <div className="items-start flex">
                <RoughNotationGroup show={true}>
                {/* <img src="/logo.png" className=" mr-2 w-1/6"/> */}
                {/* <Image 
                src={logo} 
                width={320}
                height={100}
                />
                 */}
                    <Link href="/">
                        <a className={"font-medium tracking-wider transition-colors text-gray-900 dark:hover:text-sky-500 hover:text-sky-500 uppercase dark:text-white"}>
                        <RoughNotation type="box" color="blue" strokeWidth={1}>Mohamed Bilal</RoughNotation> 
                        </a>
                    </Link>
                    </RoughNotationGroup>
                </div>
                
                <div className="space-x-5 flex flex-row items-center">
                     <Link href="/Experience">
                        <a className="font-medium tracking-wider transition-colors text-gray-900 dark:hover:text-sky-500 hover:text-sky-500 uppercase dark:text-white">
                            Experience
                        </a>
                    </Link>
                    <ThemeSwitch/>
                </div>
            </div>
        </div>
    )
}

export default Navigation;