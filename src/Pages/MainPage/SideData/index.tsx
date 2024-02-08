import {Styled} from "./SideData.styles"
import QuickIdeas from "./QuickIdeas";
import SocialMedias from "./SocialMedias";
import {useTranslation} from "react-i18next";

const SideData = () => {

    const {t} = useTranslation()

    return (
        <Styled.Side__Data__Holder>
            <Styled.Section__Titles>
                {t('lbl_quick_vacation')}
            </Styled.Section__Titles>
            <QuickIdeas/>
            <Styled.Section__Titles>
                {t('lbl_social_medias')}
            </Styled.Section__Titles>
            <SocialMedias/>
        </Styled.Side__Data__Holder>
    )
}
export default SideData