import {Styled} from "../SelectBookBrd.styles"
import Text from "../../Text";
import {forwardRef, useState} from "react";
import FlexBox from "../../FlexBox";

type SeletedTagsProps = {
    label: string
    maxWidth: number
}

const SelectedTags = forwardRef<HTMLDivElement, SeletedTagsProps>(({
                                                                       label,
                                                                       maxWidth,
                                                                   }, ref) => {

    const [elementRef, setelementRef] = useState<HTMLDivElement | null>(null);


    return (
        <Styled.SelectedTag
            ref={ref}
        >
            <FlexBox
                ref={setelementRef}
            >
                <Text
                    style={{
                        maxWidth: maxWidth,
                        padding: '3px 4px',
                        fontSize: "12px",
                        textOverflow: "ellipsis",
                        overflow: 'hidden',
                        flexWrap: "nowrap",
                        whiteSpace: 'nowrap'
                    }}
                >
                    {label}
                </Text>
            </FlexBox>
        </Styled.SelectedTag>
    )
})
export default SelectedTags