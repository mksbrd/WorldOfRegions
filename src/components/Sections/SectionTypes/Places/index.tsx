import CountryBox from "../../../../Pages/ContinentPage/CountryBox";
import {Styled} from "./Places.styles";

type PlacesProps = {
    options: any
}

const Places = (
    {
        options
    }: PlacesProps
) => {


    return (
        <Styled.Places__Content__Holder>
            {options.map((place: any) => {

                return (
                    <CountryBox
                        key={'place_option' + place?.title}
                        option={place}
                    />
                )

            })}
        </Styled.Places__Content__Holder>
    )
}

export default Places