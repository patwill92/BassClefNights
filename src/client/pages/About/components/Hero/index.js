import React from 'react'
import injectSheet from 'react-jss'

import Hero from '../../../components/Hero'
import Container from '../../../components/Container'
import Title from '../../../components/TitleContainer'

const styles = theme => ({
    container: {
    },
    root: {
        ...theme.flex.rowCenter,
        alignItems: 'center',
        minHeight: 'inherit'
    },
    title: {
        ...theme.flex.colCenter,
        flex: 1,
        '& *': {
            margin: 0,
            textAlign: 'left',
            fontSize: 30
        }
    },
    message: {
        fontFamily: theme.font.secondary,
        fontWeight: 400,
        color: '#161616',
        textTransform: 'uppercase',
        lineHeight: 2
    },
    logo: {
        maxWidth: 100,
        height: 'auto',
        flex: 1,
        opacity: 0.8,
        marginRight: 15
    },
    '@media (max-width: 1200px)': {

    },
    '@media (min-width: 901px)': {

    },
    '@media (max-width: 900px)': {

    },
    '@media (max-width: 500px)': {
        title: {
            '& *': {
                margin: 0,
                textAlign: 'left',
                fontSize: 20
            }
        },
        logo: {
            maxWidth: 60,
            height: 'auto',
            flex: 0,
            opacity: 0.8,
            marginRight: 15
        },
    }
});

const AboutHero = props => {
    const {classes} = props;
    return (
        <div className={classes.container}>
            <Container backgroundColor={'rgba(255, 255, 255, 0.9)'}>
                <Hero height={'400px'}>
                    <div className={classes.root}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div>
                                <img src="images/logoFilled.png" className={classes.logo} alt=""/>
                            </div>
                            <div className={classes.title} style={{justifyContent: 'center'}}>
                                <Title text={'Bass clef nights'} noLine color='#161616' noPadding/>
                                <Title text={'EST. 2014'} noLine color='#161616' noPadding/>
                            </div>
                        </div>
                        {/*<div className={classes.message}>*/}
                            {/*"Empowering middle-aged visionary artists by developing their latent potential to reach new heights*/}
                            {/*in their careers."*/}
                        {/*</div>*/}
                    </div>
                </Hero>
            </Container>
        </div>
    )
};

export default injectSheet(styles)(AboutHero)