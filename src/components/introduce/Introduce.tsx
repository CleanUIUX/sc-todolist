'use client';

import Link from "next/link";
import { Button } from "../button/Button";

export const Introduce = () => {
    return(
        <section>
            <div className="flex flex-col gap-4 pt-20 text-center">
                <h2>Home to <br /> all your <span className="pl-20 text-mainColor bg-[url('/assets/icon-chk.svg')] bg-no-repeat bg-[0_50%] bg-[length:70px_70px] inline-block">lists</span></h2>
                <p className="pt-1 text-xl font-medium text-titleColor">Take notes, organize your work, and get more done with AI. <br /> Simple, blazingly fast, and wrapped in a beautiful UI.</p>
                <div className="flex justify-center items-center gap-4 mt-4">
                    <Link href={"/"}>
                        <Button 
                            title="Start today — it’s free"
                            bgColor="bg-mainColor"
                            textColor="text-white"
                            customClass="text-xl font-bold"
                            />
                    </Link>
                    <Link href={"/"}>
                        <Button
                            title="Go Pro ✨"
                            bgColor="bg-proColor"
                            textColor="text-white"
                            customClass="text-xl font-bold"
                        />
                    </Link> 
                   

                    
                </div>
            </div>
        </section>
    )
}