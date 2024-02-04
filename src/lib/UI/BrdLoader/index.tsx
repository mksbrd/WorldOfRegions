import {Styled} from "./BrdLoader.styles"
import Text from "../Text";
import React from "react";
import FlexBox from "../FlexBox";
import {useTranslation} from "react-i18next";
import {faPlane} from "@fortawesome/free-solid-svg-icons/faPlane";
import {isEmpty} from "lodash-es";

type BrdLoaderProps = {
    isbig?: boolean
    style?: React.CSSProperties
    label?: string
}
const defaultProps = {
    isBig: false,
    style: undefined,
    label: ''
}

const BrdLoader = ({
                       isbig,
                       style,
                       label
                   }: BrdLoaderProps) => {
    const {t} = useTranslation();
    return (
        <FlexBox
            style={{
                ...style,
                flexDirection: 'column',
                textAlign: 'center',
            }}
        >
            {!isEmpty(label) && (
                <Text>{t(`${label}`)}</Text>
            )}
            {isbig ? (
                <Styled.BrdLoader>
                    <Styled.LoaderTextBold
                        isbig={isbig}
                    >
                        Book
                    </Styled.LoaderTextBold>
                    <Styled.LoaderTextLighter
                        isbig={isbig}
                    >
                        Brd
                    </Styled.LoaderTextLighter>
                </Styled.BrdLoader>
            ) : (

                <Styled.FontAwesomeIcons
                    isbig={isbig}
                    icon={faPlane}
                />
            )}
        </FlexBox>
    )
}
BrdLoader.defaultProps = defaultProps;
export default BrdLoader