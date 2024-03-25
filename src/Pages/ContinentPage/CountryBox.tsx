import {Styled} from "./ContientPage.styles"
import Tooltip from "../../lib/UI/Tooltip";
import {useTranslation} from "react-i18next";

type CountryBoxProps = {
    option: any
}

const CountryBox = (
    {
        option
    }: CountryBoxProps
) => {

    const {
        title,
        flag,
        image,
        details,
        link
    } = option

    const {t} = useTranslation()

    const toolTipContent = (
        <Styled.Country__ToolTip__Content>
            <Styled.Country__Image__Positioner>
                <Styled.Country__Image
                    src={image}
                />
                <Styled.Country__ToolTip__Country__Flag
                    src={flag}
                />
            </Styled.Country__Image__Positioner>
            <Styled.Country__ToolTip__Content__Holder>
                <Styled.Country__ToolTip__Country__Name>
                    {title}
                </Styled.Country__ToolTip__Country__Name>
                <Styled.Country__Details__Holder>
                    {Object.keys(details ?? {}).map((key: any) => {
                        const value = details[key]

                        return (
                            <Styled.Country__ToolTip__Detail>
                                {t('lbl_' + key)}{': '}
                                <span
                                    style={{
                                        fontWeight: 'bold'
                                    }}
                                >
                                {typeof value === 'object' ? value.join(', ') : value}
                            </span>
                            </Styled.Country__ToolTip__Detail>
                        )
                    })}
                </Styled.Country__Details__Holder>
            </Styled.Country__ToolTip__Content__Holder>
        </Styled.Country__ToolTip__Content>
    )

    return (
        <Tooltip
            content={toolTipContent}
        >
            <Styled.Country__Box
                href={link}
            >
                <Styled.Country__Flag__Image
                    src={flag}
                />
                <Styled.Country__Name>
                    {title}
                </Styled.Country__Name>
            </Styled.Country__Box>
        </Tooltip>
    )
}

export default CountryBox