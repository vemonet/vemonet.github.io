import { PaletteMode } from '@mui/material';


export const getTheme = (mode: PaletteMode) => ({
    palette: {
        // Palette common to light and dark
        languages: {
            main: '#26a69a',
        },
        webdev: {
            // light: '#ffa726',
            main: '#1e88e5',
            // dark: '#ef6c00',
            // contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        semanticweb: {
            main: '#00bcd4',
        },
        databases: {
            main: '#9e9e9e',
        },
        tools: {
            main: '#795548',
        },
        sysadmin: {
            main: '#7e57c2',
        },
        dataengineering: {
            main: '#e57373',
        },
        datascience: {
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