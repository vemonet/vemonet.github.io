import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';

// import MetaLayout from './meta-layout';
import { FCR } from '../../util/types';
import { getTheme } from '../../util/theme';
import useSiteMetadata from '../../hooks/useSiteMetadata';
import Header from './header';
import Footer from './footer';

import '../../app.css';


export const ColorModeContext = React.createContext({
    toggleColorMode: () => {}
});


const Layout: FCR = (props) => {
    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const { title } = useSiteMetadata();

    const [mode, setMode] = React.useState<'light' | 'dark'>(
        'dark'
        // prefersDarkMode ? 'dark' : 'light',
    );

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const newMode = prevMode === 'light' ? 'dark' : 'light'
                    localStorage.setItem("mode", newMode)
                    return newMode
                });
            },
        }),
        [],
    );

    const theme = React.useMemo(() => createTheme(
        getTheme(mode)
    ), [mode]);

    React.useEffect(()=>{
        if( localStorage.getItem("mode")){
            // @ts-ignore
            setMode(localStorage.getItem("mode"))
        } else {
            // Set default here to fix issue with url color not initialized properly
            setMode('dark')
        }
     },[])

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {/* <MetaLayout>{props.children}</MetaLayout> */}
                <Header siteTitle={title} />
                <main style={{backgroundColor: theme.palette.background.default}}>
                    {props.children}
                </main>
                <Footer />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );

};

export default Layout;
