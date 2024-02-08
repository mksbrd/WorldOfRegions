import {Styled} from "./QuickIdeas.styles"
import useMainPage from "../../useMainPage";
import {defaultSliderState, SwiperContainer, SwiperSlide} from "../../../../lib/UI/Swiper";
import {useRef, useState} from "react";
import QuickIdeaBox from "./QuickIdeaBox";
import {NextButton, PrevButton} from "../../../../lib/UI/Swiper/Buttons";


const QuickIdeas = () => {

    const [sliderState, setSliderState] = useState(defaultSliderState);

    const swiperRef = useRef<any>(null)

    const {quickIdeas} = useMainPage()

    const onActiveIndexChange = (swiper: any) => {
        setSliderState((state: any) => ({
            ...state,
            progress: swiper.progress,
            index: swiper?.activeIndex,
        }));
    };

    const onPrevButtonClick = (event: any) => {
        event.stopPropagation()
        swiperRef.current.swiper.slidePrev();
    }

    const onNextButtonClick = (event: any) => {
        event.stopPropagation()
        swiperRef.current.swiper.slideNext();
    }

    const sideContent = (
        <Styled.Content__On__Side__Holder>
            {quickIdeas.map((item: any) => (
                <QuickIdeaBox
                    key={`side_quick_idea_${item.title}`}
                    item={item}
                />
            ))}
        </Styled.Content__On__Side__Holder>
    )

    const collapsedContent = (
        <Styled.Content__Small__Screen>
            {sliderState.index !== 0 && (
                <PrevButton
                    isDark={true}
                    onClick={onPrevButtonClick}
                />
            )}
            <SwiperContainer
                onActiveIndexChange={onActiveIndexChange}
                ref={swiperRef}
            >
                {quickIdeas.map((item: any) => (
                    <SwiperSlide style={{
                        width: '280px',
                        margin: '0 10px'
                    }}>
                        <QuickIdeaBox
                            key={`collapsed_quick_idea_${item.title}`}
                            item={item}
                        />
                    </SwiperSlide>
                ))}
            </SwiperContainer>
            {sliderState.progress < 1 && (
                <NextButton
                    isDark={true}
                    onClick={onNextButtonClick}
                />
            )}
        </Styled.Content__Small__Screen>
    )

    return (
        <Styled.Quick__Ideas__Holder>
            {sideContent}
            {collapsedContent}
            <Styled.Quick__Ideas__PoweredBy>
                {'Powered by '}
                <span
                    style={{
                        fontWeight: 'bold',
                        fontFamily: 'serif'
                    }}
                >
                    Book
                </span>
                <span
                    style={{
                        marginLeft: '4px',
                        fontFamily: "HandWritenBrdStyle"
                    }}
                >
                    Brd
                </span>
            </Styled.Quick__Ideas__PoweredBy>
        </Styled.Quick__Ideas__Holder>
    )
}

export default QuickIdeas