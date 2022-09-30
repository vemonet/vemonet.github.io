import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

import MetaLayout from './meta-layout';
import { FCR, themes, getCookie, setCookie, themeCookie } from '../../util';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });


const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        webdev: {
            // light: '#ffa726',
            main: '#0d47a1',
            // dark: '#ef6c00',
            // contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        databases: {
            main: '#455a64',
        },
        tools: {
            main: '#795548',
        },
        sysadmin: {
            main: '#7e57c2',
        },
        dataengineering: {
            main: '#00796b',
        },
        datascience: {
            main: '#455a64',
        },
        semanticweb: {
            main: '#29b6f6',
        },
        languages: {
            main: '#43a047',
        },
        purple: {
            main: '#c5cae9',
            light: '#f8fdff',
            dark: '#9499b7',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        // grey: {
        //     main: '#e0e0e0',
        //     light: '#ffffff',
        //     dark: '#aeaeae',
        //     contrastText: 'rgba(0, 0, 0, 0.87)',
        // },
        yellow: {
            main: '#ffecb3',
            light: '#ffffe5',
            dark: '#cbba83',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },

      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: {
                main: '#1e88e5',
                // dark: '#006bb4'
            },
            secondary: {
                main: '#7cd2f7'
            },
            error: {
                main: '#c62828'
            },
            // Use grey for warning
            warning: {
                main: '#e0e0e0'
            },
            info: {
                main: '#09539c'
            },
            success: {
                main: '#43a047'
            },
            text: {
                primary: '#343a40',
                secondary: '#2e3133',
                // hint: '#363c42',
                disabled: '#48494a'
            },
            background: {
                default: '#eceff1',
                paper: '#fafafa'
            },
          }
        : {
            // palette values for dark mode
            primary: {
                main: '#2196f3'
            },
            secondary: {
                main: '#7cd2f7'
            },
            error: {
                main: '#c62828'
            },
            warning: {
                main: '#e0e0e0'
            },
            info: {
                main: '#09539c'
            },
            success: {
                main: '#43a047'
            },
            // action: {
            //     hover:'#7cd2f7'
            // },
            text: {
                primary: '#f8f9fa',
                secondary: '#e4e7eb',
                // hint: '#bbbcbd',
                disabled: '#ccc'
            },
            background: {
                default: '#1c2c33',
                paper: '#263238'
            }
          }),
    },
});


const Layout: FCR = (props) => {
    // const [theme, setTheme] = useState<Theme>(themes[getCookie(themeCookie) || 'dark']);
    // const switchTheme = (): void => {
    //     setTheme((prev) => {
    //         const newTheme = prev.palette.mode === 'dark' ? 'light' : 'dark';
    //         setCookie(themeCookie, newTheme);
    //         return themes[newTheme];
    //     });
    // };

    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    // const theme = React.useMemo(
    //     () =>
    //     createTheme({
    //         typography: {
    //             "fontFamily": "\"Open Sans\", \"Roboto\", \"Arial\"",
    //             "fontWeightLight": 300,
    //             "fontWeightRegular": 400,
    //             "fontWeightMedium": 500,
    //             "fontSize": 12
    //         },
    //         palette: {
    //             mode,
    //             // webdev: {
    //             //     // light: '#ffa726',
    //             //     main: '#0d47a1',
    //             //     // dark: '#ef6c00',
    //             //     // contrastText: 'rgba(0, 0, 0, 0.87)',
    //             // },
    //             // databases: {
    //             //     main: '#455a64',
    //             // },
    //             // tools: {
    //             //     main: '#795548',
    //             // },
    //             // sysadmin: {
    //             //     main: '#7e57c2',
    //             // },
    //             // dataengineering: {
    //             //     main: '#00796b',
    //             // },
    //             // datascience: {
    //             //     main: '#455a64',
    //             // },
    //             // semanticweb: {
    //             //     main: '#29b6f6',
    //             // },
    //             // languages: {
    //             //     main: '#43a047',
    //             // },
    //             // purple: {
    //             //     main: '#c5cae9',
    //             //     light: '#f8fdff',
    //             //     dark: '#9499b7',
    //             //     contrastText: 'rgba(0, 0, 0, 0.87)',
    //             // },
    //             // grey: {
    //             //     main: '#e0e0e0',
    //             //     light: '#ffffff',
    //             //     dark: '#aeaeae',
    //             //     contrastText: 'rgba(0, 0, 0, 0.87)',
    //             // },
    //             // yellow: {
    //             //     main: '#ffecb3',
    //             //     light: '#ffffe5',
    //             //     dark: '#cbba83',
    //             //     contrastText: 'rgba(0, 0, 0, 0.87)',
    //             // },
    //         },
    //     }),
    //     [mode],
    // );

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

// export ColorModeContext;
export default Layout;
