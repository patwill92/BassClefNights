import React from 'react'
import injectSheet from 'react-jss'

import lineupList from "./data";

const styles = theme => ({
    listContainer: {
        display: 'flex'
    },
    list: {
        listStyleType: 'none',
        flex: 1,
        margin: 0,
        padding: 0
    },
    listItem: {
        padding: '20',
        position: 'relative',
        left: 21,
        textAlign: 'right',
        cursor: 'pointer',
        fontFamily: "'Montserrat', sans-serif",
        letterSpacing: 2,
        fontSize: '1.3em',
        fontWeight: 300,
        borderRight: '1px solid rgba(0,0,0,0.2)',
        '&:hover': {
            borderRight: '1px solid #000'
        }
    }
});

const LineupList = props => {
    const {classes} = props;
    return (
        <div className={classes.listContainer}>
            <ul className={classes.list} style={{paddingRight: 20, marginRight: 20}}>
                {lineupList.map((artist, i) => {
                    return (
                        <li className={classes.listItem} key={artist}>{artist}</li>
                    )
                })}
            </ul>
            <div style={{flex: 1, backgroundImage: 'url("images/home.jpg")', backgroundSize: 'cover',
                backgroundPosition: 'center'}}>
            </div>
        </div>
    )
};

export default injectSheet(styles)(LineupList)