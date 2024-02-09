import {Styled} from "./Navigation.styles"
import {faTrashCan} from "@fortawesome/pro-light-svg-icons";

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
                        icon={faTrashCan}
                    />
                    {option.title}
                </Styled.Navigation__Drop__Down__Option>
            ))}
        </Styled.Navigation__Drop__Down>
    )
}

export default NavigationToolTipContents