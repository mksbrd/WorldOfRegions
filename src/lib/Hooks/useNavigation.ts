import {useContext} from "react";
import {Navigation__Context} from "../Context/ContextList";
import {
    faGlobeAfrica,
    faGlobeAmericas,
    faGlobeAsia,
    faGlobeEurope,
    faGlobeOceania,
    faLightbulb,
    faMagnifyingGlass,
    faNewspaper,
    faUserTie
} from "@fortawesome/pro-light-svg-icons";

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
            label: 'Discover',
            list: [
                {
                    title: 'Latest Articles',
                    icon: faNewspaper
                },
                {
                    title: 'Travel Tips',
                    icon: faLightbulb
                },
                {
                    title: "Where To Go",
                    icon: faMagnifyingGlass
                },

            ]
        },
        {
            label: 'World',
            list: [
                {
                    title: 'Europe',
                    icon: faGlobeEurope
                },
                {
                    title: 'Asia',
                    icon: faGlobeAsia
                },
                {
                    title: 'Africa',
                    icon: faGlobeAfrica
                },
                {
                    title: 'America',
                    icon: faGlobeAmericas
                },
                {
                    title: 'Oceania',
                    icon: faGlobeOceania
                }
            ]
        },
        {
            label: 'Business',
            list: [
                {
                    title: 'Admin Panel',
                    icon: faUserTie
                }
            ]
        }

    ]


    return ({
        toggleNavigationDrawer,
        navigationOptions,
        isOpenDrawer: navigationState.isOpenDrawer
    })
}
export default useNavigation