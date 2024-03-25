import {Styled} from "./SectionTabs.styles"
import {useTranslation} from "react-i18next";

type SectionTypesProps = {
    tabs: string[]
    onClick: (tab: string) => void
}

const SectionTabs = (
    {
        tabs,
        onClick
    }: SectionTypesProps
) => {

    const {t} = useTranslation()

    return (
        <Styled.Section__Tabs__Holder>
            {tabs.map((tab: string) => {

                return (
                    <Styled.Section__Tab
                        onClick={() => onClick(tab)}
                    >
                        {t(`lbl_${tab}`)}
                    </Styled.Section__Tab>
                )
            })}
        </Styled.Section__Tabs__Holder>
    )
}

export default SectionTabs