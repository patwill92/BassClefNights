import React from 'react'
import injectSheet from 'react-jss'

import Hero from '../../../../components/Hero'
import Container from '../../../../components/Container'
import Title from '../../../../components/TitleContainer'

const styles = theme => ({
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
        <Container>
            <Hero height={'600px'} mobile={'60%'}>
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
                </div>
            </Hero>
        </Container>
    )
};

export default injectSheet(styles)(AboutHero)