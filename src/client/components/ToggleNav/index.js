import React, {Fragment} from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'

import {toggleNav} from "../../actions";
import Icon from '../../components/Icon'

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
        width: '90%',
        display: 'block',
        marginTop: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        transition: 'width 0.2s'
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '20px'
    }
});

const ToggleNav = props => {
    const {classes, menu, text, color} = props;
    return (
        <div className={classes.root}>
            <span onClick={() => props.toggleNav(!menu)}
                  className={classes.menu}>
                    <span style={{display: 'block', color}}>{text}</span>
                    <span id='underline' className={classes.underline} style={{backgroundColor: color}}/>
            </span>
        </div>
    )
};

const mapStateToProps = ({ui}) => {
    return {
        menu: ui.nav
    }
};

export default connect(mapStateToProps, {toggleNav})(injectSheet(styles)(ToggleNav))