import {useParams} from "react-router-dom";
import PageHolder from "../../lib/UI/PageHolder";
import {Styled} from "./ContientPage.styles";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import TextInput from "../../lib/UI/TextInput";
import Places from "../../components/Sections/SectionTypes/Places";

const ContinentPage = () => {

    const {continent} = useParams()

    const {t} = useTranslation()

    const [hoverCountry, setHoverCountry] = useState<string>('')

    console.log({cos: window.location})

    const countryList = [
        {
            title: 'Italy',
            link: window.location.origin + `/${continent}/Italy`,
            image: 'https://tourismmedia.italia.it/is/image/mitur/20220127150143-colosseo-roma-lazio-shutterstock-756032350-1?wid=1600&hei=900&fit=constrain,1&fmt=webp',
            flag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VOv9FWujzJrm7r6Ac3GUfbu8YhQaRLQXHyGyXI7ViA&s',
            details: {
                population: '59,11 mln',
                capital: 'Rome',
                currency: 'Euro €',
                food: 'Pizza, Pasta',
                numberOfRegions: 39,
                availAbleHotels: 11023,
            }
        },
        {
            title: 'Poland',
            image: 'https://warsawtour.pl/wp-content/uploads/2023/03/Panorama-Warszawy-z-Widok-Towers-fot.-Filip-Kwiatkowski-1.jpg',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg',
            details: {
                population: '39.06 mln',
                capital: 'Warsaw',
                currency: 'PLN ',
                food: 'Pierogi, Żurek',
                numberOfRegions: 41,
                availAbleHotels: 9032,
            }
        },
        {
            title: 'Germany',
            image: 'https://www.berlin.de/binaries/asset/image_assets/8215661/ratio_4_3/1686824224/800x600/',
            flag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP-ynuGsHHxifmO_igw0YD2wWo451fj9aXtTO0XHW5oAS0bq7wzr1wPxaijdM&s=10',
            details: {
                population: '83.31 mln',
                capital: 'Berlin',
                currency: 'Euro €',
                food: 'Sausages, Wurst',
                numberOfRegions: 36,
                availAbleHotels: 12032,
            }
        },
        {
            title: 'Finland',
            image: 'https://images.ctfassets.net/nwbqij9m1jag/64uygHdfDYMuIEy5uc8SL9/81560ac70f91614208583cfb5a95aced/helsinki-skyscape-finland.jpg',
            flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACeCAMAAADjXISpAAAAMFBMVEX///8AL2wALWvV2OAcNW/4+PoACl4AKGkAIGVeZoydn7Xc3+VPWoUAKmoAJGeGi6YdPvN3AAABaklEQVR4nO3ayW1DQRBDQbZXLbaVf7YWGMEX0AfLqJcAB4U5drLU+XMOdrpsbf65IARCgxAIDUIgNAiB0CAEQoMQCA1CIDQIgdAgBEKDEAgNQiA0CIHQIARCgxAIDUIgNAiB0CAEQoMQCA1CIDQIgdAgBEKDEAgNQiA0CIHQIARCgxAIDUIgNAh5coTXna5f30cRfm7XpdGt8rHUYYP7V9ja3CrH3/5/gzAQGoSB0CAMhAZhIDQIA6FBGAgNwkBoEAZCgzAQGoSB0CAMhAZhIDQIA6FBGAgNwkBoEAZCgzAQGoSB0CAMhAbhXl6WemBza3KtvC31gMFsbW6V951yPnzXe7psjW61dij+1FfuW0EIhAYhEBqEQGgQAqFBCIQGIRAahEBoEAKhQQiEBiEQGoRAaBACoUEIhAYhEBqEQGgQAqFBCIQGIRAahEBoEAKhQQiEBiEQGoRAaBACoUEIhAYhEBqEQGjPjPALCp1beAP6f30AAAAASUVORK5CYII=',
            details: {
                population: '5.54 mln',
                capital: 'Helsinki',
                currency: 'Euro €',
                food: 'Ruisleipa, Karjalanpiirakka',
                numberOfRegions: 12,
                availAbleHotels: 6042,
            }
        },
        {
            title: 'Greece',
            image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2021/06/02/20/istock-833264986.jpg',
            flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACtCAMAAABhsvGqAAAASFBMVEX///8NXq8AVawFXK6astYnZrOmt9iWrtQqZLIdZLKcsdb2+Pzi6fMASqjZ4u8ATKisvtxId7oAPaMAT6k/cbfu8vgIWa0tarRKGTCAAAABoUlEQVR4nO3cwW7TUBCG0Rk7DYUmUFoC7/+mRP8mILmqW12ROpyzdiTfT5EXnpGrL46HWvD1W692v001MML8fen3WyBCiRAilAghQokQIpQIIUKJECKUCCFCiRAilAghQokQIpxNF0/LEZ6mlZ5//OubH+XxYn9auuC0f1zt0zYNDXo6rv3TfCxDIxymtY+Pj0WEFiFEaBFChBYhRGgRQoQWIURoEUKEFiFEaBFChB4c4TTN1z7Pu9TDH5aP9rDaYf68STVfvDB3OM4r/dzs3EGEMoEKEUqEEKFECBFKhBChRAgRSoQQoUQIEUqEEKFECBFKhBgZ4ddu92WLRkbovvZ+7juNjbBRIrQIIUKLECK0CCFCixAitAghQosQIrQIIUKLECKcjdxj3CwRzpaODQAAAADAW+zY1etLr7evXp/P3D4RWoQQoUUIEVqEEKFFCBFahBChRQgRWoQQoUUIEfrvtd7/Vt1x94YPEt+ua7/xBwAAAAA2bs/eWu9krTdEaBFChBYhRGgRQoQWIURoEUKEFiFEaBFChBYhRGgRQoSz38H2qTvf6aZTAAAAAElFTkSuQmCC',
            details: {
                population: '10.64 mln',
                capital: 'Atens',
                currency: 'Euro €',
                food: 'sasiki, Pita',
                numberOfRegions: 34,
                availAbleHotels: 13042,
            }
        },
        {
            title: 'Spain',
            image: 'https://i.natgeofe.com/k/e800ca90-2b5b-4dad-b4d7-b67a48c96c91/spain-madrid_16x9.jpg?w=1200',
            flag: 'data:image/png;base64,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',
            details: {
                population: '47.42 mln',
                capital: 'Madrid',
                currency: 'Euro €',
                food: 'Paella, Jamon',
                numberOfRegions: 51,
                availAbleHotels: 14042,
            }
        },
    ]

    return (
        <Styled.Continent__Content__Holders>
            <Styled.Continent__Page__Title>
                {continent}
            </Styled.Continent__Page__Title>
            <PageHolder>
                <Styled.Continent__InterActice__Image
                    src={'https://cdn.pixabay.com/photo/2020/10/03/17/06/map-5624038_960_720.png'}
                />
            </PageHolder>
            <Styled.Continent__Separator/>
            <PageHolder>
                <Styled.Continent__Countries__Title>
                    {t('lbl_country_list')}
                </Styled.Continent__Countries__Title>
                {/*//*/}
                <Styled.Continent__Search__Input>
                    Search
                </Styled.Continent__Search__Input>
                <Styled.Continent__Filter__Holder>
                    <TextInput
                        showIcon={false}
                        placeholder={t('lbl_continent_placeholder')}
                    />
                </Styled.Continent__Filter__Holder>
                <Places options={countryList}/>
            </PageHolder>
        </Styled.Continent__Content__Holders>
    )

}


export default ContinentPage
