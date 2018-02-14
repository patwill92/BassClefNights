import React, {Fragment} from 'react'
import injectSheet from 'react-jss'

import Container from '../../../../components/Container'
import Icon from '../../../../components/Icon'
import bulletList from './data'

const styles = theme => ({
    root: {
        padding: '30 0 30 0'
    },
    message: {
        color: '#161616',
        fontWeight: 300,
        fontSize: 17,
        lineHeight: 2,
        flexBasis: '50%',
        textAlign: 'left',
        margin: 'auto'
    },
    image: {
        flexBasis: '50%',
        '& img': {
            width: '100%',
            height: 'auto',
            maxWidth: 300
        }
    },
    introMessage: {
        textTransform: 'uppercase',
        letterSpacing: 3,
        fontSize: '2.2em',
        fontWeight: 300,
        margin: 0,
        textAlign: 'center'
    },
    messageContainer: {
        ...theme.flex.rowBetween,
        padding: '30 0',
        maxWidth: 1000,
        margin: 'auto'
    },
    bulletList: {
        margin: 'auto',
        marginTop: 30,
        padding: '0 15'
    },
    img: {
        maxWidth: 400,
        height: 'auto',
        overflow: 'hidden',
        marginTop: 15,
        marginLeft: '1em',
        marginRight: 15,
        marginBottom: '0.5em',
        boxShadow: theme.shadows[2]
    },
    '@media (min-width: 769px)': {
        img: {
            float: 'right'
        }
    },
    '@media (max-width: 500px)': {
        message: {
            fontSize: 15
        },
        bulletList: {
            padding: 0
        }
    },
    '@media (max-width: 768px)': {
        img: {
           display: 'none'
        },
        bulletList: {
            marginTop: 20
        }
    }
});

const bulletStyle = theme => ({
    root: {
        fontSize: 17,
        fontWeight: 400,
        lineHeight: 1.5,
        padding: '10 0',
    },
    iconWrap: {
        fontSize: 12,
        marginRight: 10
    },
    img: {
        width: '100%',
        height: 'auto',
        margin: '15 0',
        boxShadow: theme.shadows[2]
    },
    '@media (min-width: 769px)': {
        img: {
            display: 'none'
        }
    },
    '@media (max-width: 500px)': {
        root: {
            fontSize: 15,
            padding: '5 15',
            lineHeight: 1.7
        },
        iconWrap: {
            fontSize: 10,
            marginRight: 10
        }
    }
});

let Bullet = ({text, classes, i}) => {
    return (
        <Fragment>
            {i === 3 && <img src={'/images/networking.jpg'} className={classes.img}/>}
            <div className={classes.root}>
                <span className={classes.iconWrap}>
                    <Icon name={'certificate'} color={'#161616'} style={{bottom: 1.5}}/>
                </span>
                <span>{text}</span>
            </div>
        </Fragment>
    )
};

Bullet = injectSheet(bulletStyle)(Bullet);

const WhySponsor = props => {
    const {classes} = props;
    return (
        <Container backgroundColor={'#fff'} noPadding>
            <div className={classes.root}>
                <div className={classes.introMessage}>Why sponsor?</div>
                <div style={{maxWidth: 1000, margin: 'auto'}}>
                    <img src={'/images/networking.jpg'} className={classes.img}/>
                    <div className={classes.bulletList}>
                        {bulletList.map((text, i) => {
                            return (
                                <Bullet key={i} text={text} i={i}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Container>
    )
};

export default injectSheet(styles)(WhySponsor)