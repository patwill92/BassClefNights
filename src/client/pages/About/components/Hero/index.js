import React from 'react'
import injectSheet from 'react-jss'

import Hero from '../../../components/Hero'
import Title from '../../../components/TitleContainer'

const styles = theme => ({
    root: {
        ...theme.flex.rowBetween,
        alignItems: 'center',
        minHeight: 'inherit'
    },
    title: {
        ...theme.flex.colStart,
        maxWidth: 500,
    },
    message: {
        fontFamily: theme.font.secondary,
        fontWeight: 400,
        color: '#e8e8e8',
        textTransform: 'uppercase',
        lineHeight: 2,
        maxWidth: 500
    },
    logo: {
        maxWidth: 200,
        height: 'auto',
        flex: 0,
        opacity: 0.8,
        margin: '0 15'
    },
    '@media (max-width: 1200px)': {
        logo: {
            maxWidth: 150
        },
        title: {
            '& *': {
                fontSize: 30 + ' !important'
            }
        },
        message: {
            fontSize: 15
        }
    },
    '@media (min-width: 901px)': {
        title: {
            flex: 1,
            '& *': {
                fontSize: 30 + ' !important',
                textAlign: 'right !important'
            }
        },
        message: {
            flex: 1,
            fontSize: 15
        }
    },
    '@media (max-width: 900px)': {
        root: {
            ...theme.flex.colCenter,
            margin: '70 0',
            padding: '0 15'
        },
        logo: {
            maxWidth: 120,
            margin: '0 0 15 0'
        },
        title: {
            '& *': {
                fontSize: 40 + ' !important',
                textAlign: 'center !important'
            }
        },
        message: {
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 400
        }
    },
    '@media (max-width: 500px)': {
        root: {
            margin: '55 0 20 0'
        },
        logo: {
            maxWidth: 100,
            margin: '0 0 10 0'
        },
        title: {
            '& *': {
                fontSize: 25 + ' !important',
                textAlign: 'center !important'
            }
        },
        message: {
            fontSize: 13,
            textAlign: 'center'
        }
    }
});

const AboutHero = props => {
    const {classes} = props;
    return (
        <Hero height={'60%'}>
            <div className={classes.root}>
                <div className={classes.title}>
                    <Title text={'Bass clef nights'} noLine color='#e8e8e8' noPadding/>
                    <Title text={'EST. 2014'} noLine color='#e8e8e8' noPadding/>
                </div>
                <img src="images/logoWhiteFilled.png" className={classes.logo} alt=""/>
                <div className={classes.message}>
                    "Empowering middle-aged visionary artists by developing their latent potential to reach new heights
                    in their careers."
                </div>
            </div>
        </Hero>
    )
};

export default injectSheet(styles)(AboutHero)