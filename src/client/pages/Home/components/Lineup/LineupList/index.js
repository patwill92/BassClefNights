import React, {Fragment} from 'react'
import injectSheet from 'react-jss'

import lineupList from "./data";

const styles = theme => ({
    listContainer: {
        display: 'flex'
    },
    listContainerMobile: {
        display: 'none'
    },
    list: {
        listStyleType: 'none',
        flex: 1,
        margin: 0,
        padding: 0
    },
    listMobile: {
        listStyleType: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
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
    },
    listItemMobile: {
        fontWeight: 300,
        // maxWidth: 375,
        minWidth: 350,
        margin: '20 5px',
        backgroundImage: 'url("images/home.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '275px',
        position: 'relative'
    },
    overlayMobile: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 3,
        '& *': {
            color: '#fff',
            textAlign: 'center',
            cursor: 'pointer',
            fontFamily: "'Montserrat', sans-serif",
            letterSpacing: 2,
            fontSize: '1.3em',
            width: '90%',
            margin: 'auto'
        }
    },
    '@media (max-width: 942px)': {
        listContainer: {
            display: 'none'
        },
        listContainerMobile: {
            display: 'block'
        }
    },
    '@media (max-width: 500px)': {
        listItemMobile: {
            margin: '20px 0',
            width: '100%'
        }
    }
});

const LineupList = props => {
    const {classes} = props;
    return (
        <Fragment>
            <div className={classes.listContainer}>
                <ul className={classes.list} style={{paddingRight: 20, marginRight: 20}}>
                    {lineupList.map(artist => {
                        return (
                            <li className={classes.listItem} key={artist}>{artist}</li>
                        )
                    })}
                </ul>
                <div style={{
                    flex: 1, backgroundImage: 'url("images/home.jpg")', backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                </div>
            </div>
            <div className={classes.listContainerMobile}>
                <ul className={classes.listMobile}>
                    {lineupList.map(artist => {
                        return (
                            <li className={classes.listItemMobile} key={artist}>
                                <div className={classes.overlayMobile}>
                                    <div>{artist}</div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Fragment>
    )
};

export default injectSheet(styles)(LineupList)