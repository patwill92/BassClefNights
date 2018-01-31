import React from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'

import {toggleNav} from "../../../actions/index";
import ToggleNav from '../ToggleNav/index'
import TitleContainer from '../TitleContainer'
import Icon from '../Icon'

const animation = (name, property, from, to) => {
    return {
        [`@keyframes ${name}`]: {
            from: `${property}: ${from}`,
            to: `${property}: ${to}`
        }
    }
};

const drop = animation('drop', 'left', '-100vw', 0);
const back = animation('dropBack', 'left', 0, '-100vw');
const fade = animation('fade', 'opacity', 0, 1);
const fadeOut = animation('fadeOut', 'opacity', 1, 0);
const main = {
    height: '100vh',
    width: '100%',
    opacity: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    flexDirection: 'column',
    left: '-100vw',
    top: 0,
    backgroundColor: '#fff',
    animationFillMode: 'forwards',
    zIndex: 2,
    overflow: 'scroll'
};

const styles = theme => ({
    root: {
        ...main
    },
    in: {
        ...main,
        animation: 'drop 0.5s linear, fade 0.5s linear',
    },
    out: {
        ...main,
        top: 0,
        left: '-100vw',
        animation: 'dropBack 0.5s linear, fadeOut 0.5s linear',
    },
    overlay: {
        width: '100%',
        height: '100vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '50 0 150 0'
    },
    iconContainer: {
        position: 'fixed',
        top: 13,
        left: 17,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 30,
        height: 28,
        width: 34
    },
    navItem: {
        textTransform: 'uppercase',
        fontFamily: theme.font.secondary,
        fontWeight: 300,
        color: '#161616',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 30
    },
    '@media (max-width: 500px)': {
        iconContainer: {
            top: 7,
            left: 10,
            fontSize: 25,
            height: 28,
            width: 34
        },
        navItem: {
            fontSize: 16
        }
    },
    ...drop,
    ...fade,
    ...back,
    ...fadeOut
});

class NavMenu extends React.Component {
    state = {
        open: false
    };

    change = () => {
        this.setState({open: true}, () => {
            this.props.toggleNav(!this.props.menu)
        });
    };

    render() {
        const {menu, classes} = this.props;
        const {open} = this.state;
        let className = !menu && !open ? 'root' : menu ? 'in' : 'out';
        let nav = ['Home', 'Tickets', 'Lineup', 'About', 'Contact', 'News'];
        return (
            <div className={classes[className]}>
                <div className={classes.overlay}>
                    {menu &&
                    <div onClick={this.change} className={classes.iconContainer}>
                        <Icon name={'times'} color={'#161616'}/>
                    </div>}
                    <div style={{
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <img src="images/logoFilled.png" alt=""
                             style={{maxWidth: 100, height: 'auto', marginBottom: 15}}/>
                        <TitleContainer text={'bass clef nights'} color={'#161616'} icon={'musicNote'} z={4} noPadding
                                        fontSize={17}/>
                    </div>
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        maxHeight: 400
                    }}>
                        {nav.map(item => {
                            return (
                                <div className={classes.navItem} key={item}>{item}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    };
}

const mapStateToProps = ({ui}) => {
    return {
        menu: ui.nav
    }
};

export default connect(mapStateToProps, {toggleNav})(injectSheet(styles)(NavMenu))