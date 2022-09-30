import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';

import MetaLayout from './meta-layout';
import { FCR, themes, getCookie, setCookie, themeCookie } from '../../util';
import { getTheme } from '../../util/theme';


export const ColorModeContext = React.createContext({
    toggleColorMode: () => {}
});


const Layout: FCR = (props) => {
    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const [mode, setMode] = React.useState<'light' | 'dark'>(
        // @ts-ignore
        getCookie(themeCookie) || 'dark',
        // getCookie(themeCookie) || prefersDarkMode ? 'dark' : 'light',
    );
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const newMode = prevMode === 'light' ? 'dark' : 'light'
                    setCookie(themeCookie, newMode);
                    return newMode
                });
            },
        }),
        [],
    );

    const theme = React.useMemo(() => createTheme(
        getTheme(mode)
    ), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <MetaLayout>{props.children}</MetaLayout>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );

};

export default Layout;
