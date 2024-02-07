import {Styled} from "./ImageGallery.styles"
import {defaultSliderState, SwiperContainer, SwiperSlide} from "../../../lib/UI/Swiper";
import {useEffect, useRef, useState} from "react";
import moment from "moment";

const ImageGallery = () => {

    const [galleryControls, setGalleryControls] = useState<any>({
        lastChange: undefined
    })

    const [trigger, setTrigger] = useState<any>(undefined)

    const [sliderState, setSliderState] = useState(defaultSliderState);

    const swiperRef = useRef<any>(null)

    const imagesList = [
        {
            title: 'The Place Of Wonders',
            location: 'United Arabic Emirates • Dubai',
            image: 'https://www.visitdubai.com/-/media/gathercontent/poi/b/burj-khalifa/fallback-image/poi-burj-khalifa-3-dtcm-jun-2023.jpg'
        },
        {
            title: 'Older Than You Can Imagine',
            location: 'Italy • Rome',
            image: 'https://tourismmedia.italia.it/is/image/mitur/20220127150143-colosseo-roma-lazio-shutterstock-756032350-1?wid=1600&hei=900&fit=constrain,1&fmt=webp'
        },
        {
            title: 'Delicious Food And Not Only',
            location: 'Greece • Athens',
            image: 'https://www.state.gov/wp-content/uploads/2023/07/shutterstock_1168009126v2.jpg'
        },
        {
            title: 'There Is No Better Place',
            location: 'Spain • Madrid',
            image: 'https://i.natgeofe.com/k/e800ca90-2b5b-4dad-b4d7-b67a48c96c91/spain-madrid.jpg?w=1084.125&h=609'
        },
        {
            title: 'Discover The History Of Empire',
            location: 'Poland • Cracow',
            image: 'https://study.gov.pl/sites/default/files/ostap-senyuk-7rcdqeuq1rg-unsplash_0.jpg'
        }

    ]

    const onActiveIndexChange = (swiper: any) => {
        setSliderState((state: any) => ({
            ...state,
            progress: swiper.progress,
            index: swiper?.activeIndex,
        }));
    };

    const onDotsChangeHandler = (index: number) => {
        swiperRef.current.swiper.slideTo(index);
        setGalleryControls((state: any) => ({
            ...state,
            lastChange: moment()
        }))
    }

    useEffect(() => {
        if (!trigger) {
            setGalleryControls((state: any) => ({
                ...state,
                lastChange: moment()
            }))
            setTimeout(() => {
                setTrigger(moment())
            }, 8000)
        }
        const isChange = moment().diff(galleryControls.lastChange, 'seconds')
        if (isChange) {
            const nextNumber = sliderState.index + 1 > imagesList.length - 1 ? 0 : sliderState.index + 1
            setGalleryControls((state: any) => ({
                ...state,
                lastChange: moment()
            }))
            swiperRef.current.swiper.slideTo(nextNumber, nextNumber === 0 ? 600 : 300);
        }
        setTimeout(() => {
            setTrigger(moment())
        }, 8000)
    }, [trigger])


    return (
        <Styled.Image__Gallery__Holder>
            <SwiperContainer
                onActiveIndexChange={onActiveIndexChange}
                ref={swiperRef}
            >
                {imagesList.map((slideOption: any) => (
                        <SwiperSlide>
                            <Styled.Swipe__Slide__Content__Holder>
                                <Styled.Swiper__Image
                                    src={slideOption.image}
                                />
                                <Styled.Slide__Additional__Content__Holder>
                                    <Styled.Image__Slide__Description>
                                        {slideOption.location}
                                    </Styled.Image__Slide__Description>
                                    <Styled.Image__Slide__Title>
                                        {slideOption.title}
                                    </Styled.Image__Slide__Title>
                                </Styled.Slide__Additional__Content__Holder>
                            </Styled.Swipe__Slide__Content__Holder>
                        </SwiperSlide>
                    )
                )}
            </SwiperContainer>
            <Styled.Images__Navigation__Dots>
                {imagesList.map((image: any, index: number) => (
                    <Styled.Image__Navigation__Dot
                        onClick={() => onDotsChangeHandler(index)}
                        isFocused={sliderState.index === index}
                    />
                ))}

            </Styled.Images__Navigation__Dots>
        </Styled.Image__Gallery__Holder>
    )
}
export default ImageGallery