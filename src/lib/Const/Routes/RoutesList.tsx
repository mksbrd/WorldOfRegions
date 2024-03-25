import {Continent__Page, Country__Page, Main__First__Page} from "./Routes";
import MainPage from "../../../Pages/MainPage";
import CountryPage from "../../../Pages/CountryPage";
import ContinentPage from "../../../Pages/ContinentPage";

const useRoutesList = () => {


    return [
        {
            path: Main__First__Page,
            element: <MainPage/>
        },
        {
            path: Continent__Page,
            element: <ContinentPage/>
        },
        {
            path: Country__Page,
            element: <CountryPage/>
        }
    ]
}

export default useRoutesList