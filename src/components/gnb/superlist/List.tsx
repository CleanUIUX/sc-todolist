'use client';
import { Component, useState } from "react";
import { TabAppLaunch } from "./TabAppLaunch";
import { TabKitchenReno } from "./TabKitchenReno";
import { title } from "process";

const list =[1, 2, 3, 4]

const listItems = [
    {
        id: 1, 
        emoji: "💥", 
        text: "App Launch", 
        component: TabAppLaunch, 
        props: {
            title: "App Luncher",
            decription: "Quick recap of what we're working on for the launch.",
            images: [
                { src: "/assets/img-terms1.jpg", zIndex: "z-0" },
                { src: "/assets/img-terms1.jpg", zIndex: "z-10" },
                { src: "/assets/img-terms1.jpg", zIndex: "z-20" },
                { src: "/assets/img-terms1.jpg", zIndex: "z-30" },
            ],
            checkboxs: ["Design system update1", "Design system update2", "Design system update3"],
        }
    },
    {
        id: 2, 
        emoji: "🏡", 
        text: "Kitchen Reno", 
        component: TabAppLaunch, 
        props: {
            title: "Kitchen Reno",
            decription: "Planning our dream kitchen redesign.",
            checkboxs: ["system update1", "system update2", "system update3"],
        }
    },
]

export const List = () => {
    const [activeTab, setActiveTab] =useState<number>(1);
    const ActiveComponent = listItems.find((tab) => tab.id === activeTab)?.component;


    return(
        <section className="max-w-[1250px] mx-auto">
            <div className="flex gap-2 mt-[75px] p-3 border-2 rounded-[44px]">
                <div className="flex flex-col flex-0.5 p-6 border-2 rounded-[32px] bg-white">
                    <div className="flex flex-wrap gap-2">
                        {list.map((item , index) => (
                            <div
                            key={index}
                            className="flex-1 h-[62px] bg-customBg rounded-[20px]"
                            ></div>
                        ))}
                    </div>
                    <div>
                        <p className="mt-[30px] text-sm text-ListsColor font-bold">Lists</p>
                        <ul className="mt-[11px]">
                            {listItems.map((tab) => (
                                <li
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id) }
                                className={`py-[7px] text-ListsText font-medium ${
                                    activeTab === tab.id ? 'text-black font-bold' : 'text-gray-500'
                                }`}>
                                    {tab.emoji}{tab.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex gap-2">
                        <span className="inline-block w-full h-[48px] bg-customBg rounded-[60px]"></span>
                        <div className="flex flex-col justify-center items-center w-[48px] h-[48px] border border-[#eee] rounded-full">
                            <img src="/assets/img-terms1.jpg" alt="인물이미지" className="w-[34px] h-[34px] rounded-full" />
                        </div>
                    </div>
                </div>
                {/* tab contents */}
                <div className="flex-2">
                    {ActiveComponent ? (
                        <ActiveComponent {...listItems.find((tab) => tab.id === activeTab)?.props} />
                    ) : (
                        <p>No content available.</p>
                    )}

                </div>
                <div className="flex-1 rounded-[32px]">
                    <img src="/assets/img-bg1.webp" alt="" className="rounded-[32px]" />
                </div>
            </div>
        </section>
    )
}