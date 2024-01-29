import { LoaderContainerStyled, LoaderStyled } from "./styles";

export default function Loader() {
    return (
        <LoaderContainerStyled className="loader-container">
            <LoaderStyled><div className="loader"></div></LoaderStyled>
        </LoaderContainerStyled>
    )
}