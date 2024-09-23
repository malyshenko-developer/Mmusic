'use client';

import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface TypeBackground {
        secondary?: string;
    }

    interface Palette {
        background: TypeBackground
    }

    interface Theme {
        palette: Palette
    }
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#181A27',
            secondary: '#232538'
        },
        text: {
            primary: '#E0E0E0'
        }
    },
    typography: {
        allVariants: {
            color: ' #FFFFFF'
        },
        body1: {
            color: '#E0E0E0'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#2E3246',
                    color: '#E0E0E0',
                    fontWeight: '600',
                    '&:hover': {
                        backgroundColor: '#56C8D8',
                        color: '#3A3A3A',
                        fontWeight: '600'
                    },
                },
                
            }
        }
    }
});

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#F5F7F8',
            secondary: '#EBEDF0'
        },
        text: {
            primary: '#3A3A3A'
        }
    },
    typography: {
        allVariants: {
            color: '#1F1F1F'
        },
        body1: {
            color: '#3A3A3A'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#D8DEE3',
                    color: '#3A3A3A',
                    fontWeight: '600',
                    '&:hover': {
                        backgroundColor: '#4BBF73',
                        color: '#E0E0E0'
                    },
                },
                
            }
        }
    }
});

export { darkTheme, lightTheme };