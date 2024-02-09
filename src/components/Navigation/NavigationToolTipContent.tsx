import {Styled} from "./Navigation.styles"

type DropDownProps = {
    list: any[]
}

const NavigationToolTipContents = (
    {
        list
    }: DropDownProps) => {

    return (
        <Styled.Navigation__Drop__Down>
            {list.map((option: any) => (
                <Styled.Navigation__Drop__Down__Option>
                    <Styled.Navigation__Drop__Down__Icon
                        icon={option.icon}
                    />
                    {option.title}
                </Styled.Navigation__Drop__Down__Option>
            ))}
        </Styled.Navigation__Drop__Down>
    )
}

export default NavigationToolTipContents