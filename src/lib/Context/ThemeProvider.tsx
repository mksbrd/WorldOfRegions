import {ThemeProvider} from "styled-components";
import {ContextProviderProps} from "./ContextList";
import {useEffect} from "react";
import {DARK_THEME} from "../Style/Themes";


const ThemeProviderContext = (
    {
        children
    }: ContextProviderProps
) => {


    useEffect(() => {
        document.body.style.backgroundColor = DARK_THEME.backgroundColor
    }, [])

    return (
        <ThemeProvider theme={DARK_THEME}>
            {children}
        </ThemeProvider>
    )
}

export default ThemeProviderContext