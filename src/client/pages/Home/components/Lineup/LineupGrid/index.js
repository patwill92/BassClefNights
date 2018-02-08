import React from 'react'
import injectSheet from 'react-jss'

const styles = theme => ({
    root: {
        flexBasis: '33%',
        minHeight: 400,
        backgroundImage: props => `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: props => props.i <= 2 ? '0.5%' : 0,
        marginLeft: props => (props.i === 1 || props.i === 4) ? '0.5%' : 0,
        marginRight: props => (props.i === 1 || props.i === 4) ? '0.5%' : 0
    },
    overlay: {
        width: '100%',
        height: 300,
        background: 'linear-gradient(rgba(0,0,0,0) 30%, rgba(0, 0, 0, 0.7) 70%)',
        fontSize: 20,
        fontFamily: theme.font.secondary,
        color: '#fff',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '0 20 30 20',
        letterSpacing: 1.5,
        fontWeight: 300
    },
    '@media (min-width: 501px) and (max-width: 942px)': {
        root: {
            flexBasis: '49%',
            marginBottom: props => props.i !== props.length - 1 ? '1%' : 0,
            marginLeft: props => (props.i + 1) % 2 === 0 ? '0.5%' : 0,
            marginRight: props => (props.i + 1) % 2 === 0 ? 0 : props.i !== props.length - 1 ? '0.5%' : 0,
            minHeight: 300
        }
    },
    '@media (max-width: 500px)': {
        root: {
            flexBasis: '100%',
            marginBottom: props => props.i === props.length - 1 ? 0 : '0.5%',
            marginLeft: 0 + ' !important',
            marginRight: 0 + ' !important',
            minHeight: 300
        }
    },
});

const LineupGrid = props => {
    let {classes, name, length} = props;
    return (
        <div className={classes.root}>
            <div className={classes.overlay}>{name}</div>
        </div>
    )
};

export default injectSheet(styles)(LineupGrid)