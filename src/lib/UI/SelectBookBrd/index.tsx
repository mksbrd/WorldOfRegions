import {Styled} from "./SelectBookBrd.styles"

type SelectBookBrd = {
    options: any[]
    value: any
    onchange: any
}

const SelectBookBrd = ({
                           options,
                           value,
                           onchange,
                       }: SelectBookBrd) => {

    return (
        <>
            <Styled.Select
                value={value}
                onChange={onchange}
            >

                {options?.map((item: any) => {
                    return (
                        <Styled.Option value={item.value}>
                            {item.label}
                        </Styled.Option>
                    )


                })}
            </Styled.Select>

        </>
    )

}
export default SelectBookBrd