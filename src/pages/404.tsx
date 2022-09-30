import React from 'react';
import { Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import Seo from '../components/layout/seo';
import { FC } from '../util/types';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2)
    }
}));

const NotFoundPage: FC = () => {
    const styles = useStyles();
    return (
        <Container maxWidth="md" className={styles.root}>
            <Seo title="404: Not found" />
            <Typography variant="h2" gutterBottom component="h1">
                Not found
            </Typography>
            <Typography variant="body1">
                You just hit a route that doesn&#39;t exist...
            </Typography>
        </Container>
    );
};

export default NotFoundPage;
