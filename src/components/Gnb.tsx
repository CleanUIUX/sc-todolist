'use client';

import React from "react";
import Image from "next/image";
import 로고이미지 from "@/public/assets/logo.png"
import Link from "next/link";

export const Gnb = () => {
    return(
        <nav className="flex gap-7 relative px-10 py-7 border-t-5 border-custom-red">
            <h1>
                <Link href={"/"} className="flex items-center">
                    <Image src = {로고이미지} alt="로고이미지" className="inline-block w-6"/><span className="h-auto pl-3 font-bold text-mainColor">Superlist</span>
                </Link>
            </h1>
            <ul className="flex gap-7 font-bold">
                <li><Link href={"/"}>MacOS</Link> </li>
                <li><Link href={"/"}>Web</Link></li>
                <li><Link href={"/"}>iOS</Link></li>
                <li><Link href={"/"}>Android</Link></li>
            </ul>
            <ul className="flex gap-7 absolute right-10 font-bold after:content-[''] after:block after:w-6 after:-ml-3 after:bg-[url('../public/assets/icon-next.svg')] after:bg-no-repeat after:bg-[length:20px_20px] after:bg-center">
                <li><Link href={"/"}>Updates</Link></li>
                <li><Link href={"/"}>Pricing</Link></li>
                <li className="text-mainColor"><Link href={"/"}>Sign In</Link></li>
            </ul>
        </nav>
        
    )
}