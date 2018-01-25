import React, {Fragment} from 'react'
import injectSheet from 'react-jss'

import LineBreak from '../../../../../components/LineBreak'

const styles = theme => ({
    root: {
        '& div': {
            fontSize: '14px'
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
        fontWeight: 400,
        margin: 0,
        display: 'inline-block',
    },
    titleContainer: {
        '& div': {
            fontSize: '18px'
        },
        textAlign: 'center',
        display: 'inline-block',
        marginBottom: 20
    },
    mobileRoot: {
      display: 'none'
    },
    '@media (max-width: 500px)': {
        titleContainer: {
            margin: 0
        },
        mobileRoot: {
            display: 'block'
        },
        root: {
            display: 'none'
        }
    }
});

const TitleContainer = props => {
    const {classes, text, color} = props;
    return (
        <Fragment>
            <div className={classes.root}>
                <h1 className={classes.title} style={{color}}>{text}</h1>
                <LineBreak icon='martini' color='#333'/>
            </div>
            <div className={classes.mobileRoot} style={{margin: '4px 8px 9px 4px', padding: 4, border: '1px solid #222', maxHeight: 100}}>
                <div style={{
                    border: '1px solid #222',
                    position: 'relative',
                    top: '0',
                    left: 0,
                    minHeight: 100,
                    minWidth: 'calc(100% + 9px)'
                }}>
                    <div className={classes.titleContainer} style={{marginRight: 8}}>
                        <h1 className={classes.title}>The Venue</h1>
                        <LineBreak icon='martini' color='#333'/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default injectSheet(styles)(TitleContainer)