import React from 'react'
import injectSheet from 'react-jss'

import Icon from '../../../../components/Icon'
import LineBreak from '../../../../components/LineBreak'

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
        maxWidth: 130,
        height: 'auto',
        marginTop: 20
    },
    heroContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
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
    heroBtn: {
        backgroundColor: 'rgba(0,0,0,0)',
        border: '1px solid #fff',
        color: '#fff',
        fontFamily: "'Montserrat', sans-serif",
        letterSpacing: 1,
        fontWeight: 300,
        fontSize: '1.0rem',
        textTransform: 'uppercase',
        padding: '10px',
        transition: 'background-color 500ms, color 500ms',
        '&:hover': {
            cursor: 'pointer',
            color: '#000',
            backgroundColor: '#fff'
        }
    },
    socialContainer: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        justifyContent: 'space-between',
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
        }
    }
});

const HomeHero = props => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <div className={classes.overlayImg}>
                <div className={classes.socialContainer}>
                    <a href='https://www.facebook.com'><Icon color='#e8e8e8' name='facebookF' hover/></a>
                    <a href='https://www.twitter.com'><Icon color='#e8e8e8' name='twitter' hover/></a>
                </div>
                <div className={classes.heroContainer}>
                    <img className={classes.logo} src="images/bcn.png" alt=""/>
                    <div>
                        <h1 className={classes.heroTitle}>bass cleff nights</h1>
                        <LineBreak icon='circle' color='#fff'/>
                        <h4 className={classes.heroSubTitle}>reliving old miami through jazz</h4>
                        <button className={classes.heroBtn}>Become a sponsor</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default injectSheet(styles)(HomeHero)