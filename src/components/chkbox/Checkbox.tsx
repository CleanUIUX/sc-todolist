'use client';

import { useState } from "react";

interface CheckboxProps {
    label: string;
}

export const Checkbox = ({ label }: CheckboxProps) => {

    const [isCheck , setIsCheck] = useState(false);
    const handleCheck = () => {
        setIsCheck((prev) => !prev);
    }

    return(
        <label className="flex items-center gap-[10px]">
            <input 
            type="checkbox" 
            checked={isCheck}
            onChange={handleCheck}
            className={`w-[25px] h-[25px] border-2 border-[#6c6c9e4d] appearance-none rounded-lg bg-center bg-no-repeat bg-inherit
                ${isCheck ? "bg-[url('/assets/icon-chk.svg')]" : ""}
                `}
                style={{
                    backgroundImage: isCheck ? "url('/assets/icon-chk.svg')" : "",
                }}
            />
            <div
                className={`inline-block relative text-lg font-medium  ${
                    isCheck ? "text-gray-400" : "text-black"
                }`}
                >
                { label }
                <span
                    className={`absolute left-0 top-1/2 h-[1px] w-full bg-gray-400 transform transition-transform duration-300 ease-in-out ${
                        isCheck ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{ 
                        height: isCheck ? "2px" : "1px",
                        backgroundColor: isCheck ? "#f84f39" : "black",
                        transformOrigin: "left" 
                    }}
                ></span>
                </div>
        </label>
    )
}