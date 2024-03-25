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
import {useNavigate} from "react-router-dom";

const useNavigation = () => {

    const [navigationState, setNavigationState] = useContext<any>(Navigation__Context)

    const navigate = useNavigate()

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
                    onClick: () => {
                        navigate('Europe')
                    },
                    icon: faGlobeEurope
                },
                {
                    title: 'Asia',
                    onClick: () => {
                        navigate('Asia')
                    },
                    icon: faGlobeAsia
                },
                {
                    title: 'Africa',
                    onClick: () => {
                        navigate('Africa')
                    },
                    icon: faGlobeAfrica
                },
                {
                    title: 'America',
                    onClick: () => {
                        navigate('America')
                    },
                    icon: faGlobeAmericas
                },
                {
                    title: 'Oceania',
                    onClick: () => {
                        navigate('Oceania')
                    },
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