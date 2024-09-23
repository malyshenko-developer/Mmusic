'use client';

import { selectTheme } from "@/lib/selectors/theme/selectTheme";
import { darkTheme, lightTheme } from "@/theme/themes";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";

const ThemeProviderWrapper = ({
    children
}: {
    children: React.ReactNode
}) => {
    const { isDarkTheme } = useSelector(selectTheme);

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <CssBaseline />
            <Box maxWidth={'1920px'}>
                { children }
            </Box>
        </ThemeProvider>
    )
}

export default ThemeProviderWrapper;