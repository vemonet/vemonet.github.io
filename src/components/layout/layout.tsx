import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

import MetaLayout from './meta-layout';
import { FCR, themes, getCookie, setCookie, themeCookie } from '../../util';
import { getDesignTokens } from '../../util/theme';


export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });



const Layout: FCR = (props) => {
    // const [theme, setTheme] = useState<Theme>(themes[getCookie(themeCookie) || 'dark']);
    // const switchTheme = (): void => {
    //     setTheme((prev) => {
    //         const newTheme = prev.palette.mode === 'dark' ? 'light' : 'dark';
    //         setCookie(themeCookie, newTheme);
    //         return themes[newTheme];
    //     });
    // };

    const [mode, setMode] = React.useState<'light' | 'dark'>(getCookie(themeCookie) || 'dark');
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

    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {console.log(theme)}
                <CssBaseline />
                <MetaLayout>{props.children}</MetaLayout>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );

};

export default Layout;
