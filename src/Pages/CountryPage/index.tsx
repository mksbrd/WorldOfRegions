import {useParams} from "react-router-dom";
import Text from "../../lib/UI/Text";

const CountryPage = () => {

    const {countryName} = useParams()

    return (
        <Text style={{margin: 'auto', padding: '20px'}}>
            {countryName}
        </Text>
    )
}
export default CountryPage