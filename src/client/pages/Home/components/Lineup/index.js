import React, {Fragment} from 'react'
import injectSheet from 'react-jss'

import LineupList from './LineupList'
import LineBreak from '../../../../components/LineBreak'

const root = {
    overflow: 'hidden',
    padding: '30 0',
    textAlign: 'center',
    maxWidth: '90%',
    margin: 'auto'
};

const styles = theme => ({
    root: {
        ...root
    },
    mobileRoot: {
        ...root,
        display: 'none',
        padding: '30 0',
        '& #outer': {
            display: 'inline-block'
        }
    },
    inner: {
        display: 'none'
    },
    title: {
        color: '#222',
        textAlign: 'center',
        fontFamily: theme.font.primary,
        textTransform: 'uppercase',
        letterSpacing: 3,
        fontSize: '3.0em',
        fontWeight: 400,
        margin: 0,
        display: 'inline-block'
    },
    titleContainer: {
        '& div': {
            fontSize: '18px'
        },
        textAlign: 'center',
        display: 'inline-block',
        marginBottom: 20
    },
    '@media (max-width: 942px)': {
        root: {
            display: 'none'
        },
        mobileRoot: {
            display: 'block'
        }
    },
    '@media (max-width: 500px)': {
        mobileRoot: {
            display: 'block',
            padding: '0',
            '& #outer': {
                display: 'none'
            },
            maxWidth: '100%'
        },
        titleContainer: {
            margin: 0
        },
        inner: {
            display: 'block'
        }
    }
});

const Lineup = props => {
    const {classes} = props;
    return (
        <Fragment>
            <div className={classes.root}>
                <div className={classes.titleContainer}>
                    <h1 className={classes.title}>The Lineup</h1>
                    <LineBreak icon='musicSax' color='#333' rotateY={180}/>
                </div>
                <LineupList/>
            </div>
            <div className={classes.mobileRoot}>
                <div className={classes.inner} style={{margin: '4px 8px 9px 4px', padding: 4, border: '1px solid #222', maxHeight: 100}}>
                    <div  style={{border: '1px solid #222', position: 'relative', top: '0', left: 0, minHeight: 100, minWidth: 'calc(100% + 9px)'}}>
                        <div className={classes.titleContainer} style={{marginRight: 8}}>
                            <h1 className={classes.title}>The Lineup</h1>
                            <LineBreak icon='musicSax' color='#333' rotateY={180}/>
                        </div>
                    </div>
                </div>
                <div id='outer' className={classes.titleContainer} style={{marginRight: 8}}>
                    <h1 className={classes.title}>The Lineup</h1>
                    <LineBreak icon='musicSax' color='#333' rotateY={180}/>
                </div>
                <LineupList/>
            </div>
        </Fragment>
    )
};

export default injectSheet(styles)(Lineup)