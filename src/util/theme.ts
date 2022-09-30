import deepMerge from 'deepmerge';
import { createTheme, responsiveFontSizes, ThemeOptions, Theme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';


const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
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
            // Dark mode
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


// const makeTheme = (variant: ThemeOptions): Theme => {
//     const common = {
//         typography: {
//             "fontFamily": "\"Open Sans\", \"Roboto\", \"Arial\"",
//             "fontWeightLight": 300,
//             "fontWeightRegular": 400,
//             "fontWeightMedium": 500,
//             "fontSize": 12
//         },
//         palette: {
//             webdev: {
//                 // light: '#ffa726',
//                 main: '#0d47a1',
//                 // dark: '#ef6c00',
//                 // contrastText: 'rgba(0, 0, 0, 0.87)',
//             },
//             databases: {
//                 main: '#455a64',
//             },
//             tools: {
//                 main: '#795548',
//             },
//             sysadmin: {
//                 main: '#7e57c2',
//             },
//             dataengineering: {
//                 main: '#00796b',
//             },
//             datascience: {
//                 main: '#455a64',
//             },
//             semanticweb: {
//                 main: '#29b6f6',
//             },
//             languages: {
//                 main: '#43a047',
//             },
//             purple: {
//                 main: '#c5cae9',
//                 light: '#f8fdff',
//                 dark: '#9499b7',
//                 contrastText: 'rgba(0, 0, 0, 0.87)',
//             },
//             grey: {
//                 main: '#e0e0e0',
//                 light: '#ffffff',
//                 dark: '#aeaeae',
//                 contrastText: 'rgba(0, 0, 0, 0.87)',
//             },
//             yellow: {
//                 main: '#ffecb3',
//                 light: '#ffffe5',
//                 dark: '#cbba83',
//                 contrastText: 'rgba(0, 0, 0, 0.87)',
//             },
//         },

//         // overrides: {
//         //     MuiCssBaseline: {
//         //         '@global': {
//         //             '*::-webkit-scrollbar': {
//         //                 width: '0.5rem'
//         //             },
//         //             '*::-webkit-scrollbar-thumb': {
//         //                 background: '#888'
//         //             },
//         //             '*::-webkit-scrollbar-thumb:hover': {
//         //                 background: '#555'
//         //             }
//         //         }
//         //     }
//         // }
//     };
//     const theme = createTheme(deepMerge(common, variant));
//     return responsiveFontSizes(theme);
// };

// const light: ThemeOptions = {
//     palette: {
//         mode: 'light',
//         primary: {
//             main: '#1e88e5',
//             // dark: '#006bb4'
//         },
//         secondary: {
//             main: '#7cd2f7'
//         },
//         error: {
//             main: '#c62828'
//         },
//         // Use grey for warning
//         warning: {
//             main: '#e0e0e0'
//         },
//         info: {
//             main: '#09539c'
//         },
//         success: {
//             main: '#43a047'
//         },
//         text: {
//             primary: '#343a40',
//             secondary: '#2e3133',
//             // hint: '#363c42',
//             disabled: '#48494a'
//         },
//         background: {
//             default: '#eceff1',
//             paper: '#fafafa'
//         },
//     }
// };

// const dark: ThemeOptions = {
//     palette: {
//         mode: 'dark',
//         primary: {
//             main: '#2196f3'
//         },
//         secondary: {
//             main: '#7cd2f7'
//         },
//         error: {
//             main: '#c62828'
//         },
//         warning: {
//             main: '#e0e0e0'
//         },
//         info: {
//             main: '#09539c'
//         },
//         success: {
//             main: '#43a047'
//         },
//         // action: {
//         //     hover:'#7cd2f7'
//         // },
//         text: {
//             primary: '#f8f9fa',
//             secondary: '#e4e7eb',
//             // hint: '#bbbcbd',
//             disabled: '#ccc'
//         },
//         background: {
//             default: '#1c2c33',
//             paper: '#263238'
//         }
//     }
// };

// const themes: { [key: string]: Theme } = {
//     light: makeTheme(light),
//     dark: makeTheme(dark)
// };

// export const themeCookie = 'clthmvar';

// export default themes;
