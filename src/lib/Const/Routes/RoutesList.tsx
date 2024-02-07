import {Country__Page, Main__First__Page} from "./Routes";
import MainPage from "../../../Pages/MainPage";
import CountryPage from "../../../Pages/CountryPage";

const useRoutesList = () => {


    return [
        {
            path: Main__First__Page,
            element: <MainPage/>
        },
        {
            path: Country__Page,
            element: <CountryPage/>
        }
    ]
}

export default useRoutesList