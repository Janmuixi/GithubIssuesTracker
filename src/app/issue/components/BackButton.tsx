import LeftArrowIcon from "@/components/icons/LeftArrowIcon";
import Link from "next/link";
import { BackButtonStyled } from "../styles";

export function BackButton() {
    return (
        <BackButtonStyled>
            <Link href={'/'}>
                <LeftArrowIcon />
                <span>Return to list</span>
            </Link>
        </BackButtonStyled>
    )
}