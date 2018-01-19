import React from 'react'
import injectSheet from 'react-jss'

const styles = theme => ({
    root: {
        '& h1': {
            color: theme.palette.primary,
            textAlign: 'center'
        },
        overflow: 'hidden'
    }
});

const Panel1 = props => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <h1>Panel 1</h1>
        </div>
    )
};

export default injectSheet(styles)(Panel1)