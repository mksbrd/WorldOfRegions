import {Styled} from "./FirstArticles.styles"

type ArticleProps = {
    item: any
}

const Article = (
    {
        item
    }: ArticleProps
) => {

    const {
        image,
        title,
        location
    } = item


    return (
        <Styled.Anchor>
            <Styled.Article__Holder>
                <Styled.Article__Image
                    src={image}
                />
                <Styled.Content__Holder>
                    <Styled.Article__Location>
                        {location}
                    </Styled.Article__Location>
                    <Styled.Article__Title>
                        {title}
                    </Styled.Article__Title>

                </Styled.Content__Holder>
            </Styled.Article__Holder>
        </Styled.Anchor>
    )

}


export default Article