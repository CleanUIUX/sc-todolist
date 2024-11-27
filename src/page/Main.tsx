'use client';

import { Gnb } from "../components/gnb/Gnb";
import { Introduce } from "../components/gnb/introduce/Introduce";
import { List } from "../components/gnb/superlist/List";

export const Main = () => {
    return(
        <>
        <Gnb />
        <Introduce />
        <List />
        </>
    )
}