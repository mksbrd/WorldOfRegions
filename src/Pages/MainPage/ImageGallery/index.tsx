import {Styled} from "./ImageGallery.styles"
import {defaultSliderState, SwiperContainer, SwiperSlide} from "../../../lib/UI/Swiper";
import {useEffect, useRef, useState} from "react";
import moment from "moment";

type ImageGalleryProps = {
    slidesList: any[]
}

const ImageGallery = (
    {
        slidesList
    }: ImageGalleryProps
) => {

    const [galleryControls, setGalleryControls] = useState<any>({
        lastChange: undefined
    })

    const [trigger, setTrigger] = useState<any>(undefined)

    const [sliderState, setSliderState] = useState(defaultSliderState);

    const swiperRef = useRef<any>(null)

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

    const onImageClickHandler = (link: string) => {
        window.open(link, '_blank')
    }

    useEffect(() => {
        if (!trigger) {
            setGalleryControls((state: any) => ({
                ...state,
                lastChange: moment()
            }))
            setTimeout(() => {
                setTrigger(moment())
            }, 5000)
        }
        const numberOfSeconds = moment().diff(galleryControls.lastChange, 'seconds')
        if (numberOfSeconds > 5) {
            const nextNumber = sliderState.index + 1 > slidesList.length - 1 ? 0 : sliderState.index + 1
            setGalleryControls((state: any) => ({
                ...state,
                lastChange: moment()
            }))
            swiperRef.current.swiper.slideTo(nextNumber, nextNumber === 0 ? 600 : 300);
        }
        setTimeout(() => {
            setTrigger(moment())
        }, 5000)
    }, [trigger])


    return (
        <Styled.Image__Gallery__Holder>
            <SwiperContainer
                onActiveIndexChange={onActiveIndexChange}
                ref={swiperRef}
            >
                {slidesList.map((slideOption: any, index: number) => (
                        <SwiperSlide
                            key={`slide_${slideOption.title}_${index}`}
                        >
                            <Styled.Swipe__Slide__Content__Holder
                                onClick={() => onImageClickHandler(slideOption.link)}
                            >
                                <Styled.Image__SEO
                                    href={slideOption.link}
                                >
                                    {slideOption.title}
                                </Styled.Image__SEO>
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
                {slidesList.map((image: any, index: number) => (
                    <Styled.Image__Navigation__Dot
                        key={`image_gallery_navi_dot_${image.title}`}
                        onClick={() => onDotsChangeHandler(index)}
                        isFocused={sliderState.index === index}
                    />
                ))}

            </Styled.Images__Navigation__Dots>
        </Styled.Image__Gallery__Holder>
    )
}
export default ImageGallery