import React from 'react'
import injectSheet from 'react-jss'

const styles = theme => ({
    heroBtn: {
        backgroundColor: 'rgba(0,0,0,0)',
        border: '1px solid #fff',
        color: '#fff',
        fontFamily: theme.font.secondary,
        letterSpacing: 1,
        fontWeight: 300,
        fontSize: '1.0rem',
        textTransform: 'uppercase',
        padding: '10px',
        transition: 'background-color 500ms, color 500ms',
        '&:hover': {
            cursor: 'pointer',
            color: '#000',
            backgroundColor: '#fff'
        }
    }
});

const ClearButton = ({classes, text, style}) => <button className={classes.heroBtn} style={style && {...style}}>{text}</button>;

export default injectSheet(styles)(ClearButton)