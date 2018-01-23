import React from 'react'
import injectSheet from 'react-jss'

import Lineup from './components/Lineup'
import Hero from './components/Hero'

const styles = theme => ({
    root: {
        overflow: 'hidden',
        zIndex: 1,
        position: 'relative'
    },
    hero: {
        height: '100%',
        backgroundImage: 'url("https://i.ytimg.com/vi/PJKA6qcfQ7Q/maxresdefault.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    overlayImg: {
        height: 'inherit',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    logo: {
        maxWidth: 150,
        height: 'auto'
    }
});

const Home = props => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <Hero/>
            <Lineup/>
        </div>
    )
};

export default {
    component: injectSheet(styles)(Home)
}