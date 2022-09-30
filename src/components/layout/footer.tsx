import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import { FC } from '../../util';

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
    return (
        <footer className={styles.footer}>
            <Container maxWidth="md">
                <Typography variant="body1" color="textDisabled" style={{textAlign: 'center'}}>
                    © {new Date().getFullYear()} Vincent Emonet
                    {/* Built with
                    {` `}
                    <Link href="https://www.gatsbyjs.org" color="inherit">
                        Gatsby
                    </Link>
                    ,{` `}
                    <Link href="https://www.typescriptlang.org" color="inherit">
                        Typescript
                    </Link>{' '}
                    and
                    {` `}
                    <Link href="https://material-ui.com/" color="inherit">
                        @Material-ui
                    </Link> */}
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
