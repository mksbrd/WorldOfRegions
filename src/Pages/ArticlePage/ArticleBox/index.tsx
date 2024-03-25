import {Styled} from "./ArticleBox.styles"

type ArticleBoxProps = {
    option: any
}

const ArticleBox = (
    {
        option = {}
    }: ArticleBoxProps
) => {

    const {
        title,
        image,
        content,
        link
    } = option


    return (
        <Styled.Article__Box
            href={link}
        >
            <Styled.Article__Image
                src={image}
            />
            <Styled.Article__Content__Holder>
                <Styled.Article__Title>
                    {title}
                </Styled.Article__Title>
                <Styled.Article__Content>
                    {content}
                </Styled.Article__Content>
            </Styled.Article__Content__Holder>
        </Styled.Article__Box>
    )
}
export default ArticleBox