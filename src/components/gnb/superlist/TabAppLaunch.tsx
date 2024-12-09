'use client';

import { Checkbox } from "../chkbox/Checkbox";

interface TabAppLaunchProps{
    title: string;
    description: string;
    images?: { src: string; zIndex?: string }[];
    checkboxs: string[];
}

const images = [
    { src: "/assets/img-terms1.jpg" , zIndex: "z-0"},
    { src: "/assets/img-terms1.jpg" , zIndex: "z-10"},
    { src: "/assets/img-terms1.jpg" , zIndex: "z-20"},
    { src: "/assets/img-terms1.jpg" , zIndex: "z-30"},
]

export const TabAppLaunch = ({
    title,
    description,
    images = [],
    checkboxs
}: TabAppLaunchProps) => {
    return (
        <div className="flex flex-col h-full gap-[18px] p-6 border-2 rounded-[32px] bg-white">
            <div className="flex items-center">
                {images.map((image , index) => (
                    <img
                    key={index}
                    src={image.src}
                    alt=""
                    className="w-[34px] h-[34px] rounded-full -mr-[15px] ${image.zIndex}" 
                />
                ))}
                <p className="pl-[26px] text-countColor">+4</p>
            </div>
            <h3 className="text-[40px] font-semibold text-ListsText">App Launch</h3>
            <p className="text-lg font-medium">Hey team, here's a quick recap of what we're working on ahead of the launch. Feel free to add any more notes or details to the tasks.</p>
            <div>
                <Checkbox label="Design system update1" />
                <Checkbox label="Design system update2" />
                <Checkbox label="Design system update3" />
            </div>
        </div>
    );
};