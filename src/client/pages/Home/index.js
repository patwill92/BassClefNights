import React from 'react'
import injectSheet from 'react-jss'

import Panel1 from './components/Panel1'

const styles = theme => ({
    root: {
        '& h1': {
            color: theme.palette.primary,
            textAlign: 'center'
        },
        overflow: 'hidden',
        zIndex: 0
    },
    hero: {
        height: '100%',
        backgroundImage: 'url("images/BARDGE.JPG")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    overlayImg: {
        height: 'inherit',
        backgroundColor: 'rgba(0,0,0,0.35)'
    }
});

const Home = props => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <div className={classes.hero}>
                <div className={classes.overlayImg}/>
            </div>
            <Panel1/>
        </div>
    )
};

export default {
    component: injectSheet(styles)(Home)
}