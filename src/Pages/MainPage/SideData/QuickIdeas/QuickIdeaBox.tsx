import {Styled} from "./QuickIdeas.styles";

type QuickIdeaBoxProps = {
    item: any
}

const QuickIdeaBox = (
    {
        item
    }: QuickIdeaBoxProps
) => {


    const {link, image, location, title} = item

    return (
        <Styled.SEO__Box__Holder
            target={'_blank'}
            href={link}
        >
            <Styled.Quick__Idea__Box
                src={image}
            />
            <Styled.Quick__Idea__Location>
                {location}
            </Styled.Quick__Idea__Location>
            <Styled.Quick__Idea__Title>
                {title}
            </Styled.Quick__Idea__Title>
        </Styled.SEO__Box__Holder>
    )
}
export default QuickIdeaBox