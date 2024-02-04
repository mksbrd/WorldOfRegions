import Field from "../Field/Field";
import React, {useEffect, useRef, useState} from "react";
import Modal from "../../Modal/ModalsTypes/Modal";
import FlexBox from "../../FlexBox";
import {isMobileOnly} from "react-device-detect";
import Button from "../../Button";
import SimpleOptions from "./SimpleOptions";
import {Styled} from "../SelectBookBrd.styles";
import MultiOptions from "./MultiOptions";
import {includes, isEmpty, toNumber} from "lodash-es";
import Drawer from "../../Drawer";
import {useTranslation} from "react-i18next";
import BrdLoader from "../../BrdLoader";
import usePopperPositioning from "../../../Hooks/usePopperPositioning";
import useOnClickOutside from "../../../Hooks/useOnClickOutside";

type SimpleSelectProps = {
    listMinWidth?: number
    isLoadingMore?: boolean
    isLoadingAppliedList?: boolean
    onOpen?: () => void,
    customSelectedOption?: (label: string) => any
    title?: string
    isSmall?: boolean
    isClearAble?: boolean
    options?: any[]
    appliedList?: any[]
    isMulti?: boolean
    setAppliedList?: (value: any) => void
    placeholder?: string
    onApplyChangeHandler?: (value: any) => void
    setIsSelectOpen?: any
}

const defaultProps = {
    listMinWidth: undefined,
    customSelectedOption: undefined,
    isLoadingAppliedList: false,
    isLoadingMore: false,
    onOpen: undefined,
    title: '',
    isSmall: false,
    isClearAble: true,
    options: [],
    appliedList: [],
    isMulti: [],
    setAppliedList: undefined,
    placeholder: '',
    onApplyChangeHandler: undefined,
    setIsSelectOpen: undefined
}

