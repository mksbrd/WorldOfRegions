import {Styled} from "../Overview/Overview.styles";
import {useTranslation} from "react-i18next";

type TravelInformation = {
    data: any
}

const TravelInformation = (
    {
        data
    }: TravelInformation
) => {

    const {t} = useTranslation()

    return (
        <Styled.Overview__Content__Holder>
            {data && Object.keys(data).map((option: any) => {
                return (
                    <Styled.Overview__Option__Holder>
                        {t('lbl_' + option)}{': '}
                        {data[option].type === 'link' ? (
                            <Styled.Anchor
                                target={'_blank'}
                                href={data[option].value}
                            >
                                {data[option].value}
                            </Styled.Anchor>
                        ) : (
                            <span
                                style={{
                                    fontWeight: 'bold'
                                }}
                            >
                             {data[option].value}
                         </span>
                        )}
                    </Styled.Overview__Option__Holder>
                )
            })}
        </Styled.Overview__Content__Holder>
    )
}

export default TravelInformation