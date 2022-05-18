import React from 'react';
import { Container, Grid, AppBar, Typography, Grow} from '@material-ui/core';

import Form from './components/Form/Form';
import Movies from './components/Movies/Movies';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();

    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Movies</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Movies />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