const Select = ({
                    listMinWidth,
                    customSelectedOption,
                    isLoadingAppliedList,
                    isLoadingMore,
                    onOpen,
                    title,
                    isSmall,
                    options,
                    isClearAble,
                    appliedList,
                    setAppliedList,
                    placeholder,
                    isMulti,
                    onApplyChangeHandler,
                    setIsSelectOpen
                }: SimpleSelectProps) => {

    const inputElement = useRef<HTMLDivElement>();
    const inputElementWidth = useRef<HTMLDivElement>();

    const [modalElement, setModalElement] = useState<HTMLDivElement | null>(null);

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [focusFields, setFocusField] = useState<boolean>(false)

    const [selectedList, setSelectedList] = useState<any[]>(appliedList?.map((item: any) => item.value) as any)

    const {t} = useTranslation();

    const {styles, attributes} = usePopperPositioning({
        targetElementRef: inputElement,
        popperElementRef: modalElement,
        applyMaxSizeEnabled: true,
        zIndex: 9999,
        padding: 15,
    });

    const onClose = (isApply?: boolean) => {
        if (setIsSelectOpen) {
            setIsSelectOpen(false)
        }
        if (!isApply) {
            setSelectedList(appliedList?.map((item: any) => item.value) as any[])
        }
        setIsOpen(false)
        setFocusField(false)
    }

    const onApply = () => {
        if (options) {
            const properList: any[] = options.filter((item: any) => includes(selectedList, item.value))
            if (onApplyChangeHandler) {
                onApplyChangeHandler(properList)
            }
        }
        onClose(true)
    }

    const onClear = () => {
        setSelectedList([])
        if (onApplyChangeHandler) {
            onApplyChangeHandler([])
        }
        if (setAppliedList) {
            setAppliedList([])
        }
    }

    const onFieldFocus = () => {
        setFocusField(true)
    }

    const onFieldBlur = () => {
        setFocusField(false)
    }

    const onFieldClick = () => {
        if (isOpen) {
            onClose()
        } else {
            if (onOpen) {
                onOpen()
            }
            if (setIsSelectOpen) {
                setIsSelectOpen(true)
            }
            setFocusField(true)
            setIsOpen(true)
        }
    }

    const onSimpleOptionClick = (label: string, value: string) => {
        if (setAppliedList) {
            const option = options?.filter((item: any) => item.value == value)[0]
            setAppliedList(option)
        }
        onClose()
    }

    const onMultiOptionClick = (label: string, value: string) => {
        if (includes(selectedList, value)) {
            const newList = selectedList.filter((item: any) => item !== value)
            setSelectedList(newList)
        } else {
            const newList: any[] = []
            selectedList?.map((item: any) => newList.push(item))
            newList.push(value)
            setSelectedList(newList)
        }
    }

    useOnClickOutside(modalElement, () => onClose());

    useEffect(() => {
        const list = appliedList ?? []
        setSelectedList(list?.map((item: any) => item.value))
    }, [appliedList])

    const controls = (
        <Styled.Control__Button__Holder>
            <Button
                label={t('lbl_clear')}
                type={'white'}
                onClick={onClear}
                style={{
                    flexGrow: "1",
                    margin: "4px 2px",
                    padding: "2px 0",
                    minWidth: '80px',
                    maxWidth: isMobileOnly ? undefined : '150PX'

                }}
            />
            <Button
                label={t('lbl_apply')}
                onClick={onApply}
                style={{
                    flexGrow: "1",
                    margin: "4px 2px",
                    padding: "2px 0",
                    minWidth: '80px',
                    maxWidth: isMobileOnly ? undefined : "150px"

                }}
            />


        </Styled.Control__Button__Holder>
    )
    const content = (
        <>
            {!isMulti ? (
                <Styled.SimpleOptionsHolder>
                    {!isEmpty(options) ? options?.map((option: any, index: number) => {

                        const isChecked = includes(selectedList, option.value)
                        const isCustom = !!option?.isCustom
                        return (
                            <SimpleOptions
                                key={`simple_option_${index}`}
                                isCustom={isCustom}
                                isChecked={isChecked}
                                onOptionClick={onSimpleOptionClick}
                                label={option.label}
                                value={option.value}
                            />
                        )
                    }) : (
                        <Styled.No__Offers__Label>
                            {t('lbl_no_options')}
                        </Styled.No__Offers__Label>
                    )}
                    {isLoadingMore && (
                        <Styled.Loading__More__Holder>
                            <Styled.Loading__More__Label>
                                {t('lbl_loading_more')}
                            </Styled.Loading__More__Label>
                            <BrdLoader
                                style={{
                                    overflow: "hidden"
                                }}
                            />
                        </Styled.Loading__More__Holder>
                    )}
                </Styled.SimpleOptionsHolder>
            ) : (
                <Styled.MultiOptionsHolder>
                    {options?.map((option: any, index: number) => {
                        const isChecked = includes(selectedList, option.value)
                        return (
                            <MultiOptions
                                key={`multi_option_${index}`}
                                isChecked={isChecked}
                                onOptionClick={onMultiOptionClick}
                                label={option.label}
                                value={option.value}
                            />
                        )
                    })}
                </Styled.MultiOptionsHolder>
            )}
        </>
    )
    return (
        <>
            <FlexBox
                style={{maxWidth: "inherit", flexGrow: '1'}}
                ref={inputElementWidth as any}
            >
                <Field
                    customSelectedOption={customSelectedOption}
                    isLoading={isLoadingAppliedList}
                    isMulti={isMulti}
                    isSmall={isSmall}
                    placeholder={placeholder}
                    ref={inputElement as any}
                    isClearAble={isClearAble}
                    selectedOptions={appliedList}
                    onBlur={onFieldBlur}
                    onFocus={onFieldFocus}
                    onClick={onFieldClick}
                    onClear={onClear}
                    isDropDownOpen={focusFields}
                />
            </FlexBox>
            <>
                {isMobileOnly ? (
                    <Drawer
                        title={title}
                        position={'bottom'}
                        ref={setModalElement}
                        onClose={onClose}
                        isOpen={isOpen}
                        controls={isMulti ? controls : undefined}
                    >
                        <FlexBox
                            style={{
                                minHeight: '25vh',
                                maxHeight: '60vh'
                            }}
                        >
                            {content}
                        </FlexBox>
                    </Drawer>
                ) : (
                    <Modal
                        ref={setModalElement}
                        width={listMinWidth ? listMinWidth > toNumber(inputElementWidth.current?.clientWidth) ? listMinWidth : toNumber(inputElementWidth.current?.clientWidth) : toNumber(inputElementWidth.current?.clientWidth)}
                        showOverlay={false}
                        isOpen={isOpen}
                        positionedByPopper
                        style={styles.popper}
                        {...attributes.popper}
                        controls={isMulti ? controls : undefined}
                    >
                        <FlexBox
                            style={{
                                maxHeight: '200px'
                            }}
                        >
                            {content}
                        </FlexBox>
                    </Modal>
                )}
            </>
        </>
    )

}
Select.defaultProps = defaultProps;
export default Select