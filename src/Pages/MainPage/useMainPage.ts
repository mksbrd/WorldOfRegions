import {useContext} from "react";
import {Main__Page__Context} from "../../lib/Context/ContextList";

const useMainPage = () => {

    const mainPage = useContext<any>(Main__Page__Context)

    console.log({mainPage})

    return ({
        quickIdeas: mainPage?.SideContent?.quickIdeas,
        firstArticles: mainPage?.firstArticles,
        imagesList: mainPage?.imagesList
    })
}
export default useMainPage