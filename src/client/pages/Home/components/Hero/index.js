import React from 'react'
import injectSheet from 'react-jss'

import Icon from '../../../../components/Icon'
import LineBreak from '../../../../components/LineBreak'
import Button from '../../../../components/ClearButton'

const styles = theme => ({
    root: {
        height: '100%',
        backgroundImage: 'url("images/home.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    overlayImg: {
        height: 'inherit',
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'relative'
    },
    logo: {
        maxWidth: 330,
        height: 'auto'
    },
    heroContainer: {
        ...theme.flex.colStart,
        alignItems: 'center',
        height: 'inherit',
        padding: '90 10',
        '& *': {
            color: '#fff',
            textAlign: 'center'
        }
    },
    heroTitle: {
        fontFamily: theme.font.primary,
        textTransform: 'uppercase',
        letterSpacing: 3,
        fontSize: '5.0em',
        fontWeight: 100,
        marginBottom: '20px',
        marginTop: 0
    },
    heroSubTitle: {
        fontFamily: theme.font.secondary,
        letterSpacing: 2,
        fontSize: '1.5em',
        fontWeight: 300,
        marginTop: '20px'
    },
    socialContainer: {
        ...theme.flex.colBetween,
        position: 'absolute',
        top: 30,
        right: 10,
        height: 70,
        width: 40,
        fontSize: 20,
        textAlign: 'center'
    },
    '@media (min-width: 500px) and (max-width: 810px)': {
        heroSubTitle: {
            fontSize: '1.8rem'
        },
        heroTitle: {
            fontSize: '3.8rem'
        },
        heroContainer: {
            justifyContent: 'center',
        }
    },
    '@media (max-width: 499px)': {
        heroSubTitle: {
            fontSize: '1.3rem',
            marginTop: '10px'
        },
        heroTitle: {
            fontSize: '2.0rem',
            marginBottom: '10px'
        },
        logo: {
            maxWidth: 230,
            marginBottom: '10px'
        },
    }
});

const HomeHero = props => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <div className={classes.overlayImg}>
                <div className={classes.socialContainer}>
                    <a href='https://www.facebook.com'><Icon color='#e8e8e8' name='facebookF' hover/></a>
                    <a href='https://twitter.com/BClatinjazzfest'><Icon color='#e8e8e8' name='twitter' hover/></a>
                </div>
                <div className={classes.heroContainer}>
                    <img className={classes.logo} src="images/logoWhite.png" alt=""/>
                    <div>
                        <h1 className={classes.heroTitle}>bass cleff nights</h1>
                        <LineBreak icon='musicNote' color='#fff' rotateZ={10}/>
                        <h4 className={classes.heroSubTitle}>reliving old miami through jazz</h4>
                        <Button text='Become a sponsor'/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default injectSheet(styles)(HomeHero)