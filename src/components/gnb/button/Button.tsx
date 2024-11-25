'use client';

interface ButtonProps {
    title: string,
    bgColor: string,
    textColor: string,
    onClick?:() => void; //클릭 이벤트 핸들러
}

export const Button = ({
   title,
   bgColor,
   textColor,
   onClick, 
}:ButtonProps) => {
    return(
        <button
            className={`flex justify-center items-center py-15 px-30 rounded-full ${bgColor} ${textColor}`}
            onClick={onClick}
        ></button>
    )
}