import React from 'react'
import injectSheet from 'react-jss'

import Container from '../../../../components/Container'
import Button from '../../../../components/ClearButton'

const styles = theme => ({
    root: {
        padding: '30 0 30 0'
    },
    message: {
        color: '#161616',
        fontWeight: 300,
        fontSize: 17,
        lineHeight: 2,
        textAlign: 'left',
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
        textAlign: 'center',
        padding: '0 15'
    },
    messageContainer: {
        ...theme.flex.rowBetween,
        padding: '30 15 0 15',
        maxWidth: 1000,
        margin: 'auto'
    },
    img: {
        boxShadow: theme.shadows[2]
    },
    messageWrapper: {
        flexBasis: '50%',
        ...theme.flex.colStart,
        display: 'inline-flex'
    },
    '@media (max-width: 500px)': {
        messageContainer: {
            padding: '30 0 0 0'
        }
    },
    '@media (max-width: 690px)': {
        introMessage: {
            textTransform: 'uppercase',
            letterSpacing: 3,
            fontSize: '1.5em',
            fontWeight: 300,
            margin: 0,
            textAlign: 'center'
        },
        message: {
            fontSize: 15,
            padding: '0 15'
        },
        messageWrapper: {
            display: 'block'
        },
        messageContainer: {
            ...theme.flex.colBetween,
            paddingBottom: 0,
            paddingTop: 20
        },
        image: {
            display: 'none'
        },
        mobileImage: {
            '& img': {
                width: '100%',
                height: 'auto',
            },
            display: 'block !important',
            padding: '20 0 0 0'
        },
        btn: {
            padding: '0 15',
            textAlign: 'center'
        }
    }
});

const SponsorIntro = props => {
    const {classes} = props;
    return (
        <Container backgroundColor={'#fff'} noPadding>
            <div className={classes.root}>
                <div className={classes.introMessage}>be a part of miami's first annual jazz festival</div>
                <div className={classes.messageContainer}>
                    <div className={classes.image}>
                        <img src="/images/EdCalle.jpeg" alt="" className={classes.img}/>
                    </div>
                    <div className={classes.messageWrapper}>
                        <div className={classes.message}>
                            This event is authored by Bass Clef Nights Foundation. Our additional partner sponsors
                            include Steinway Piano Miami, Gordon Food Services, Morgan Stanley as well as the
                            collaboration
                            and support
                            of many corporate friends, all sharing both a love for this addictive music and the finer
                            things
                            in
                            life.
                        </div>
                        <div className={classes.mobileImage} style={{display: 'none'}}>
                            <img src="/images/EdCalle.jpeg" alt="" className={classes.img}/>
                        </div>
                        <div className={classes.btn}>
                            <div onClick={() => {
                                window.scrollTo(0, 0);
                                props.scrollPosition({opacity: 0, transition: false});
                            }}
                                style={{display: 'inline', padding: '10 0'}}>
                                <Button text='Contact Us'
                                        color={'#161616'}
                                        hover={'#e8e8e8'}
                                        icon={'envelope'}
                                        style={{marginTop: 30, display: 'inline-block'}}
                                        link={'/contact'}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
};

export default injectSheet(styles)(SponsorIntro)