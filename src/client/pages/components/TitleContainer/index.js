import React, {Fragment} from 'react'
import injectSheet from 'react-jss'

import LineBreak from '../LineBreak/index'

const styles = theme => ({
    root: {
        '& div': {
            fontSize: props => props.fontSize ? props.fontSize : '14px'
        },
        textAlign: 'center',
        display: 'inline-block',
        marginBottom: 20,
        paddingBottom: 50,
        paddingTop: 20
    },
    title: {
        textAlign: 'center',
        fontFamily: theme.font.primary,
        textTransform: 'uppercase',
        letterSpacing: 3,
        fontSize: '2.5em',
        fontWeight: 300,
        margin: 0,
        display: 'inline-block',
    },
    titleContainer: {
        '& div': {
            fontSize: props => props.fontSize ? props.fontSize : '14px'
        },
        textAlign: 'center',
        display: 'inline-block',
        marginBottom: 20
    },
    '@media (max-width: 500px)': {
        root: {
            paddingTop: 40,
            paddingBottom: 20
        },
        title: {
            fontSize: '1.5rem'
        }
    }
});

const TitleContainer = props => {
    const {classes, text, color, icon, y, x, z, noPadding} = props;
    return (
        <Fragment>
            <div className={classes.root} style={{padding: noPadding && 0}}>
                <h1 className={classes.title} style={{color}}>{text}</h1>
                <LineBreak icon={icon} color={color} rotateY={y && y} rotateX={x && x} rotateZ={z && z}/>
            </div>
        </Fragment>
    )
};

export default injectSheet(styles)(TitleContainer)