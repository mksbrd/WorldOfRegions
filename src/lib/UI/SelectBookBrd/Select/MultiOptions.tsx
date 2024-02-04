import {Styled} from "../SelectBookBrd.styles"
import Text from "../../Text";
import CheckBox from "../../CheckBox";

type SimpleOptionsProps = {
    isChecked: boolean
    label: string
    value: string
    onOptionClick: any
}

const MultiOptions = ({
                          isChecked,
                          label,
                          value,
                          onOptionClick
                      }: SimpleOptionsProps) => {
    const onClick = () => {
        onOptionClick(label, value)
    }
    return (
        <Styled.SimpleSelectOption
            isCustom={false}
            onClick={onClick}
        >
            <CheckBox style={{marginLeft: '5px'}} isCheckedProp={isChecked}/>
            <Text>{label}</Text>
        </Styled.SimpleSelectOption>
    )
}
export default MultiOptions