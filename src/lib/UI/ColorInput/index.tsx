import {Styled} from "./ColorInput.styles"
import {useTranslation} from "react-i18next";


type ColorInputProps = {
    color?: string
    disabled?: boolean
    onChange?: (event: any) => void
}

const defaultProps = {
    disabled: false,
    color: '#fff000',
    onChange: (event: any) => false
}

const ColorInput = (
    {
        disabled,
        onChange,
        color
    }: ColorInputProps
) => {

    const {t} = useTranslation()

    return (
        <Styled.Input__Holder>
            <Styled.Input__Title>
                {t('lbl_pick_color')}
            </Styled.Input__Title>
            <Styled.Color__Input
                disabled={disabled}
                onChange={onChange}
                value={color}
                type={'color'}
            />
        </Styled.Input__Holder>
    )
}

ColorInput.defaultProps = defaultProps

export default ColorInput