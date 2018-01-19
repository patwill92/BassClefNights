import React from 'react'
import injectSheet from 'react-jss'

import Panel1 from './components/Panel1'
import Hero from './components/Hero'

const styles = theme => ({
    root: {
        overflow: 'hidden',
        zIndex: 0
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
            <Panel1/>
        </div>
    )
};

export default {
    component: injectSheet(styles)(Home)
}