import React from "react";
import {MainPageContext, NavigationContext} from "./DefaultContextValues";


const Navigation__Context = React.createContext(NavigationContext)
const Main__Page__Context = React.createContext(MainPageContext)

export {
    Navigation__Context,
    Main__Page__Context
}


export type ContextProviderProps = {
    children: React.ReactElement
}