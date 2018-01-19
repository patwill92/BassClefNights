import React, {Fragment} from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'
import Transition from 'react-transition-group/Transition';

import {toggleNav} from "../../actions";
import ToggleNav from '../ToggleNav'

const duration = 500;
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    display: 'flex',
    height: '100vh',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    flexDirection: 'column',
    top: 0,
    left: 0,
    backgroundColor: '#fff',
    zIndex: 1
};
const transitionStyles = {
    entering: {opacity: 0},
    entered: {opacity: 1},
};

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
    }
});

const NavMenu = props => {
    const {classes, menu} = props;
    return (
        <Transition in={menu} timeout={{
            enter: 0,
            exit: 500,
        }}>
            {(state) => (
                <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    {menu &&
                        <Fragment>
                            <ToggleNav text='close' color='#2a2a2a'/>
                            <h1>MENU</h1>
                        </Fragment>
                    }
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