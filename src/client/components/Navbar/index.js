import React from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'

import {toggleNav} from "../../actions";

const styles = theme => ({
    root: {
        display: 'inline-flex',
        height: '70px',
        width: '70px',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        flexDirection: 'column',
        top: 10,
        left: 10,
        zIndex: 2
    },
    menu: {
        color: '#e8e8e8',
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
        backgroundColor: '#e8e8e8',
        width: '90%',
        display: 'block',
        marginTop: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        transition: 'width 0.2s'
    }
});

const Navbar = props => {
    const {classes, menu} = props;
    return (
        <div className={classes.root}>
            <span onClick={() => props.toggleNav(!menu)} className={classes.menu} >
                <span style={{display: 'block'}}>menu</span>
                <span id='underline' className={classes.underline}/>
            </span>
        </div>
    )
};

const mapStateToProps = ({ui}) => {
    return {
        menu: ui.nav
    }
};

export default connect(mapStateToProps, {toggleNav})(injectSheet(styles)(Navbar))