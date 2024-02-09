import React from 'react';
import ThemeProviderContext from "./lib/Context/Providers/ThemeProvider";
import WorldOfRegions from "./Pages/WorldOfRegions/WorldOfRegions";
import NavigationProvider from "./lib/Context/Providers/NavigationProvider";
import {BrowserRouter} from "react-router-dom";
import "./i18n";
import AdditionalModules from "./components/AdditionalModules";
import GlobalStyle from "./lib/Style/GlobalStyles";

function App() {
    return (
        <ThemeProviderContext>
            <BrowserRouter>
                <NavigationProvider>
                    <>
                        <GlobalStyle/>
                        <WorldOfRegions/>
                        <AdditionalModules/>
                    </>
                </NavigationProvider>
            </BrowserRouter>
        </ThemeProviderContext>
    );
}

export default App;
