import React, {Component, Fragment, PureComponent} from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

import Icon from '../../Icon/index'
import {scrollPosition} from "../../../actions/index";
import nav from '../../data'

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
        zIndex: 2
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
            display: 'flex',
            paddingRight: 0
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

const mapStateToProps = ({ui}) => {
    return {
        color: ui.navColor,
        nav: ui.nav,
        modal: ui.modal
    }
};

@connect(mapStateToProps, {scrollPosition})
class ToggleNav extends PureComponent {
    state = {
        window: {},
        shadow: '',
        color: `rgba(${this.props.color}, ${this.props.color}, ${this.props.color}, 0)`,
        border: '',
        opacity: 0
    };

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.opacity);
        window.removeEventListener("scroll", this.getScroll);
    };

    componentDidMount = () => {
        let myScroll = window.pageYOffset;
        let max = window.innerHeight;
        let color = this.props.color;
        this.setState({
            window: {
                innerHeight: window.innerHeight,
                pageYOffset: window.pageYOffset,
                backgroundImage: '',
                shadow: (myScroll / max) >= 1.0 ? 2 : 0,
                color: `rgba(${color}, ${color}, ${color}, ${window.pageYOffset / window.innerHeight - 47})`
            }
        });
        this.opacity();
        window.addEventListener("scroll", this.opacity);
        window.addEventListener("scroll", this.getScroll);
    };

    opacity = () => {
        let shadow = "0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)";
        let myScroll = window.pageYOffset && window.pageYOffset;
        let max = window.innerHeight && window.innerHeight - 47;
        let color = this.props.color;
        if (!this.props.nav && !this.props.modal) {
            if (myScroll >= 0 && (myScroll / max) < 1.0) {
                this.setState({
                    shadow: '',
                    color: `rgba(${color}, ${color}, ${color}, ${myScroll / max})`,
                    backgroundImage: '',
                    opacity: 0
                });
                return this.state
            } else if ((myScroll / max) >= 1.0) {
                this.setState({
                    color: `rgba(${color}, ${color}, ${color}, 1.0)`,
                    border: 'rgba(233, 233, 233, 1.0)',
                    backgroundImage: color > 100 ? 'url("images/stripes.png")' : 'url("images/triangles.png")',
                    opacity: 1,
                    shadow
                });
            } else {
                this.setState({
                    shadow: '',
                    color: `rgba(${color}, ${color}, ${color}, 0)`,
                    backgroundImage: '',
                    opacity: 0
                });
            }
        }
    };

    getScroll = () => {
        let state = this.state.window;
        if (!this.props.nav && !this.props.modal) {
            this.props.scrollPosition(window.pageYOffset);
            this.setState({
                window: {
                    ...state,
                    pageYOffset: window.pageYOffset
                }
            });
        }
    };

    render() {
        const {classes, onClick, color, modal, history} = this.props;
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
                        <Icon name='thinMenu' color={color > 100 ? "#161616" : "rgb(233,233,233)"} style={{bottom: 2}}/></span>
                    </div>
                    <div className={classes.logo} style={{opacity: this.state.opacity}}>
                        <img src={color > 100 ? "images/logoFilled.png" : "images/logoWhiteFilled.png"}
                             alt="LOGO"

                             style={{maxWidth: 25, height: 'auto'}}/>
                        <span
                            style={{
                                position: 'relative',
                                top: 1,
                                color: color > 100 ? "#161616" : "rgb(233,233,233)",
                                fontSize: 20,
                                marginLeft: 3
                            }}>BCN</span>
                    </div>
                </div>
                <div className={classes.root2} style={{
                    boxShadow: this.state.shadow,
                    backgroundColor: this.state.color,
                    backgroundImage: this.state.backgroundImage ? this.state.backgroundImage : null,
                    paddingRight: modal ? 17 : 0
                }}>
                    {nav.map((item, i) => {
                        return (
                            <Fragment key={item.name}>
                                {i === nav.length / 2 &&
                                <img src={color > 100 ? "images/logoFilled.png" : "images/logoWhiteFilled.png"}
                                     alt="LOGO"
                                     onClick={() => history.push('/')}
                                     style={{
                                         cursor: 'pointer',
                                         maxWidth: 35,
                                         height: 'auto',
                                         position: 'relative',
                                         bottom: 2,
                                         opacity: this.state.opacity,
                                         transition: 'opacity 0.5s linear'
                                     }}/>
                                }
                                <div className={classes.navItem}>
                                    <Link to={item.link}
                                          className={classes.navItem}
                                          style={{
                                              margin: '0 10',
                                              textDecoration: 'none',
                                              color: color > 100 ? "#161616" : "rgb(233,233,233)"
                                          }}>{item.name}</Link>
                                </div>
                            </Fragment>
                        )
                    })}
                </div>
            </Fragment>
        )
    };
}

export default injectSheet(styles)(withRouter(ToggleNav))