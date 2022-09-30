import React, { useState } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { AppBar, Toolbar, Typography, Link, Button, Tooltip } from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
// import { BsToggleOn, BsToggleOff } from 'react-icons/bs';
import BsToggleOff from '@mui/icons-material/LightMode';
import BsToggleOn from '@mui/icons-material/DarkMode';

import { FC } from '../../util';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        // color: theme.palette.text.primary
    },
    title: {
        flexGrow: 1
    },
    link: {
        textDecoration: 'none',

    }
}));

export interface HeaderProps {
    switchTheme: () => void;
    siteTitle?: string;
}

const Header: FC<HeaderProps> = (props) => {
    const [showOn, setShowOn] = useState<boolean>(false);
    const styles = useStyles();
    const theme = useTheme();

    const onSwitch = (): void => {
        setShowOn((prev) => !prev);
        props.switchTheme();
    };

    return (
        <AppBar component="header" position="static" style={{minHeight: '42px'}}>
            <Toolbar style={{minHeight: '36px', paddingTop: theme.spacing(1), paddingBottom: theme.spacing(1)}}>
                <Typography variant="h6" className={styles.title}>
                    <Link to="/" component={GatsbyLink} color="inherit" className={styles.link}>
                        {props.siteTitle || ''}
                    </Link>
                </Typography>
                <Tooltip title="Switch theme (light/dark)">
                    <Button color='inherit' onClick={onSwitch}>
                        {theme.palette.mode === 'light' ? <BsToggleOn /> : <BsToggleOff  />}
                    </Button>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
