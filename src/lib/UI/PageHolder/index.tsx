import {Styled} from "./PageHolder.styles";


type PageHolderProps = {
    children: any
}

const PageHolder = (
    {
        children
    }: PageHolderProps) => {

    return (
        <Styled.PageHolder>
            {children}
        </Styled.PageHolder>

    );

}

export default PageHolder