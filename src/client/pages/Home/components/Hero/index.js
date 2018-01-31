import React from 'react'
import injectSheet from 'react-jss'

import Icon from '../../../components/Icon'
import LineBreak from '../../../components/LineBreak'
import Button from '../../../components/ClearButton'

const animation = (name, one, two) => {
    return {
        [`@keyframes ${name}`]: {
            '0%, 20%, 50%, 80%, 100%': `transform: translateY(0)`,
            '40%': `transform: translateY(-${one}px)`,
            '60%': `transform: translateY(-${two}px)`
        }
    }
};

const bounce = animation('bounce', 15, 30);
const bounceLow = animation('bounceLow', 10, 20);

const styles = theme => ({
    root: {
        height: '100%',
        textAlign: 'center',
        position: 'relative',
        minHeight: 500
    },
    overlayImg: {
        height: 'inherit',
        position: 'relative'
    },
    logo: {
        width: 270,
        height: 'auto',
        marginBottom: 30
    },
    heroContainer: {
        ...theme.flex.colStart,
        alignItems: 'center',
        height: 'inherit',
        padding: '60 10 200 10',
        '& *': {
            color: '#fff',
            textAlign: 'center'
        }
    },
    heroTitle: {
        fontFamily: theme.font.primary,
        textTransform: 'uppercase',
        letterSpacing: 3,
        fontSize: '4.0em',
        fontWeight: 200,
        marginBottom: '20px',
        marginTop: 0
    },
    heroSubTitle: {
        fontFamily: theme.font.secondary,
        letterSpacing: 2,
        fontSize: '1.5em',
        fontWeight: 200,
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
        textAlign: 'center',
        display: 'none'
    },
    innerContainer: {
        '& div': {
            fontSize: 25
        }
    },
    bounce: {
        animation: 'bounce 2s infinite',
        fontSize: 20,
        position: 'absolute',
        bottom: 6,
        textAlign: 'center',
        display: 'inline-block'
    },
    ...bounce,
    ...bounceLow,
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
            marginTop: '10px',
            fontWeight: 300
        },
        heroTitle: {
            fontSize: '1.9rem',
            marginBottom: '10px',
            fontWeight: 300
        },
        logo: {
            maxWidth: 170,
            marginBottom: '10px'
        },
        heroContainer: {
            justifyContent: 'flex-start',
            padding: '100 10 0 10',
        }
    },
    '@media (max-height: 720px)': {
        logo: {
            width: 230,
            height: 'auto'
        },
    },
    '@media (min-width: 501px) and (max-width: 768px)': {
        socialContainer: {
            display: 'flex',
            top: 17
        }
    },
    '@media (max-width: 500px)': {
      socialContainer: {
          top: 13,
          textAlign: 'right',
          display: 'flex'
      }
    },
    '@media (max-height: 550px)': {
        logo: {
            width: 120,
            height: 'auto'
        },
        heroSubTitle: {
            fontSize: '1.0rem',
            margin: '5 0',
            marginBottom: 15
        },
        heroTitle: {
            fontSize: '2.0rem',
            marginBottom: 5
        },
        heroContainer: {
            '& button': {
                fontSize: '0.5rem'
            },
            paddingBottom: 20
        },
        bounce: {
            animation: 'bounceLow 2s infinite',
            fontSize: 15,
            position: 'absolute',
            bottom: 3,
            textAlign: 'center',
            display: 'inline-block'
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
                    <div className={classes.innerContainer}>
                        <h1 className={classes.heroTitle}>bass clef nights</h1>
                        <LineBreak icon='musicNote' color='#fff' rotateZ={4}/>
                        <Button text='Become a sponsor' color={'#fff'} hover={'#161616'} style={{marginTop: 30}}/>
                    </div>
                </div>
            </div>
            <div className={classes.bounce}>
                <Icon name='chevronDoubleDown' color='#fff' style={{left: -12}}/>
            </div>
        </div>
    )
};

export default injectSheet(styles)(HomeHero)