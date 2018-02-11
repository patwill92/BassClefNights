import React from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'

import Icon from '../../../../components/Icon'
import LineBreak from '../../../../components/LineBreak'
import Button from '../../../../components/ClearButton'
import {scrollPosition} from "../../../../actions";

const animation = (name, one, two) => {
    return {
        [`@keyframes ${name}`]: {
            '0%, 20%, 50%, 80%, 100%': `transform: translateY(0)`,
            '40%': `transform: translateY(-${one}px)`,
            '60%': `transform: translateY(-${two}px)`
        }
    }
};

const bounce = animation('bounce', 10, 20);

const styles = theme => ({
    root: {
        height: '100%',
        textAlign: 'center',
        position: 'relative',
        minHeight: 568
    },
    overlayImg: {
        height: 'inherit',
        position: 'relative'
    },
    logo: {
        width: 230,
        height: 'auto',
        marginBottom: 30
    },
    heroContainer: {
        ...theme.flex.colStart,
        alignItems: 'center',
        height: 'inherit',
        padding: '60 10 200 10',
        '& *': {
            color: '#e8e8e8',
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
    '@media (max-width: 499px)': {
        logo: {
            maxWidth: 140,
            marginBottom: '10px'
        },
        heroContainer: {
            justifyContent: 'flex-start',
            padding: 0,
            ...theme.flex.colCenter
        },
        socialContainer: {
            top: 13,
            textAlign: 'right',
            display: 'flex'
        }
    },
    '@media (max-width: 700px)': {
        heroTitle: {
            fontSize: '1.9rem',
            marginBottom: '10px',
            fontWeight: 300
        }
    },
    '@media (min-width: 501px) and (max-width: 768px)': {
        socialContainer: {
            display: 'flex',
            top: 17
        },
        heroContainer: {
            justifyContent: 'center',
            padding: 0
        },
        logo: {
            maxWidth: '35%'
        }
    }
});

@connect(null, {scrollPosition})
@injectSheet(styles)
class HomeHero extends React.PureComponent {
    componentDidMount = () => {
        this.props.scrollPosition({max: this.root.clientHeight})
    };

    render() {
        const {classes} = this.props;
        return (
            <div ref={root => this.root = root} className={classes.root}>
                <div className={classes.overlayImg}>
                    <div className={classes.socialContainer}>
                        <a href='https://www.facebook.com'><Icon color='#e8e8e8' name='facebookF' hover/></a>
                        <a href='https://twitter.com/BClatinjazzfest'><Icon color='#e8e8e8' name='twitter' hover/></a>
                    </div>
                    <div className={classes.heroContainer}>
                        <img className={classes.logo} src="images/logoWhite.png" alt="" style={{opacity: 0.9}}/>
                        <div className={classes.innerContainer}>
                            <h1 className={classes.heroTitle}>bass clef nights</h1>
                            <LineBreak icon='musicNote' color='#e8e8e8' rotateZ={4}/>
                            <Button text='Become a sponsor' color={'#e8e8e8'} hover={'#161616'}
                                    style={{marginTop: 30}}/>
                        </div>
                    </div>
                </div>
                <div className={classes.bounce}>
                    <Icon name='chevronDoubleDown' color='#e8e8e8' style={{left: -12}}/>
                </div>
            </div>
        )
    };
}

export default HomeHero