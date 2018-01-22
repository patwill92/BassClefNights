import React from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'

import {toggleNav} from "../../actions";
import ToggleNav from '../ToggleNav'

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
    zIndex: 2
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
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
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
        return (
            <div className={classes[className]}>
                <div className={classes.overlay}>
                    {menu && <ToggleNav text='close' color='#2a2a2a' onClick={this.change}/>}
                    <h1>MENU</h1>
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