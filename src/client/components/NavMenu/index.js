import React from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'
import {Transition} from 'react-transition-group';

import {toggleNav} from "../../actions";
import ToggleNav from '../ToggleNav'

const defaultStyle = {
    transition: `opacity 500ms ease-in-out`,
    opacity: 0,
    zIndex: 0,
    display: 'flex',
    height: '100vh',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    flexDirection: 'column',
    top: 0,
    left: 0,
    backgroundColor: '#fff'
};
const transitionStyles = {
    entering: {opacity: 0, zIndex: 0},
    entered: {opacity: 1, zIndex: 2},
};
const titleStyle = {
    transition: `opacity 2000ms ease-in-out`,
    opacity: 0
}

const styles = theme => ({
    root: {
        height: 'inherit',
        width: '100%'
    },
    close: {
        display: 'inline-flex',
        height: '70px',
        width: '70px',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        flexDirection: 'column',
        top: 10,
        left: 10
    },
    menu: {
        color: '#2A2A2A',
        textTransform: 'uppercase',
        cursor: 'pointer',
        fontWeight: 300,
        '&:hover': {
            '& #underline': {
                width: '100%'
            }
        }
    },
    underline: {
        paddingTop: 3,
        backgroundColor: '#2A2A2A',
        width: '90%',
        display: 'block',
        marginTop: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        transition: 'width 0.2s'
    },
    start: {
        transition: 'opacity 2000ms',
    }
});

const NavMenu = props => {
    const {menu} = props;
    console.log(menu);
    return (
        <Transition in={menu} timeout={0}>
            {(state) => (
                <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    {menu && <ToggleNav text='close' color='#2a2a2a'/>}
                    <h1 style={{
                        ...titleStyle,
                        ...transitionStyles[state]
                    }}>MENU</h1>
                </div>
            )}
        </Transition>
    )
};

const mapStateToProps = ({ui}) => {
    return {
        menu: ui.nav
    }
};

export default connect(mapStateToProps, {toggleNav})(injectSheet(styles)(NavMenu))