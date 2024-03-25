import {Styled} from "./Overview.styles"
import {useTranslation} from "react-i18next";

type OverviewProps = {
    quickCountryDesc?: any
    quickData?: any
}

const Overview = (
    {
        quickCountryDesc,
        quickData
    }: OverviewProps
) => {

    const {t} = useTranslation()


    return (
        <Styled.Overview__Content__Holder>

            <Styled.Overview__Quick__Description>
                {quickCountryDesc}
            </Styled.Overview__Quick__Description>
        </Styled.Overview__Content__Holder>
    )
}
export default Overview