'use client';

import { Gnb } from "../components/gnb/Gnb";
import { Introduce } from "../components/introduce/Introduce";
import { Sticky } from "../components/sticky/Sticky";
import { List } from "../components/superlist/List";



export const Main = () => {
    return(
        <>
        <Gnb />
        <Introduce />
        <List />
        <Sticky />
        </>
    )
}