import { Box } from "@mui/material"
import logo from '/public/logo.svg';
import Image from "next/image";
import { HEADER_STYLES } from "@/styles/header.style";
import ThemeButton from "../ui/ThemeButton";

const Header = () => {
    return (
        <Box component={'header'} sx={HEADER_STYLES}>
            <Image src={logo} alt='Mmusic logo' />
            <ThemeButton />
        </Box>
    )
}

export default Header;