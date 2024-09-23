'use client';
import { IconButton } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useSelector } from "react-redux";
import { selectTheme } from "@/lib/selectors/theme/selectTheme";
import { useAppDispatch } from "@/lib/hooks";
import { toggleTheme } from "@/lib/features/themes/themeSlice";

const ThemeButton = () => {
    const { isDarkTheme } = useSelector(selectTheme);
    const dispatch = useAppDispatch();

    const handleToggleClick = () => {
        dispatch(toggleTheme());
    }

    return (
        <IconButton size='large' onClick={handleToggleClick}>
            { isDarkTheme ? <DarkModeIcon /> : <LightModeIcon /> }
        </IconButton>
    )
}

export default ThemeButton;