import Drawer from "../../lib/UI/Drawer/Drawer";
import useNavigation from "../../lib/Hooks/useNavigation";
import WorldOfRegionsLogo from "../WorldOfRegionsLogo";
import {Styled} from "./Navigation.styles";
import Text from "../../lib/UI/Text";

const NavigationDrawer = () => {

    const {
        isOpenDrawer,
        navigationOptions,
        toggleNavigationDrawer
    } = useNavigation()

    const onClose = () => {
        toggleNavigationDrawer(false)
    }

    return (
        <Drawer
            title={<WorldOfRegionsLogo/>}
            onClose={onClose}
            isOpen={isOpenDrawer}
            position={"right"}
        >
            <Styled.Navigation__Drawer__Content__Holder>
                {navigationOptions.map((option: any) => {


                    return (
                        <Text
                            key={`navigation_drawer_option_${option.label}`}
                        >
                            {option.label}
                        </Text>
                    )
                })}
            </Styled.Navigation__Drawer__Content__Holder>
        </Drawer>
    )
}
export default NavigationDrawer