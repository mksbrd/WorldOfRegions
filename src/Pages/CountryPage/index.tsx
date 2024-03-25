import {useParams} from "react-router-dom";
import {Styled} from "./CountryPage.styles";
import PageHolder from "../../lib/UI/PageHolder";
import SectionTabs from "../../components/Sections/SectionTabs";
import {useTranslation} from "react-i18next";
import Section from "../../components/Sections/Section";
import React, {createElement, useRef} from "react";
import Overview from "../../components/Sections/SectionTypes/Overview";
import TravelInformation from "../../components/Sections/SectionTypes/TravelInformation";
import Places from "../../components/Sections/SectionTypes/Places";
import Artciles from "../../components/Sections/SectionTypes/Artciles";
import FlexBox from "../../lib/UI/FlexBox";
import InterActiveMap from "../../components/InterActiveMap";
import {geoJSOn} from "../../components/InterActiveMap/mapvalue";

const CountryPage = () => {

    const {t} = useTranslation()

    const {countryName} = useParams()

    const refList = useRef<any>({})

    const data = {
        backgroundImage: "https://tourismmedia.italia.it/is/image/mitur/20220127150143-colosseo-roma-lazio-shutterstock-756032350-1?wid=1600&hei=900&fit=constrain,1&fmt=webp",
        countryMap: 'https://png.pngtree.com/png-clipart/20230917/original/pngtree-country-outline-with-the-flag-of-italy-divisions-picture-image_13049136.png'
    }

    const {backgroundImage} = data

    const regionList = [
        {
            title: 'Lombardy',
            link: window.location.origin + window.location.pathname + '/Lombardy',
            image: 'https://www.wine-searcher.com/images/region/lombardy-3574-1-1.jpg',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Lombardy.svg/800px-Flag_of_Lombardy.svg.png',
            details: {
                capital: 'Milan',
                population: '10 million',
                area: '23,844 sq km',
                notableCities: ['Milan', 'Bergamo', 'Como'],
                famousFor: ['Fashion', 'Finance', 'Lakes'],
                landmarks: ['Duomo di Milano', 'Lake Como', 'Sforza Castle']
            }
        },
        {
            title: 'Lazio',
            link: window.location.origin + window.location.pathname + '/Lazio',
            image: 'https://www.italia.it/content/dam/tdh/en/interests/lazio/roma/roma-la-citta-eterna/media/20210410125258-enit-lazio-roma-tevere.jpg',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Flag_of_Lazio.svg/1280px-Flag_of_Lazio.svg.png',
            details: {
                capital: 'Rome',
                population: '5.8 million',
                area: '17,207 sq km',
                notableCities: ['Rome', 'Latina', 'Viterbo'],
                famousFor: ['History', 'Art', 'Cuisine'],
                landmarks: ['Colosseum', 'Vatican City', 'Trevi Fountain']
            }
        },
        {
            title: 'Campania',
            link: window.location.origin + window.location.pathname + '/Campania',
            image: 'https://www.wine-searcher.com/images/region/campania-3925-1-2.jpg',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Flag_of_Campania.svg/1200px-Flag_of_Campania.svg.png',
            details: {
                capital: 'Naples',
                population: '5.8 million',
                area: '13,590 sq km',
                notableCities: ['Naples', 'Salerno', 'Sorrento'],
                famousFor: ['Pizza', 'Mount Vesuvius', 'Amalfi Coast'],
                landmarks: ['Pompeii', 'Mount Vesuvius', 'Amalfi Coast']
            }
        },
        {
            title: 'Tuscany',
            link: window.location.origin + window.location.pathname + '/Tuscany',
            image: 'https://vervewine.com/cdn/shop/articles/need-to-know-tuscany_1170x.jpg?v=1589561605',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Tuscany.svg/1200px-Flag_of_Tuscany.svg.png',
            details: {
                capital: 'Florence',
                population: '3.7 million',
                area: '22,990 sq km',
                notableCities: ['Florence', 'Pisa', 'Siena'],
                famousFor: ['Art', 'Wine', 'Countryside'],
                landmarks: ['Duomo', 'Uffizi Gallery', 'Leaning Tower of Pisa']
            }
        },
        {
            title: 'Veneto',
            link: window.location.origin + window.location.pathname + '/Veneto',
            image: 'https://www.winetraveler.com/wp-content/uploads/2018/07/veneto-wine-region-italy-facts-information.jpg',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Flag_of_Veneto.svg/800px-Flag_of_Veneto.svg.png',
            details: {
                capital: 'Venice',
                population: '4.9 million',
                area: '18,390 sq km',
                notableCities: ['Venice', 'Verona', 'Padua'],
                famousFor: ['Canals', 'Carnival', 'Palladian Villas'],
                landmarks: ['St. Mark\'s Basilica', 'Rialto Bridge', 'Arena di Verona']
            }
        },
        {
            "title": "Umbria",
            "link": window.location.origin + window.location.pathname + '/Umbria',
            "image": "https://www.tripsavvy.com/thmb/LB4mV8qBDJ0r9_NpM6b1yIORTxE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/basilica-of-san-francesco-in-assisi--umbria--italy-921370774-5aba5929ae9ab80037aa6325.jpg",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Flag_of_Umbria.svg/1280px-Flag_of_Umbria.svg.png",
            "details": {
                "capital": "Perugia",
                "population": "Approximately 882,000",
                "area": "8,456 sq km",
                "notableCities": ["Perugia", "Assisi", "Terni"],
                "famousFor": ["Hilltop Towns", "Religious Sites", "Umbrian Cuisine"],
                "landmarks": ["Basilica of Saint Francis of Assisi", "Palazzo dei Priori (Perugia)", "Cascata delle Marmore"]
            }
        },
        {
            "title": "Marche",
            "link": window.location.origin + window.location.pathname + '/Marche',
            "image": "https://www.italiapozaszlakiem.com/wp-content/uploads/2023/02/Cupramontana-Marche.jpeg",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Flag_of_Marche.svg/640px-Flag_of_Marche.svg.png",
            "details": {
                "capital": "Ancona",
                "population": "1.5 million",
                "area": "9,366 sq km",
                "notableCities": ["Ancona", "Pesaro", "Ascoli Piceno"],
                "famousFor": ["Coastline", "Wine", "Cuisine"],
                "landmarks": ["Grotte di Frasassi", "Monte Conero", "Urbino"]
            }
        },
        {
            "title": "Abruzzo",
            "link": window.location.origin + window.location.pathname + '/Abruzzo',
            "image": "https://italiasweetitalia.com/wp-content/uploads/revslider/the-magical-village-of-scanno1.jpg",
            "flag": "https://www.drapeaux-flags.com/images/drapeaux/500px_norm/ABRUZZO.png",
            "details": {
                "capital": "L'Aquila",
                "population": "1.3 million",
                "area": "10,831 sq km",
                "notableCities": ["L'Aquila", "Pescara", "Chieti"],
                "famousFor": ["Mountains", "National Parks", "Traditional Cuisine"],
                "landmarks": ["Gran Sasso", "Majella National Park", "Castel del Monte"]
            }
        },
        {
            "title": "Molise",
            "link": window.location.origin + window.location.pathname + '/Molise',
            "image": "https://www.italiarail.com/sites/default/files/inline-images/molise_0.jpg",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Molise.svg/640px-Flag_of_Molise.svg.png",
            "details": {
                "capital": "Campobasso",
                "population": "0.3 million",
                "area": "4,438 sq km",
                "notableCities": ["Campobasso", "Isernia", "Termoli"],
                "famousFor": ["Rural Landscape", "Authentic Cuisine", "Truffle Festivals"],
                "landmarks": ["Castello Monforte", "Santa Maria del Canneto Sanctuary", "Termoli Old Town"]
            }
        },
        {
            "title": "Puglia",
            "link": window.location.origin + window.location.pathname + '/Puglia',
            "image": "https://lp-cms-production.imgix.net/2024-02/GettyImages-1223038396-RFC.jpg",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Apulia.svg/1200px-Flag_of_Apulia.svg.png",
            "details": {
                "capital": "Bari",
                "population": "4 million",
                "area": "19,357 sq km",
                "notableCities": ["Bari", "Lecce", "Brindisi"],
                "famousFor": ["Trulli Houses", "Olive Oil", "Salento Peninsula"],
                "landmarks": ["Alberobello", "Castel del Monte", "Trani Cathedral"]
            }
        },
        {
            "title": "Basilicata",
            "link": "https://en.wikipedia.org/wiki/Basilicata",
            "image": "https://i.guim.co.uk/img/media/0a801e8faa27a6e30719f00f827d696193c5529e/0_192_5616_3370/master/5616.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=64b4b88cce08388e939b584a5b999c2d",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_Basilicata.svg/1280px-Flag_of_Basilicata.svg.png",
            "details": {
                "capital": "Potenza",
                "population": "0.55 million",
                "area": "9,992 sq km",
                "notableCities": ["Potenza", "Matera"],
                "famousFor": ["Sassi di Matera", "Lucanian Cuisine", "Pollino National Park"],
                "landmarks": ["Sassi di Matera", "Pollino National Park", "Castelmezzano"]
            }
        },
        {
            "title": "Calabria",
            "link": "https://en.wikipedia.org/wiki/Calabria",
            "image": "https://lp-cms-production.imgix.net/2019-06/503844741_full.jpg",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Flag_of_Calabria.svg/1200px-Flag_of_Calabria.svg.png",
            "details": {
                "capital": "Catanzaro",
                "population": "1.95 million",
                "area": "15,080 sq km",
                "notableCities": ["Reggio Calabria", "Cosenza", "Tropea"],
                "famousFor": ["Beautiful Coastlines", "Calabrese Cuisine", "Aspromonte National Park"],
                "landmarks": ["Tropea", "Aspromonte National Park", "Reggio Calabria Waterfront"]
            }
        },
        {
            "title": "Sicilia",
            "link": window.location.origin + window.location.pathname + '/Sicilia',
            "image": "https://content.api.news/v3/images/bin/f82dfbbabbe5522db96a14d65e91c2e6",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Sicilian_Flag.svg/800px-Sicilian_Flag.svg.png",
            "details": {
                "capital": "Palermo",
                "population": "5 million",
                "area": "25,711 sq km",
                "notableCities": ["Catania", "Messina", "Siracusa"],
                "famousFor": ["Mount Etna", "Historical Sites", "Sicilian Cuisine"],
                "landmarks": ["Valley of the Temples", "Mount Etna", "Taormina"]
            }
        }


    ]

    const countryArticles: any = [
        {
            title: 'Dolce Vita',
            image: 'https://i.pinimg.com/originals/65/e4/e4/65e4e41f9793537a1ba9aed5ffe61e86.jpg',
            content:
                'Tytuł: Dolce Vita: Rediscovering the Pleasures of Slow Living\n' +
                'In today\'s fast-paced world, the allure of the Dolce Vita lifestyle, rooted in the Italian concept of enjoying life\'s simple pleasures, is experiencing a revival. This article delves into the essence of Dolce Vita and its significance in the context of contemporary society.\n' +
                'The Dolce Vita lifestyle advocates for a slower pace, emphasizing savoring moments, fostering meaningful connections, and indulging in the finer things in life. It encourages individuals to prioritize experiences over possessions, quality over quantity, and mindfulness over mindlessness.\n' +
                'Amidst the relentless hustle and bustle of modern life, embracing the Dolce Vita philosophy offers a reprieve—a chance to recalibrate priorities and find contentment in the present moment. Whether it\'s relishing a leisurely meal with loved ones, strolling through cobblestone streets, or appreciating art and culture, adopting elements of Dolce Vita can enrich one\'s overall well-being.\n' +
                'Furthermore, the article explores how the principles of Dolce Vita extend beyond leisure and leisurely pursuits. It examines how incorporating mindfulness and intentionality into various aspects of life, such as work and relationships, can lead to greater fulfillment and satisfaction.\n' +
                'While the allure of productivity and constant connectivity may seem enticing, the Dolce Vita lifestyle serves as a gentle reminder of the importance of balance and moderation. It encourages individuals to cultivate a harmonious relationship with time, allowing space for rest, reflection, and rejuvenation.\n' +
                'In essence, embracing Dolce Vita isn\'t about completely abandoning modernity but rather about finding harmony between the conveniences of the digital age and the timeless joys of slow living. By rekindling an appreciation for life\'s simple pleasures and embracing a more deliberate approach to living, one can experience a profound sense of fulfillment and joy—a true embodiment of the Dolce Vita spirit.\n',
            link: window.location.origin + window.location.pathname + '/' + 'Dolce_Vita'
        },
        {
            title: 'Pizza Pasta',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/4b/a6/d7/we-love-pizza.jpg',
            content: 'Italy, a country of unparalleled culture, rich history, and exquisite cuisine, is primarily known for two exceptional dishes: pizza and pasta. Not only are they national symbols of Italy, but they have also become true culinary icons worldwide. Italian food is not just about taste; it\'s also about history, tradition, and passion passed down through generations.\n' +
                '\n' +
                'The origins of pizza can be traced back to Naples, where in the 18th century, it served as a nutritious and inexpensive meal for the city\'s poor inhabitants. Today, it\'s one of the most popular dishes globally. The secret to authentic Italian pizza lies in simplicity and the quality of ingredients. The dough should be thin, elastic, and crispy, while the tomato sauce must be made from ripe, sweet tomatoes and aromatic herbs.\n' +
                '\n' +
                'Similarly, pasta has its roots deeply embedded in Italy\'s history. The first mentions of it date back to the times of ancient Romans. Contemporary pasta, in its various forms, owes its popularity to Italy. From spaghetti to penne, the variety is endless. The key to perfect pasta is using durum wheat semolina for a firm texture and pairing it with the right sauce, whether it\'s a rich ragu or a simple olive oil and garlic.\n' +
                '\n' +
                'Italian cuisine is a celebration of flavors, textures, and traditions, and pizza and pasta stand as shining examples of its culinary prowess. Whether enjoyed in a rustic trattoria in the streets of Rome or a modern pizzeria in New York City, these dishes continue to captivate taste buds and bring people together around the world.',
            link: window.location.origin + window.location.pathname + '/' + 'Pizza_Pasta'
        },
    ]

    const sectionTabs: any = {
        'RegionList': {
            options: regionList
        },
        'MainInfo': {
            quickCountryDesc: 'Italy, a country steeped in rich history, cultural heritage, and stunning landscapes, beckons travelers with its irresistible charm. Nestled in southern Europe, this boot-shaped peninsula boasts a diverse tapestry of experiences. From the ancient ruins of Rome, the eternal city, to the romantic waterways of Venice, Italy is a living museum of architectural marvels.\n' +
                'Culinary delights abound in every corner, with Italy\'s cuisine celebrated worldwide. Indulge in authentic pizza in Naples, savor freshly-made pasta in Bologna, or sample gelato in Florence\'s bustling piazzas.\n' +
                'Italy\'s natural beauty is equally captivating, from the sun-kissed shores of the Amalfi Coast to the breathtaking vistas of the Dolomite mountains. Explore the picturesque countryside of Tuscany, dotted with vineyards and olive groves, or immerse yourself in the azure waters of the Italian Riviera.\n' +
                'Art enthusiasts will find inspiration at every turn, with masterpieces by Michelangelo, Leonardo da Vinci, and Botticelli adorning museums and churches across the country.\n' +
                'Italy\'s vibrant culture is embodied in its passionate people, lively festivals, and timeless traditions, inviting visitors to embrace "La Dolce Vita" – the sweet life – and create unforgettable memories in this enchanting land.\n'
        },
        'GeneralInformation': {
            data: {
                population: {
                    value: '59,11 mln',
                    type: 'text'
                },
                capital: {
                    value: 'Rome',
                    type: 'text'
                },
                currency: {
                    value: 'Euro €',
                    type: 'text'
                },
                food: {
                    value: 'Pizza, Pasta',
                    type: 'text'
                },
                numberOfRegions: {
                    value: 39,
                    type: 'text'
                },
                availAbleHotels: {
                    value: 11023,
                    type: 'text'
                },
                govLink: {
                    value: 'https://www.governo.it/en',
                    type: 'link'
                }
            },
        },
        'Articles': {
            options: countryArticles
        },
        'Offers': {},
        'ImageGallery': {}
    }


    const fuckingMapContent: any = {
        mapStyle: 'mapbox://styles/mksbrd/cltvgzxuc009i01qs9vl62rzl',
        initialState: {
            latitude: 42.5,
            longitude: 12.5,
            zoom: 5
        },
        geoJson: geoJSOn
    }


    const sections: any = {
        MainInfo: Overview,
        RegionList: Places,
        GeneralInformation: TravelInformation,
        Articles: Artciles
    }

    return (
        <>
            <Styled.Country__Left__Background
                src={backgroundImage}
            />
            <PageHolder>
                <Styled.Country__Section__Background>
                    <Styled.Country__Title>
                        {countryName}
                    </Styled.Country__Title>
                    <FlexBox
                        style={{
                            width: '100%',
                            height: '400px'
                        }}
                    >
                        <InterActiveMap
                            mapStyle={fuckingMapContent.mapStyle}
                            initialState={fuckingMapContent.initialState}
                            geoJson={fuckingMapContent.geoJson}
                        />
                    </FlexBox>
                    <Styled.Country__Separator/>
                    <SectionTabs
                        tabs={Object.keys(sectionTabs)}
                        onClick={(tab: string) => {
                            refList.current[tab].scrollIntoView({behavior: 'smooth', block: 'nearest'})
                        }}
                    />
                    {Object.keys(sectionTabs).map((section: string) => {


                        return (
                            <Section
                                content={sections[section] ?
                                    createElement(
                                        sections[section] as any,
                                        {...sectionTabs[section]},
                                    ) : null
                                }
                                ref={refList}
                                sectionName={section}
                                title={t(`lbl_${section}`)}
                            />

                        )
                    })}

                </Styled.Country__Section__Background>
            </PageHolder>
            <Styled.Country__Right__Background
                src={backgroundImage}
            />
        </>
    )
}
export default CountryPage