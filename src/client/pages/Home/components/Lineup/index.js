import React, {Fragment} from 'react'
import injectSheet from 'react-jss'

import LineupList from './LineupList'
import LineBreak from '../../../../components/LineBreak'

const root = {
    overflow: 'hidden',
    padding: '100 10',
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: 1350
};

const styles = theme => ({
    root: {
        ...root
    },
    mobileRoot: {
        ...root,
        display: 'none',
        padding: '30 0',
    },
    title: {
        color: '#333',
        textAlign: 'center',
        fontFamily: theme.font.primary,
        textTransform: 'uppercase',
        letterSpacing: 3,
        fontSize: '3.0em',
        fontWeight: 100,
        margin: 0,
        display: 'inline-block'
    },
    titleContainer: {
        '& div': {
            fontSize: '8px'
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
    }
});

const Lineup = props => {
    const {classes} = props;
    return (
        <Fragment>
            <div className={classes.root}>
                <div className={classes.titleContainer}>
                    <h1 className={classes.title}>The Lineup</h1>
                    <LineBreak icon='squareRegular' color='#333'/>
                </div>
                <LineupList/>
            </div>
            <div className={classes.mobileRoot}>
                <div className={classes.titleContainer}>
                    <h1 className={classes.title}>The Lineup</h1>
                    <LineBreak icon='squareRegular' color='#333'/>
                </div>
                <LineupList/>
            </div>
        </Fragment>
    )
};

export default injectSheet(styles)(Lineup)