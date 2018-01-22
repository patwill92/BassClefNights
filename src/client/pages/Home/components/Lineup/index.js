import React from 'react'
import injectSheet from 'react-jss'

import LineupList from './LineupList'
import LineBreak from '../../../../components/LineBreak'

const styles = theme => ({
    root: {
        overflow: 'hidden',
        backgroundColor: '#f5f5f5',
        padding: '20 10',
        textAlign: 'center'
    },
    title: {
        color: '#333',
        textAlign: 'center',
        fontFamily: "'Cormorant Garamond', serif",
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
        }
    }
});

const Lineup = props => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <div className={classes.titleContainer}>
                <h1 className={classes.title}>The Lineup</h1>
                <LineBreak icon='squareRegular' color='#333' />
            </div>
            <LineupList/>
        </div>
    )
};

export default injectSheet(styles)(Lineup)