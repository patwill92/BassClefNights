import React from 'react'
import injectSheet from 'react-jss'

const styles = theme => ({
    root: {
        ...theme.flex.rowBetween,
        alignItems: 'center',
        borderTop: '2px solid rgba(22,22,22,0.85)',
        position: 'sticky',
        top: props => props.sticky,
        zIndex: 2,
        backgroundImage: 'url("images/triangles.png")',
        backgroundColor: '#2c2c2c'
    },
    navItem: {
        flexBasis: '50%',
        padding: '20 5%',
        textAlign: 'center',
        color: 'rgba(233,233,233,1.0)',
        fontWeight: 400,
        fontSize: 20,
        letterSpacing: 2,
        textTransform: 'uppercase',
        cursor: 'pointer'
    },
    '@media (max-width: 500px)': {
        navItem: {
            padding: '15 5%',
        }
    }
});

const TicketNav = props => {
    const {classes, type, onClick} = props;
    const getType = myType => {
        if (type === myType) {
            return {
                backgroundColor: 'rgba(255,255,255,1.0)',
                color: '#161616',
                borderBottom: '1px solid #ccc'
            }
        }
        return {backgroundColor: 'transparent'}
    };
    return (
        <div className={classes.root}>
            <div style={getType(0)}
                 onClick={() => onClick(0)}
                 className={classes.navItem}>
                VIP
            </div>
            <div style={getType(1)}
                 onClick={() => onClick(1)}
                 className={classes.navItem}>
                general
            </div>
        </div>
    )
};

export default injectSheet(styles)(TicketNav)