'use client';

import { Gnb } from "../components/gnb/Gnb";
import { Introduce } from "../components/introduce/Introduce";
import { Sticky } from "../components/sticky/Sticky";
import { List } from "../components/superlist/List";



export const Main = () => {
    return(
        <>
        <Gnb />
        <Sticky top="20px">
                <div className="p-4 bg-blue-500 font-bold rounded-md">
                    I am Sticky on the Main Page!
                </div>
        </Sticky>
        <Introduce />
        <List />
        </>
    )
}