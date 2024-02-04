import {Styled} from "./TextArea.styles"

type TextAreaProps = {
    onChange?: (event: any) => void
    isError?: boolean
    value?: string
    placeholder?: string
    style?: React.CSSProperties
}

const defaultProps = {
    onChange: (event: any) => false,
    value: "",
    placeholder: '',
    isError: false,
    style: {}
}

const TextArea = (
    {
        onChange,
        placeholder,
        isError,
        style,
        value
    }: TextAreaProps
) => {


    return (
        <Styled.TextArea
            placeholder={placeholder}
            style={style}
            value={value}
            onChange={onChange}
            error={!!isError}
        />
    )
}

TextArea.defaultProps = defaultProps

export default TextArea