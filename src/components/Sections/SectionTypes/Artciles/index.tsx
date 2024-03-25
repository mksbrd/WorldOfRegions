import ArticleBox from "../../../../Pages/ArticlePage/ArticleBox";
import {Styled} from "./Articles.styles";
import {useTranslation} from "react-i18next";

type ArticlesProps = {
    options: any[]
}

const Artciles = (
    {
        options
    }: ArticlesProps
) => {

    const {t} = useTranslation()

    const onShowMoreArticles = () => {
        window.open(window.location.origin + window.location.pathname + '/Articles')
    }

    return (
        <Styled.Articles__Section__Content__Holder>

            {options.map((option: any, index: any) => (
                <ArticleBox
                    key={`section_article_box` + index}
                    option={option}
                />
            ))}

            <Styled.Articles__Button
                label={t('lbl_show_more_articles')}
                onClick={onShowMoreArticles}
            />
            
        </Styled.Articles__Section__Content__Holder>
    )
}

export default Artciles