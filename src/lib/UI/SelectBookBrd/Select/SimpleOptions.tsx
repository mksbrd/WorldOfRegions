import {Styled} from "../SelectBookBrd.styles"

type SimpleOptionsProps = {
    isCustom: boolean
    isChecked: boolean
    label: any
    value: string
    onOptionClick: any
}

const SimpleOptions = ({
                           isCustom,
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
            isCustom={isCustom}
            isChecked={isChecked}
            onClick={onClick}
        >
            {isCustom ? (
                <Styled.Custom__Option>
                    {label}
                </Styled.Custom__Option>
            ) : (
                <Styled.SimpleSelectOptionText>
                    {label}
                </Styled.SimpleSelectOptionText>
            )}
        </Styled.SimpleSelectOption>
    )
}
export default SimpleOptions