import {useContext} from "react";
import {Navigation__Context} from "../Context/ContextList";

const useNavigation = () => {

    const [navigationState, setNavigationState] = useContext<any>(Navigation__Context)

    const toggleNavigationDrawer = (bool: boolean) => {
        setNavigationState((state: any) => ({
            ...state,
            isOpenDrawer: bool
        }))

    }

    const navigationOptions = [
        {
            label: 'Discover'
        },
        {
            label: 'Exotic'
        },
        {
            label: 'World'
        }

    ]


    return ({
        toggleNavigationDrawer,
        navigationOptions,
        isOpenDrawer: navigationState.isOpenDrawer
    })
}
export default useNavigation