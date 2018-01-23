import React, {Component} from 'react';
import injectSheet from 'react-jss';

import TitleContainer from './TitleContainer'
import Icon from '../../../../components/Icon'
import lineupList from "../Lineup/LineupList/data";

const animation = (name, property, from, to) => {
    return {
        [`@keyframes ${name}`]: {
            from: `${property}: ${from}`,
            to: `${property}: ${to}`
        }
    }
};

const fadeIn = animation('fadeIn', 'opacity', 0, 1);
const fadeOut = animation('fadeOut', 'opacity', 1, 0);

const styles = theme => ({
    root: {
        ...theme.flex.rowEven,
        width: '100%',
        textAlign: 'center',
        '& div': {
            flex: 1
        },
        padding: '50 0'
    },
    venueInfo: {
        padding: '30px 10px',
        height: 'inherit',
        ...theme.flex.colCenter,
        order: 2
    },
    textInfo: {
        fontFamily: theme.font.secondary,
        letterSpacing: 2,
        lineHeight: '1.7em',
        fontSize: '1.0em',
        fontWeight: 300,
        margin: '20px auto',
        maxWidth: '85%',
        color: '#333',
        textDecoration: 'none'
    },
    listItemImageBackground: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0,
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        right: 0,
        animationFillMode: 'forwards'
    },
    venueImages: {
        position: 'relative',
        order: 1,
        maxWidth: '90%',
        marginLeft: 'auto',
        marginRight: 0
    },
    overlayMobile: {
        ...theme.flex.colEven,
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 3,
        '& *': {
            color: '#333',
            textAlign: 'center',
            cursor: 'pointer',
            fontFamily: "'Montserrat', sans-serif",
            letterSpacing: 2,
            fontSize: '1.3em',
            width: '90%'
        }
    },
    arrows: {
        ...theme.flex.rowBetween,
        width: '100%',
        alignItems: 'flex-end',
        '& div': {
            fontSize: '18px',
            flex: 0
        }

    },
    circles: {
        ...theme.flex.rowCenter,
        width: '100%',
        alignItems: 'flex-end',
        '& div': {
            ...theme.flex.rowCenter,
            marginBottom: 20,
            fontSize: '12px',
            flex: 0
        }
    },
    ...fadeIn,
    ...fadeOut
});

let start;

class Venue extends Component {
    state = {
        activeIndex: 0,
        previousActiveIndex: '',
        showActive: true
    };

    componentDidMount = () => {
        this.startShow();
    };

    startShow = () => {
        start = setInterval(() => {
            let {activeIndex} = this.state;
            this.setState({
                previousActiveIndex: JSON.stringify(activeIndex),
                activeIndex: activeIndex >= 3 ? 0 : activeIndex + 1
            })
        }, 5000);
    };

    nextImg = () => {
        let {activeIndex} = this.state;
        this.setState({
            showActive: false,
            previousActiveIndex: JSON.stringify(activeIndex),
            activeIndex: activeIndex >= 3 ? 0 : activeIndex + 1
        }, () => {
            clearInterval(start)
        });
    }

    prevImg = () => {
        let {activeIndex} = this.state;
        this.setState({
            showActive: false,
            previousActiveIndex: JSON.stringify(activeIndex),
            activeIndex: activeIndex <= 0 ? 3 : activeIndex - 1
        }, () => {
            clearInterval(start)
        });
    }

    render() {
        const {classes} = this.props;
        const {activeIndex, previousActiveIndex} = this.state;
        let list = ['venue1', 'venue2', 'venue3', 'venue4'];
        const directions = 'https://www.google.com/maps/dir/\'\'/Vizcaya+Museum+and+Gardens/@25.7443699,-80.280515,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d9b65d4fea9813:0xf860ad840edd24e1!2m2!1d-80.2104747!2d25.7443866';
        return (
            <div className={classes.root}>
                <div className={classes.venueInfo}>
                    <div style={{flex: 0}}><TitleContainer text='The venue' color='#333'/></div>
                    <p className={classes.textInfo}>Allow yourself to experience an evening in Old Miami at Vizcaya
                        Museum and Gardens in beautiful
                        Miami, Florida. Bass Clef Nights will provide you with an evening
                        filled with food prepared by master chefs,
                        full bar and bottle service, cigar lounge, and
                        several areas to enjoy the musical history
                        which defines this magical place.</p>
                    <a href={directions} className={classes.textInfo}
                       style={{fontSize: '0.9rem', cursor: 'pointer'}}><Icon color='#333' name='mapPin'/> 3251 S Miami
                        Ave, Miami, FL 33129</a>
                </div>
                <div className={classes.venueImages}>
                    {list.map((img, i) => {
                        let active = activeIndex === i;
                        let previousActive = previousActiveIndex === JSON.stringify(i);
                        let firstTime = !!previousActiveIndex;
                        let animation = !firstTime ? activeIndex === i && {opacity: 1}
                            : active ? {opacity: 1, animation: 'fadeIn 2s linear'}
                                : previousActive ? {opacity: 0, animation: 'fadeOut 2s linear'} : '';
                        return (
                            <div style={{
                                backgroundImage: `url("images/${img}.jpg")`,
                                ...animation,
                                cursor: 'pointer'
                            }}
                                 className={classes.listItemImageBackground}
                                 key={img}>
                            </div>
                        )
                    })
                    }
                    <div className={classes.overlayMobile}>
                        <div className={classes.arrows}>
                            <div onClick={this.prevImg} style={{flex: 0}}><Icon name='chevronLeft' color='rgba(255,255,255,0.7)' style={{cursor: 'pointer'}} /></div>
                            <div onClick={this.nextImg} style={{flex: 0}}><Icon name='chevronRight' color='rgba(255,255,255,0.7)'
                                                         style={{right: 11, cursor: 'pointer'}}/></div>
                        </div>
                        <div className={classes.circles}>
                            <div>
                                {list.map((img, i) => {
                                    let active = activeIndex === i;
                                    return (
                                        <div key={img+i}>
                                            <Icon name={active ? 'circleSolid' : 'circle'} color='rgba(255,255,255,0.7)' style={{margin: '0 20px'}}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default injectSheet(styles)(Venue)