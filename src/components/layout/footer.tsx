import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import { FC } from '../../util/types';

const useStyles = makeStyles((theme: Theme) => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        // bottom: '0',
        // position: 'fixed',
        width: '100%',
        backgroundColor: theme.palette.background.paper
        // backgroundColor: theme.palette.primary.main
        // backgroundColor: theme.palette.grey[400]
    }
}));

const Footer: FC = () => {
    const styles = useStyles();
    const theme = useTheme();
    return (
        <footer style={{padding: theme.spacing(3, 2), marginTop: 'auto',
        width: '100%', backgroundColor: theme.palette.background.paper}}>
            <Container maxWidth="md">
                <Typography variant="body1" color="textDisabled" style={{textAlign: 'center'}}>
                    © {new Date().getFullYear()} Vincent Emonet
                </Typography>
                {/* <Typography variant="body2" >
                    This website is licensed under the&nbsp;
                    <a target="_blank" style={{textDecoration: 'none', color: 'inherit'}}
                    href="https://github.com/MaastrichtU-IDS/knowledge-collaboratory/blob/main/LICENSE">
                    MIT license
                    </a>
                    <img src={require('../assets/images/mit_license.png')} />
                </Typography> */}
            </Container>
        </footer>
    );
};

export default Footer;
