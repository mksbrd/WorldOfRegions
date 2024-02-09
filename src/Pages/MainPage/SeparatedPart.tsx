import {Styled} from "./MainPage.styles";
import FirstArticles from "./FirstArticles";
import SideData from "./SideData";
import AdvertisementBox from "./AdvertismentBox";

const SeparatedPart = () => {

    return (
        <Styled.Main__Page__Lower__Content__Holder>
            <Styled.Main__Page__Content__left__Side>
                <FirstArticles/>
                <AdvertisementBox/>
            </Styled.Main__Page__Content__left__Side>
            <SideData/>
        </Styled.Main__Page__Lower__Content__Holder>
    )

}

export default SeparatedPart