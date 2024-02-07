import React from "react";
import {NavigationContext} from "./DefaultContextValues";

export const Navigation__Context = React.createContext(NavigationContext)


export type ContextProviderProps = {
    children: React.ReactElement
}