import React from 'react'
import injectSheet from 'react-jss'

const styles = theme => ({
    root: {
        '& h1': {
            color: theme.palette.primary
        }
    }
});

const Home = props => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <h1>HOME PAGE</h1>
        </div>
    )
};

export default {
    component: injectSheet(styles)(Home)
}