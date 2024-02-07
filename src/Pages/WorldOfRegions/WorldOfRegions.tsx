import {Styled} from "./WorldOfRegions.styles";
import Navigation from "../../components/Navigation";
import {Route, Routes} from "react-router-dom";
import useRoutesList from "../../lib/Const/Routes/RoutesList";

const WorldOfRegions = () => {

    const routesList = useRoutesList()

    return (

        <Styled.World__Of__Regions__Holder>
            <Navigation/>
            <Routes>
                {routesList.map((route: any) => (
                    <Route
                        key={`route_${route.path}`}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </Styled.World__Of__Regions__Holder>
    )
}
export default WorldOfRegions