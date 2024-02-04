import {useTranslation} from "react-i18next";
import {Styled} from "./DropFile.styles";
import {faFileArrowUp} from "@fortawesome/pro-light-svg-icons";
import {useRef} from "react";
import {faClose} from "@fortawesome/free-solid-svg-icons";

enum dropFileType {
    jpg = '.jpg',
    gif = ".gif",
    png = '.png'
}

type DropFileProps = {
    elementHeight?: number
    onChange: (file: any) => any
    value: any
    types?: dropFileType[]
}
const defaultProps = {
    elementHeight: 150,
    types: []
}

const DropFile = (
    {
        value,
        elementHeight,
        onChange,
        types
    }: DropFileProps
) => {

    const {t} = useTranslation()

    const fileInput = useRef<HTMLInputElement>(null);

    const onChangeTest = () => {
        const files = fileInput?.current?.files ?? [];
        if (files.length) {
            onChange(files[0])
        }
    }

    const onFieldClick = () => {
        if (fileInput?.current) {
            fileInput?.current?.click()
        }
    }

    const onDragEnterHandler = (event: React.DragEvent) => {
        event.preventDefault();
        event.stopPropagation();

    };

    const onDragLeaveHandler = (event: React.DragEvent) => {
        event.preventDefault();
        event.stopPropagation();

    };

    const onDragOverHandler = (event: React.DragEvent) => {
        event.preventDefault();
    };

    const onFieldDrop = (event: any) => {
        event.preventDefault();

        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            const file = event.dataTransfer.files[0];
            onChange(file);
        }
    }

    const onSelectedFileClick = (event: any) => {
        event.stopPropagation()
        event.stopCapture()
        event.isPropagationStopped()
        onChange({})
    }

    const onDeleteSelectedClickHandler = (event: any) => {
        event.stopPropagation()
        onChange({})
    }

    const content = !value?.name ? (
        <Styled.Elements__Positioner>
            <Styled.Drop__File__Icon
                icon={faFileArrowUp}
            />
            <Styled.Drop__File__Label>
                {t('lbl_drop_your_image')}
            </Styled.Drop__File__Label>
            <Styled.Drop__File__Types>
                {types?.map((type, index) => {
                    if (index === 0) {
                        return type
                    }
                    return `, ${type}`
                })}
            </Styled.Drop__File__Types>
        </Styled.Elements__Positioner>
    ) : (
        <Styled.Elements__Positioner>
            <Styled.Selected__File__Holder
                onClick={onSelectedFileClick}
            >
                <Styled.Selected__File>
                    {value?.name}
                </Styled.Selected__File>
                <Styled.Delete__File__Button
                    onClick={onDeleteSelectedClickHandler}
                    icon={faClose}
                />
            </Styled.Selected__File__Holder>
        </Styled.Elements__Positioner>
    )
    return (
        <>
            <Styled.Filed__Drop__Input
                ref={fileInput}
                onChange={onChangeTest}
                elementHeight={elementHeight as number}
                accept={types?.map((type: string) => `${type}, `) as any}
                type={"file"}
            />
            <Styled.DropFilePlaceHolder
                onDrop={onFieldDrop}
                onDragEnter={onDragEnterHandler}
                onDragLeave={onDragLeaveHandler}
                onDragOver={onDragOverHandler}
                onClick={onFieldClick}
                elementHeight={elementHeight as number}
            >
                {content}
            </Styled.DropFilePlaceHolder>
        </>
    )

}

DropFile.defaultProps = defaultProps

export default DropFile