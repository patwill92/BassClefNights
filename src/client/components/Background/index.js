import React from 'react'
import injectSheet from 'react-jss'

const styles = theme => ({
    bodyOverlay: {
        position: 'fixed',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        right: 0,
        zIndex: -10,
        backgroundImage: props => `url("images/${props.image}")`,
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        overflow: 'hidden'
    },
    bodyOverlayChild: {
        height: '100%',
        width: '100%',
        backgroundColor: props => props.overlay
    }
});

const Background = props => {
    const {classes} = props;
    return (
        <div className={classes.bodyOverlay}>
            <div className={classes.bodyOverlayChild}/>
        </div>
    )
}

export default injectSheet(styles)(Background)