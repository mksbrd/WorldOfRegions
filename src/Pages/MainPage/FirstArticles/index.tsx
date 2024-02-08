import PageHolder from "../../../lib/UI/PageHolder";
import {Styled} from "./FirstArticles.styles";
import useMainPage from "../useMainPage";
import Article from "./Article";

const FirstArticles = () => {

    const {firstArticles} = useMainPage()

    const {
        title,
        list
    } = firstArticles


    return (
        <>
            <PageHolder>
                <Styled.First__Articles__Title>
                    {title}
                </Styled.First__Articles__Title>
                <Styled.First__Articles__Holder>
                    {list.map((article: any) => (
                            <Article
                                item={article}
                            />
                        )
                    )}
                </Styled.First__Articles__Holder>
            </PageHolder>
        </>
    )
}

export default FirstArticles