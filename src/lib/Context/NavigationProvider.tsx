import {ContextProviderProps, Navigation__Context} from "./ContextList";
import {useState} from "react";

const NavigationProvider = (
    {
        children
    }: ContextProviderProps) => {

    const [state, setState] = useState({})

    return (
        <Navigation__Context.Provider value={[state, setState] as any}>
            {children}
        </Navigation__Context.Provider>
    )
}

export default NavigationProvider