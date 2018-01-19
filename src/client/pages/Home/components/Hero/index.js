import React from 'react'
import injectSheet from 'react-jss'

import Icon from '../../../../components/Icon'

const styles = theme => ({
    root: {
        height: '100%',
        backgroundImage: 'url("https://i.ytimg.com/vi/PJKA6qcfQ7Q/maxresdefault.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    overlayImg: {
        height: 'inherit',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    logo: {
        maxWidth: 130,
        height: 'auto'
    },
    heroContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'inherit',
        padding: '90 10',
        '& *': {
            color: '#fff',
            textAlign: 'center'
        }
    },
    heroTitle: {
        fontFamily: "'Cormorant Garamond', serif",
        textTransform: 'uppercase',
        letterSpacing: 3,
        fontSize: '5.0em',
        fontWeight: 100,
        marginBottom: '20px'
    },
    heroSubTitle: {
        fontFamily: "'Montserrat', sans-serif",
        letterSpacing: 2,
        fontSize: '1.5em',
        fontWeight: 300,
        marginTop: '20px'
    },
    lineContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lineCircle: {
        position: 'relative',
        minHeight: 30,
        minWidth: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        backgroundColor: '#fff',
        padding: '0.5 0',
        width: '40%',
    },
    '@media (min-width: 500px) and (max-width: 810px)': {
        heroSubTitle: {
            fontSize: '1.8rem'
        },
        heroTitle: {
            fontSize: '3.8rem'
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
        }
    }
});

const HomeHero = props => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <div className={classes.overlayImg}>
                <div className={classes.heroContainer}>
                    <img className={classes.logo} src="images/bcn.png" alt=""/>
                    <div>
                        <h1 className={classes.heroTitle}>bass cleff nights</h1>
                        <div className={classes.lineContainer}>
                            <div className={classes.line}/>
                            <div className={classes.lineCircle}>
                                <Icon name='circle' color='#fff' style={{bottom:2}}/>
                            </div>
                            <div className={classes.line}/>
                        </div>
                        <h4 className={classes.heroSubTitle}>reliving old miami through jazz</h4>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default injectSheet(styles)(HomeHero)