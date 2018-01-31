import React, {Component, Fragment} from 'react'
import injectSheet from 'react-jss'

import Icon from '../Icon'

const styles = theme => ({
    root: {
        display: 'none',
        height: '60px',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 2,
    },
    root2: {
        display: 'flex',
        height: '60px',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 2,
    },
    navItem: {
        textTransform: 'uppercase',
        fontFamily: theme.font.secondary,
        fontWeight: 300,
        color: '#e8e8e8',
        textAlign: 'center',
        margin: '0 20',
        cursor: 'pointer'
    },
    menu: {
        textTransform: 'uppercase',
        cursor: 'pointer',
        fontWeight: 300,
        marginLeft: 20,
        borderRadius: 2,
        '&:hover': {
            '& #underline': {
                width: '100%'
            }
        },
        position: 'relative',
        zIndex: 2
    },
    underline: {
        paddingTop: 3,
        width: '90%',
        display: 'block',
        marginTop: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        transition: 'width 0.2s'
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        color: props => props.color,
        fontSize: 30,
    },
    logo: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        position: 'relative',
        '& *': {
            fontFamily: theme.font.secondary,
            fontWeight: 300
        },
        right: 22,
        transition: 'opacity 0.5s linear'
    },
    '@media (max-width: 768px)': {
        root: {
            display: 'flex'
        },
        root2: {
            display: 'none'
        }
    },
    '@media (max-width: 500px)': {
        iconContainer: {
            fontSize: 22,
            height: 28,
            width: 34
        },
        root: {
            height: 47
        },
        menu: {
            marginLeft: 10
        }
    }
});

class ToggleNav extends Component {
    state = {
        window: {},
        shadow: '',
        color: 'rgba(22, 22, 22, 0)',
        border: '',
        opacity: 0
    };

    componentDidMount = () => {
        let myScroll = window.pageYOffset;
        let max = window.innerHeight;
        this.setState({
            window: {
                innerHeight: window.innerHeight,
                innerWidth: window.innerWidth,
                pageYOffset: window.pageYOffset,
                backgroundImage: '',
                shadow: (myScroll / max) >= 1.0 ? 2 : 0,
                color: `rgba(22, 22, 22, ${window.pageYOffset / window.innerHeight - 47})`
            }
        });
        this.opacity();
        window.addEventListener("resize", this.getDimensions);
        window.addEventListener("scroll", this.opacity);
        window.addEventListener("scroll", this.getScroll);
    };

    opacity = () => {
        let shadow = "0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)";
        let myScroll = window.pageYOffset && window.pageYOffset;
        let max = window.innerHeight && window.innerHeight - 47;
        if (myScroll >= 0 && (myScroll / max) < 1.0) {
            this.setState({shadow: '', color: `rgba(22, 22, 22, ${myScroll / max})`, backgroundImage: '', opacity: 0});
            return this.state
        } else if ((myScroll / max) >= 1.0) {
            this.setState({
                color: 'rgba(22, 22, 22, 1.0)',
                border: 'rgba(233, 233, 233, 1.0)',
                backgroundImage: 'url("images/triangles.png")',
                opacity: 1,
                shadow
            });
        } else {
            this.setState({shadow: '', color: 'rgba(22, 22, 22, 0)', backgroundImage: '', opacity: 0});
        }
    };

    getDimensions = () => {
        let state = this.state.window;
        this.setState({
            window: {
                ...state,
                innerHeight: window.innerHeight,
                innerWidth: window.innerWidth
            }
        });
    };

    getScroll = () => {
        let state = this.state.window;
        this.setState({
            window: {
                ...state,
                pageYOffset: window.pageYOffset
            }
        });
    };

    render() {
        const {classes, text, color, onClick} = this.props;
        console.log(this.state.window.innerHeight, this.state.window.pageYOffset, this.state.color);
        let nav = ['Home', 'Tickets', 'Lineup', 'img', 'About', 'Contact', 'News'];
        return (
            <Fragment>
                <div className={classes.root} style={{
                    boxShadow: this.state.shadow,
                    backgroundColor: this.state.color,
                    backgroundImage: this.state.backgroundImage ? this.state.backgroundImage : null
                }}>
                    <div onClick={onClick}
                         className={classes.menu}>
                    <span
                        className={classes.iconContainer}>
                        <Icon name='thinMenu' color='#e9e9e9' style={{bottom: 2}}/></span>
                        {/*<span id='underline' className={classes.underline} style={{backgroundColor: color}}/>*/}
                    </div>
                    <div className={classes.logo} style={{opacity: this.state.opacity}}>
                        <img src="images/logoWhiteFilled.png" alt="" style={{maxWidth: 30, height: 'auto'}}/>
                        <span
                            style={{
                                position: 'relative',
                                top: 1,
                                color: '#e9e9e9',
                                fontSize: 20,
                                marginLeft: 3
                            }}>BCN</span>
                    </div>
                </div>
                <div className={classes.root2} style={{
                    boxShadow: this.state.shadow,
                    backgroundColor: this.state.color,
                    backgroundImage: this.state.backgroundImage ? this.state.backgroundImage : null
                }}>
                    {nav.map(item => {
                        return item !== 'img' ? (
                            <div className={classes.navItem} key={item}>{item}</div>
                        ) : <img key={item}
                                 src="images/logoWhiteFilled.png"
                                 alt=""
                                 style={{
                                     maxWidth: 40,
                                     height: 'auto',
                                     position: 'relative',
                                     bottom: 2,
                                     opacity: this.state.opacity,
                                     transition: 'opacity 0.5s linear'
                                 }}/>
                    })}
                </div>
            </Fragment>
        )
    };
}

export default injectSheet(styles)(ToggleNav)