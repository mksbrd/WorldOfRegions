import Text from "../../lib/UI/Text";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe} from "@fortawesome/pro-solid-svg-icons";
import FlexBox from "../../lib/UI/FlexBox";


const WorldOfRegionsLogo = () => {

    return (
        <FlexBox
            style={{
                height: '50px',
                width: '150px',
                flexWrap: 'nowrap'
            }}
        >
            <FontAwesomeIcon
                icon={faGlobe}
                style={{
                    color: 'white',
                    height: '38px',
                    width: '38px',
                    margin: 'auto 0',
                    paddingLeft: '4px'
                }}
            />
            <Text
                style={{


                    fontWeight: 'bold',
                    fontSize: '21px',
                    textAlign: 'center'
                }}
            >

                World Of Regions
            </Text>
        </FlexBox>
    )
}
export default WorldOfRegionsLogo