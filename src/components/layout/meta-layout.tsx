import React from 'react';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import useSiteMetadata from '../../hooks/useSiteMetadata';
import Header from './header';
import Footer from './footer';
import { FCR } from '../../util';

import '../../app.css';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        // marginTop: '1rem',
        textAlign: 'center',
    }
}));

type MetaLayoutProps = {
    // switchTheme: () => void;
};

const MetaLayout: FCR<MetaLayoutProps> = (props) => {
    const styles = useStyles();
    const { title } = useSiteMetadata();
    return (
        <div className={styles.root}>
            <Header siteTitle={title} />
            <main className={styles.main}>{props.children}</main>
            <Footer />
        </div>
    );
};

export default MetaLayout;
