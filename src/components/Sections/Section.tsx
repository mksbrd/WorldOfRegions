import {Styled} from "./Section.styles"
import React, {forwardRef} from "react";

type SectionProps = {
    title: string
    sectionName: string
    content: React.ReactElement | null
}

const Section = forwardRef<any, SectionProps>((
    {
        title,
        sectionName,
        content
    }, ref: any
) => {


    return (
        <Styled.Section__Holder
            ref={(sectionRef: any) => {
                if (ref && ref?.current) {
                    return ref.current[sectionName] = sectionRef
                }
            }}
        >
            <Styled.Section__Title>
                {title}
            </Styled.Section__Title>
            {content}
        </Styled.Section__Holder>
    )
})
export default Section