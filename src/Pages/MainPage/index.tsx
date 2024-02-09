import PageHolder from "../../lib/UI/PageHolder";
import ImageGallery from "./ImageGallery";
import {Main__Page__Context} from "../../lib/Context/ContextList";
import NonSeparatedPart from "./NonSeparatedPart";
import SeparatedPart from "./SeparatedPart";

const MainPage = () => {

    const imagesList = [
        {
            location: 'United Arabic Emirates • Dubai',
            link: 'https://localhost:3000/United-Arab-Emirates',
            title: 'The Place Of Wonders',
            image: 'https://www.visitdubai.com/-/media/gathercontent/poi/b/burj-khalifa/fallback-image/poi-burj-khalifa-3-dtcm-jun-2023.jpg'
        },
        {
            location: 'Italy • Rome',
            link: 'https://localhost:3000/Italy',
            title: 'Older Than You Can Imagine',
            image: 'https://tourismmedia.italia.it/is/image/mitur/20220127150143-colosseo-roma-lazio-shutterstock-756032350-1?wid=1600&hei=900&fit=constrain,1&fmt=webp'
        },
        {
            location: 'Greece • Athens',
            link: 'https://localhost:3000/Greece',
            title: 'Delicious Food And Not Only',
            image: 'https://www.state.gov/wp-content/uploads/2023/07/shutterstock_1168009126v2.jpg'
        },
        {
            location: 'Spain • Madrid',
            link: 'https://localhost:3000/Spain',
            title: 'There Is No Better Place',
            image: 'https://i.natgeofe.com/k/e800ca90-2b5b-4dad-b4d7-b67a48c96c91/spain-madrid.jpg?w=1084.125&h=609'
        },
        {
            location: 'Poland • Cracow',
            link: 'https://localhost:3000/Poland',
            title: 'Discover The History Of Empire',
            image: 'https://study.gov.pl/sites/default/files/ostap-senyuk-7rcdqeuq1rg-unsplash_0.jpg'
        }
    ]

    const firstArticles: any = {
        title: "As Warm As It Gets This Part Of Year",
        list: [
            {
                title: "Unveiling the Allure of Santorini's Timeless Elegance",
                image: 'https://a.cdn-hotels.com/gdcs/production18/d1838/041ae6b1-0a88-4c22-a648-53a22dd4a006.jpg',
                location: 'Greece • Santorini',
            },
            {
                title: "A Journey through the Enchanting Landscapes of Hawaii's Tropical Paradise",
                image: 'https://cdn.aarp.net/content/dam/aarp/travel/Domestic/2021/12/1140-oahu-hero.jpg',
                location: 'USA • Hawaii',
            },
            {
                title: "Exploring the Extravagance of the City of Gold",
                image: 'https://dubaitickets.tours/wp-content/uploads/2023/03/ain-dubai-ferris-wheel.jpg',
                location: 'UAE • Dubai',
            },
            {
                title: "A Tapestry of Art, Architecture, and Mediterranean Charm",
                image: 'https://www.spain.info/.content/imagenes/cabeceras-grandes/cataluna/park-guell-barcelona-s-305364611.jpg',
                location: 'Spain • Barcelona',
            },

        ]
    }

    const SideContent: any = {
        quickIdeas: [
            {
                image: 'https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/blt7d0d1c86efe4f725/6181151eef82350e50b94059/UK_Madrid_Spain_Header.jpg',
                location: 'Spain',
                title: 'Try Delicious Spanish food',
                link: 'https://bookbrd.com'
            },
            {
                image: 'https://images.prismic.io/visiticeland/4007a9bd-142a-4bc8-8d62-2895238851b4_hvammsvik%20hot%20springs.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=1748&h=1094',
                location: 'Iceland',
                title: 'Follow The Trails Of Nature',
                link: 'https://bookbrd.com'
            },
            {
                image: 'https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/blt7d0d1c86efe4f725/6181151eef82350e50b94059/UK_Madrid_Spain_Header.jpg',
                location: 'Portugal',
                title: 'Experience Fado Live In Bar By The Sea',
                link: 'https://bookbrd.com'
            },
            {
                image: 'https://cms.accuweather.com/wp-content/uploads/2023/05/cnn-L19jb21wb25lbnRzL2ltYWdlL2luc3RhbmNlcy9jbGhzeXQybHcwMDI2MjZxaDhoZjk1MjMx-L19wYWdlcy9jbGhzeXQybDIwMDFsMjZxaGR2cG84d3Q0.jpg',
                location: 'Maldives',
                title: 'Sun, Beach, Good Food, Beautiful View Everything You Can Desire',
                link: 'https://bookbrd.com'
            },
        ]
    }

    const mainPageContextValue = {
        SideContent,
        imagesList,
        firstArticles
    }


    return (
        <Main__Page__Context.Provider value={mainPageContextValue as any}>
            <PageHolder>
                <ImageGallery/>
                <SeparatedPart/>
                <NonSeparatedPart/>
            </PageHolder>
        </Main__Page__Context.Provider>
    )
}

export default MainPage