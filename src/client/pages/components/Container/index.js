import React from 'react'
import injectSheet from 'react-jss'

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 'calc(1280px + 10%)',
        margin: '0 auto',
        padding: '0 5% 0 5%',
        backgroundColor: props => props.backgroundColor ? props.backgroundColor : 'transparent',
        backgroundImage: props => props.image ? `url("images/${props.image}")` : null
    },
    '@media (max-width: 942px)': {
        root: {
            padding: '0 15px',
        }
    },
    '@media (max-width: 500px)': {
        root: {
            padding: 0,
        }
    }
});

const Container = props => {
    const {classes, children} = props;
    return (
        <div className={classes.root}>
            {children}
        </div>
    )
};

export default injectSheet(styles)(Container)