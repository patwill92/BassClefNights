import React, {Fragment, PureComponent} from 'react'
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
        zIndex: 3
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
        zIndex: 3,
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
        zIndex: 3
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
        transition: props => props.scroll.transition ? 'opacity 0.5s linear' : ''
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
        modal: ui.modal,
        scroll: ui.scroll
    }
};

@connect(mapStateToProps, {scrollPosition})
@withRouter
@injectSheet(styles)
class NavBar extends PureComponent {
    state = {
        shadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
    };

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.opacity);
    };

    componentDidMount = () => {
        let rootHeight = this.root.clientHeight || this.root2.clientHeight;
        this.props.scrollPosition({
            scroll: window.pageYOffset,
            shadow: '',
            opacity: 0,
            offset: rootHeight
        });
        window.addEventListener("scroll", this.getScroll);
        window.addEventListener("scroll", this.opacity);
        window.addEventListener("resize", this.onResize);
        this.opacity();
    };

    onResize = () => {
        let rootHeight = this.root.clientHeight || this.root2.clientHeight;
        this.props.scrollPosition({
            offset: rootHeight
        })
    };

    getScroll = () => {
        let {modal, nav} = this.props;
        if (!nav && !modal) {
            this.props.scrollPosition({scroll: window.pageYOffset})
        }
    };

    opacity = () => {
        let {max, offset} = this.props.scroll;
        let {color, modal, nav} = this.props;
        let {shadow} = this.state;
        let scroll = window.pageYOffset && window.pageYOffset;
        let myMax = max && max - offset;
        let reset = {
            shadow: '',
            opacity: 0,
            backgroundImage: ''
        };
        if (!nav && !modal) {
            if (scroll >= 0 && (scroll / myMax) < 1.0) {
                this.props.scrollPosition({
                    color: `rgba(${color}, ${color}, ${color}, ${scroll / myMax})`,
                    ...reset
                });
            } else if ((scroll / myMax) >= 1.0) {
                this.props.scrollPosition({
                    color: `rgba(${color}, ${color}, ${color}, 1.0)`,
                    backgroundImage: color > 100 ? 'url("images/stripes.png")' : 'url("images/triangles.png")',
                    opacity: 1,
                    shadow
                });
            } else {
                this.props.scrollPosition({
                    color: `rgba(${color}, ${color}, ${color}, 0)`,
                    ...reset,
                });
            }

        }
    };

    render() {
        const {classes, onClick, color, modal, history} = this.props;
        const {scroll: {shadow, color: bColor, opacity, backgroundImage}} = this.props;
        return (
            <Fragment>
                <div className={classes.root}
                     ref={root => this.root = root}
                     style={{
                         boxShadow: shadow,
                         backgroundColor: bColor,
                         backgroundImage
                     }}>
                    <div onClick={onClick}
                         className={classes.menu}>
                    <span
                        className={classes.iconContainer}>
                        <Icon name='thinMenu' color={color > 100 ? "#161616" : "rgb(233,233,233)"} style={{bottom: 2}}/></span>
                    </div>
                    <div className={classes.logo} style={{opacity}}>
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
                <div className={classes.root2}
                     ref={root => this.root2 = root}
                     style={{
                         boxShadow: shadow,
                         backgroundColor: bColor,
                         backgroundImage,
                         paddingRight: modal ? 17 : 0
                     }}>
                    {nav.map((item, i) => {
                        return (
                            <Fragment key={item.name}>
                                {i === nav.length / 2 &&
                                <img src={color > 100 ? "images/logoFilled.png" : "images/logoWhiteFilled.png"}
                                     alt="LOGO"
                                     onClick={() => {
                                         window.scrollTo(0, 0);
                                         this.props.scrollPosition({opacity: 0, transition: false});
                                         history.push('/');
                                     }}
                                     style={{
                                         cursor: 'pointer',
                                         maxWidth: 35,
                                         height: 'auto',
                                         position: 'relative',
                                         bottom: 2,
                                         opacity,
                                         transition: this.props.scroll.transition ? 'opacity 0.5s linear' : ''
                                     }}/>
                                }
                                <div onClick={() => {
                                    window.scrollTo(0, 0);
                                    this.props.scrollPosition({opacity: 0, transition: false});
                                }}
                                     className={classes.navItem}>
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

export default NavBar