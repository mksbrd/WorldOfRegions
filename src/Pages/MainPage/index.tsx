import PageHolder from "../../lib/UI/PageHolder";
import ImageGallery from "./ImageGallery";

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


    return (
        <PageHolder>
            <ImageGallery
                slidesList={imagesList}
            />
        </PageHolder>
    )
}

export default MainPage