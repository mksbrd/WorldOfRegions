import React from 'react';
import ThemeProviderContext from "./lib/Context/ThemeProvider";
import WorldOfRegions from "./Pages/WorldOfRegions/WorldOfRegions";
import NavigationProvider from "./lib/Context/NavigationProvider";
import {BrowserRouter} from "react-router-dom";
import "./i18n";
import AdditionalModules from "./components/AdditionalModules";

function App() {
    return (
        <ThemeProviderContext>
            <BrowserRouter>
                <NavigationProvider>
                    <>
                        <WorldOfRegions/>
                        <AdditionalModules/>
                    </>
                </NavigationProvider>
            </BrowserRouter>
        </ThemeProviderContext>
    );
}

export default App;
