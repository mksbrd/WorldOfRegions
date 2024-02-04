import React, {forwardRef, useEffect, useRef, useState} from "react";
import {Styled} from "../SelectBookBrd.styles";
import SelectedTags from "./SeletedTags";
import FlexBox from "../../FlexBox";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import Text from "../../Text";
import {useTranslation} from "react-i18next";
import {isEmpty, isUndefined, toNumber} from "lodash-es";
import Tooltip from "../../Tooltip";
import {useDebouncedCallback} from "use-debounce";
import SkeletonBox from "../../SkeletonBox/SkeletonBox";

type SimpleSelectFieldProps = {
    customSelectedOption?: (label: string) => any
    isLoading?: boolean
    isMulti?: boolean
    isSmall?: boolean
    style?: React.CSSProperties
    title?: string
    placeholder?: string
    selectedOptions?: any[]
    isClearAble?: boolean
    onClick?: any
    onFocus?: any
    onBlur?: any
    onClear?: any
    isDropDownOpen?: boolean
}
const defaultProps = {
    customSelectedOption: undefined,
    isLoading: false,
    isMulti: true,
    isSmall: false,
    style: undefined,
    title: undefined,
    placeholder: 'insert placeholder',
    selectedOptions: [null],
    isClearAble: true,
    onClick: undefined,
    onClear: undefined,
    onFocus: undefined,
    onBlur: undefined,
    isDropDownOpen: false
}

const createTextForToolTip = (overFlowOptions: any[]) => overFlowOptions.map((item: any) => item.label).join(', ')

const getTagWidth = (tag: any) => {
    const length = tag?.label?.length
    const width = (length * 7) + 12
    return toNumber(width)
}

const getOptionsList = (width: any, selectedOptions: any[], setInputTags: any) => {

    let availableWidth = width

    const visibleTags: any[] = []

    const hiddenTags: any[] = []

    selectedOptions?.map((tag: any, index: number) => {
        const tagWidth = getTagWidth(tag)
        const fitsInInput = tagWidth <= availableWidth
        if (fitsInInput) {
            availableWidth = availableWidth - tagWidth
            visibleTags.push({...tag, maxWidth: tagWidth, minWidth: tagWidth})
        } else if (index === 0) {
            visibleTags.push({...tag, maxWidth: availableWidth, minWidth: tagWidth})
            availableWidth = 0
        } else {
            hiddenTags.push(tag)
        }
    })
    setInputTags({
        visibleTags,
        hiddenTags
    })
}

