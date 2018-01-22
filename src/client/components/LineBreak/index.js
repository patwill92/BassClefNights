import React from 'react'
import injectSheet from 'react-jss'

import Icon from '../Icon'

const styles = theme => ({
    lineContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lineCircle: {
        position: 'relative',
        minHeight: 30,
        minWidth: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        padding: '0.5 0',
        width: '40%',
    }
});

const LineBreak = props => {
    const {classes, icon, color} = props;
    return (
        <div className={classes.lineContainer}>
            <div className={classes.line} style={{backgroundColor: color}}/>
            <div className={classes.lineCircle}>
                <Icon name={icon} color={color} style={{bottom:2}}/>
            </div>
            <div className={classes.line} style={{backgroundColor: color}}/>
        </div>
    )
};

export default injectSheet(styles)(LineBreak)