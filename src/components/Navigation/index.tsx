import {Styled} from "./Navigation.styles"
import PageHolder from "../../lib/UI/PageHolder";
import WorldOfRegionsLogo from "../WorldOfRegionsLogo";
import {faBars} from "@fortawesome/pro-solid-svg-icons";
import useNavigation from "../../lib/Hooks/useNavigation";
import Tooltip from "../../lib/UI/Tooltip";
import NavigationToolTipContents from "./NavigationToolTipContent";
import {useNavigate} from "react-router-dom";


const Navigation = () => {

    const {
        toggleNavigationDrawer,
        navigationOptions
    } = useNavigation()

    const onBarsOnClickHandler = () => {
        toggleNavigationDrawer(true)
    }

    const navigate = useNavigate()

    const wideScreenContent = (
        <Styled.Navigation__Wide__Screen__Holder>
            {navigationOptions.map((option: any) => (
                <Tooltip
                    trigger={'onclick, mouseenter'}
                    key={`navigation_bar_option_${option.label}`}
                    interactive={true}
                    placement={'bottom-start'}
                    content={<NavigationToolTipContents list={option.list}/>}
                >
                    <Styled.Navigation__Wide__Screen__Option>
                        {option.label}
                    </Styled.Navigation__Wide__Screen__Option>
                </Tooltip>
            ))}
        </Styled.Navigation__Wide__Screen__Holder>
    )

    const smallScreenContent = (
        <Styled.Navigation__Small__Screen__Holder>
            <Styled.Menu__Bars__Icon
                icon={faBars}
                onClick={onBarsOnClickHandler}
            />
        </Styled.Navigation__Small__Screen__Holder>
    )


    return (
        <Styled.Navigation__Place__Holder>
            <Styled.Navigation__Fixed__Holder>
                <PageHolder>
                    <Styled.Navigation__Content__Holder>
                        <Styled.Logo__Positioner>
                            <WorldOfRegionsLogo
                                onClick={() => navigate('/')}
                            />
                        </Styled.Logo__Positioner>
                        {smallScreenContent}
                        {wideScreenContent}
                    </Styled.Navigation__Content__Holder>
                </PageHolder>
            </Styled.Navigation__Fixed__Holder>
        </Styled.Navigation__Place__Holder>

    )
}

export default Navigation