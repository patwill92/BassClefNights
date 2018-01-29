import React, {Component} from 'react';
import injectSheet from 'react-jss';

import Icon from '../../../../components/Icon'

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
        display: props => props.type === 'mobile' ? 'none' : 'block',
        position: 'relative',
        order: props => props.type === 'desktop' && 1,
        maxWidth: props => props.type === 'desktop' && '90%',
        width: props => props.type === 'mobile' && '100%',
        marginLeft: 0,
        marginRight: 0,
        boxShadow: theme.shadows[10]
    },
    overlayMobile: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 3
    },
    arrows: {
        display: 'flex',
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'flex-end',
        fontSize: '18px'
    },
    circles: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flex: 1,
        paddingBottom: 30,
        '& #circle': {
            fontSize: '12px'
        }
    },
    ...fadeIn,
    ...fadeOut,
    '@media (max-width: 942px)': {
        venueImages: {
            display: props => props.type === 'mobile' ? 'block' : 'none',
            minHeight: 330,
            marginTop: 20,
            boxShadow: theme.shadows[3]
        }
    }
});

@injectSheet(styles)
export default class VenueSlides extends Component {
    state = {
        activeIndex: 0,
        previousActiveIndex: ''
    };

    startShow = setInterval(() => {
        let {activeIndex} = this.state;
        this.setState({
            previousActiveIndex: JSON.stringify(activeIndex),
            activeIndex: activeIndex >= 3 ? 0 : activeIndex + 1
        })
    }, 5000);

    nextImg = (type) => {
        clearInterval(this.startShow);
        let {activeIndex} = this.state;
        this.setState({
            previousActiveIndex: JSON.stringify(activeIndex),
            activeIndex: type ? activeIndex >= 3 ? 0 : activeIndex + 1 :
                activeIndex <= 0 ? 3 : activeIndex - 1
        });
    };

    render() {
        const {classes} = this.props;
        const {activeIndex, previousActiveIndex} = this.state;
        let list = ['venue1', 'venue2', 'venue3', 'venue4'];
        return (
            <div id='venueSlides' className={classes.venueImages}>
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
                        <div onClick={ () => this.nextImg(0)} style={{flex: 0}}><Icon name='chevronLeft'
                                                                                      color='rgba(255,255,255,0.7)'
                                                                                      style={{cursor: 'pointer'}}/></div>
                        <div onClick={() => this.nextImg(1)} style={{flex: 0}}><Icon name='chevronRight'
                                                                                     color='rgba(255,255,255,0.7)'
                                                                                     style={{right: 11, cursor: 'pointer'}}/>
                        </div>
                    </div>
                    <div className={classes.circles}>
                        {list.map((img, i) => {
                            let active = activeIndex === i;
                            return (
                                <div id='circle' key={img + i}>
                                    <Icon name={active ? 'circleSolid' : 'circle'} color='rgba(255,255,255,0.7)' style={{margin: 20}}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    };
}