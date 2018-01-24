import React from 'react'
import injectSheet from 'react-jss'

import LineBreak from '../../../../../components/LineBreak'

const styles = theme => ({
    root: {
        '& div': {
            fontSize: '18px'
        },
        textAlign: 'center',
        display: 'inline-block',
        marginBottom: 20
    },
    title: {
        textAlign: 'center',
        fontFamily: theme.font.primary,
        textTransform: 'uppercase',
        letterSpacing: 3,
        fontSize: '3.0em',
        fontWeight: 100,
        margin: 0,
        display: 'inline-block'
    }
});

const TitleContainer = props => {
    const {classes, text, color} = props;
    return (
        <div className={classes.root}>
            <h1 className={classes.title} style={{color}}>{text}</h1>
            <LineBreak icon='musicSax' color='#333' rotateY={180}/>
        </div>
    )
};

export default injectSheet(styles)(TitleContainer)