const Field = forwardRef<HTMLDivElement, SimpleSelectFieldProps>((
    {
        customSelectedOption,
        isLoading,
        isMulti,
        isSmall,
        style,
        title,
        placeholder,
        selectedOptions,
        isClearAble,
        onClick,
        onBlur,
        onClear,
        onFocus,
        isDropDownOpen
    }, ref) => {
    const inputRef = useRef<any>();

    const [elementRef, setElementRef] = useState<HTMLDivElement | null>(null);

    const [elementWidth, setElementWidth] = useState<number>(elementRef?.clientWidth ? elementRef?.clientWidth - 20 as number : 0)

    const [inputTags, setInputTags] = useState<any>({})

    const {t} = useTranslation();

    const onFocusChange = () => {
        if (onFocus) {
            onFocus()
        }
    }

    const onClickChangeHandler = (event: any) => {
        if (onClick) {
            onClick(event)
        }
    }

    const onClearHandler = () => {
        onClear()
    }

    const onBlurChange = () => {
        if (onBlur) {
            onBlur()
        }
    }

    const ResizeWidthChange = useDebouncedCallback(() => {
        setElementWidth(elementRef?.clientWidth ? elementRef?.clientWidth - 70 as number : 0)
    }, 200)

    window?.addEventListener('resize', () => {
        ResizeWidthChange()
    })

    useEffect(() => {
        setElementWidth(elementRef?.clientWidth ? elementRef?.clientWidth - 70 as number : 0)
    }, [elementRef])

    useEffect(() => {
        getOptionsList(elementWidth, selectedOptions as any[], setInputTags)
    }, [elementWidth])

    useEffect(() => {
        getOptionsList(elementWidth, selectedOptions as any[], setInputTags)
    }, [selectedOptions])


    return (
        <Styled.SimpleSelectField
            ref={ref}
            isFocused={!!isDropDownOpen}
            style={style}
        >
            <Styled.ContentsHolder
                ref={setElementRef}>
                <Styled.CustomTextInput
                    ref={inputRef as any}
                    onFocus={onFocusChange}
                    onBlur={onBlurChange}
                    hideTextInput={true}
                    isClearAble={false}
                    showIcon={false}
                    readOnly={true}
                    value={''}
                    placeholder={''}
                    style={{
                        width: '1px',
                        zIndex: '-1',
                        position: 'absolute',
                        border: "none"
                    }}
                />
                {isLoading ? (
                    <>
                        <SkeletonBox
                            margin={'6px 0 4px 5px'}
                            height={'18px'}
                            width={`${Math.random() * (180 - 95) + 95}px`}
                        />
                    </>
                ) : (
                    <>
                        {selectedOptions?.length as any === 0 && selectedOptions ?
                            (
                                <Styled.Placeholder__Holder
                                    onClick={onClickChangeHandler}
                                >
                                    <Styled.Placeholder>
                                        {t(`${placeholder}`)}
                                    </Styled.Placeholder>
                                </Styled.Placeholder__Holder>
                            ) : (
                                <>
                                    <Styled.OptionsHolder
                                        onClick={onClickChangeHandler}
                                    >
                                        {isMulti ? (
                                            <>
                                                {inputTags?.visibleTags?.map((tag: any) => {
                                                    const maxWidth = tag.maxWidth - 8
                                                    const minWidth = tag.minWidth - 8
                                                    const isOverFlow = minWidth > maxWidth
                                                    return (
                                                        <>
                                                            <Tooltip
                                                                disabled={!isOverFlow}
                                                                content={tag.label}
                                                            >
                                                                <FlexBox>

                                                                    <SelectedTags
                                                                        maxWidth={maxWidth}
                                                                        label={tag.label}
                                                                    />

                                                                </FlexBox>
                                                            </Tooltip>
                                                        </>
                                                    )

                                                })}
                                                <FlexBox>
                                                    {inputTags?.hiddenTags?.length > 0 && (
                                                        <Tooltip
                                                            content={createTextForToolTip(inputTags?.hiddenTags)}
                                                        >
                                                            <Styled.SelectedTag>
                                                                <FlexBox>
                                                                    <Text
                                                                        style={{
                                                                            padding: '3px',
                                                                            fontSize: "12px"
                                                                        }}
                                                                    >
                                                                        {inputTags?.hiddenTags?.length}
                                                                        {'+'}
                                                                    </Text>
                                                                </FlexBox>
                                                            </Styled.SelectedTag>
                                                        </Tooltip>
                                                    )}
                                                </FlexBox>
                                            </>
                                        ) : (
                                            <FlexBox

                                                style={{
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    alignItems: "center",
                                                    maxWidth: 'inherit',
                                                    width: "100%",
                                                    height: '100%'
                                                }}>
                                                {!isEmpty(selectedOptions && selectedOptions[0]) ? (
                                                    <>
                                                        {isUndefined(customSelectedOption) ? (
                                                            <Styled.SimpleSelect__Field__Value__Text>
                                                                {selectedOptions !== undefined && selectedOptions[0].label}
                                                            </Styled.SimpleSelect__Field__Value__Text>
                                                        ) : (
                                                            <>
                                                                {customSelectedOption(selectedOptions !== undefined && selectedOptions[0].label)}
                                                            </>
                                                        )}
                                                    </>
                                                ) : (
                                                    <Styled.Placeholder>
                                                        {placeholder}
                                                    </Styled.Placeholder>
                                                )}
                                            </FlexBox>
                                        )}
                                    </Styled.OptionsHolder>
                                    {isClearAble && (
                                        <Styled.ClearButtonHolder>
                                            {selectedOptions?.length as any > 0 && (
                                                <FontAwesomeIcon
                                                    onClick={onClearHandler}
                                                    icon={faClose}
                                                    style={{
                                                        color: 'red',
                                                        width: '12px',
                                                        height: '12px',
                                                        marginLeft: '0'

                                                    }}
                                                />
                                            )}
                                        </Styled.ClearButtonHolder>
                                    )}
                                </>
                            )}
                    </>
                )}
            </Styled.ContentsHolder>
        </Styled.SimpleSelectField>
    )

})
Field.defaultProps = defaultProps;
export default Field