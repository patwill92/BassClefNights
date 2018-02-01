import React from 'react'
import injectSheet from 'react-jss'

const styles = theme => ({
    root: {
        minHeight: props => props.height
    },
    '@media (max-width: 942px)': {},
    '@media (max-width: 500px)': {}
});

const Hero = props => {
    const {classes, children} = props;
    return (
        <div className={classes.root}>
            {children}
        </div>
    )
};


export default injectSheet(styles)(Hero)