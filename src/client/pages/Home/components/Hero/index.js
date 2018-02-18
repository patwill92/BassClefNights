import React from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'

import Icon from '../../../../components/Icon'
import Button from '../../../../components/ClearButton'
import Title from '../../../../components/TitleContainer'
import Hero from '../../../../components/Hero'
import Container from '../../../../components/Container'
import Countdown from '../../../../components/Countdown'
import {scrollPosition} from "../../../../actions";
import AnimationHoc from "../../../../components/AnimationHOC";

const animation = (name) => {
    return {
        [`@keyframes ${name}`]: {
            '0%': {
                transform: `scale(1,0)`,
                transformOrigin: 'top'
            },
            '40%': {
                transform: `scale(1,1)`,
                transformOrigin: 'top'
            },
            '41%': {
                transform: `scale(1,1)`,
                transformOrigin: 'bottom'
            },
            '81%': {
                transform: `scale(1,0)`,
                transformOrigin: 'bottom'
            },
            '82%': {
                transform: `scale(1,0)`,
                transformOrigin: 'top'
            }
        }
    }
};

const line = animation('line');

const styles = theme => ({
    heroWrapper: {
        textAlign: 'center',
        paddingTop: '20vh',
        '& #svg-icon': {
            fontSize: 30
        }
    },
    logo: {
        width: 130,
        height: 'auto',
        margin: '0 auto 20 auto',
        transition: 'transform 600ms ease-in-out, opacity 600ms ease-in-out'
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
    lineAnimation: {
        transition: 'all 1.5s cubic-bezier(.77,0,.175,1)',
        transform: 'scale(1,0)',
        transformOrigin: 'top',
        height: 70,
        width: 1,
        backgroundColor: '#e8e8e8',
        position: 'absolute',
        bottom: 14,
        left: 'calc(50% - 0.5px)',
        animation: 'line 4s cubic-bezier(.77,0,.175,1) infinite'
    },
    lineAnimationSquare: {
        backgroundColor: '#e8e8e8',
        position: 'absolute',
        bottom: 4,
        left: 'calc(50% - 4.5px)',
        height: 9,
        width: 9
    },
    countdown: {
        fontSize: '35px'
    },
    ...line,
    '@media (max-width: 550px)': {
        heroWrapper: {
            '& #svg-icon': {
                fontSize: 20
            }
        },
    },
    '@media (max-width: 500px)': {
        logo: {
            width: 100,
            marginBottom: '10px'
        },
        socialContainer: {
            top: 13,
            textAlign: 'right',
            display: 'flex'
        },
        lineAnimation: {
            height: 50,
        }
    },
    '@media (max-width: 700px)': {
        countdown: {
            fontSize: '28px !important'
        }
    },
    '@media (min-width: 501px) and (max-width: 768px)': {
        socialContainer: {
            display: 'flex',
            top: 17
        }
    }
});

@connect(({ui}) => ({scroll: ui.scroll, animation: ui.animation}), {scrollPosition})
@AnimationHoc
@injectSheet(styles)
class HomeHero extends React.PureComponent {
    render() {
        const {classes, scroll: {scroll, max}} = this.props;

        return (
            <Container>
                <div className={classes.socialContainer}>
                    <a href='https://www.facebook.com'><Icon color='#e8e8e8' name='facebookF' hover/></a>
                    <a href='https://twitter.com/BClatinjazzfest'><Icon color='#e8e8e8' name='twitter' hover/></a>
                </div>
                <Hero height={'100%'}
                      min={700}
                      fullPage
                      custom>
                    <div className={classes.heroWrapper}>
                        <img className={classes.logo}
                             ref={logo => this.props.this.element = logo}
                             src="images/logoWhiteFilled.png"
                             alt=""
                             style={{
                                 display: 'block',
                                 transform: this.props.visible ? 'translateY(0%)' : 'translateY(-50%)',
                                 opacity: this.props.visible ? 0.7 : 0
                             }}/>
                        <Title text={'Bass Clef Nights'}
                               color='rgba(232,232,232, 0.9)'
                               noPadding
                               margin={'0 0 10 0'}
                               icon='musicNote' big/>
                        <div className={classes.countdown}><Countdown noTitle color={'rgba(232,232,232, 0.9)'}/></div>
                        <Button text='tickets'
                                link={'/tickets'}
                                bold
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                    this.props.scrollPosition({opacity: 0, transition: false});
                                }}
                                style={{display: 'inline-block'}}
                                color={'#e8e8e8'}
                                hover={'#161616'}/>
                    </div>
                </Hero>
                <div className={classes.lineAnimation} style={{opacity: max && 1 - scroll / max}}/>
                <div className={classes.lineAnimationSquare} style={{opacity: max && 1 - scroll / max}}/>
            </Container>
        )
    };
}

export default HomeHero