'use client';

import React from "react";
import Image from "next/image";
import 로고이미지 from "@/public/assets/logo.png"
import Link from "next/link";

export const Gnb = () => {
    return(
        <nav className="px-10 py-7 border-t-8">
            <h1>
                <Link href={"/"} className="flex items-center">
                    <Image src = {로고이미지} alt="로고이미지" className="inline-block w-6"/><span className="h-auto pl-3 font-bold text-mainColor">Superlist</span>
                </Link>
            </h1>
        </nav>
    )
}