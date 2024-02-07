import {Main__First__Page} from "./Routes";
import MainPage from "../../../Pages/MainPage";

const useRoutesList = () => {


    return [
        {
            path: Main__First__Page,
            element: <MainPage/>
        }
    ]
}

export default useRoutesList