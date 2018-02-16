import React from 'react'
import injectSheet from 'react-jss'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import Container from '../../../../components/Container'
import Title from '../../../../components/TitleContainer'
import Button from '../../../../components/ClearButton'
import {scrollPosition} from "../../../../actions";

const styles = theme => ({
    root: {
        textAlign: 'center',
        padding: '40 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    message: {
        color: 'rgba(233,233,233,0.9)',
        fontWeight: 300,
        fontSize: 15,
        lineHeight: 2
    },
    qLeft: {
        fontSize: 45,
        color: 'rgba(233,233,233,0.9)',
        position: 'relative',
        top: 10,
        lineHeight: 0.5,

    },
    qRight: {
        fontSize: 45,
        color: 'rgba(233,233,233,0.9)',
        position: 'relative',
        top: 10,
        lineHeight: 0.5,
    },
    question: {
      textAlign: 'left'
    },
    '@media (max-width: 980px)': {
        question: {
            textAlign: 'center',
            maxWidth: 500
        },
        root: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        subTitle: {
            marginTop: 20,
            display: 'block'
        }
    },
    '@media (max-width: 500px)': {
        message: {
            fontSize: 15
        },
        root: {
            padding: '40 15'
        }
    }
});

const ContactIntro = props => {
    const {classes, history} = props;
    return (
        <Container backgroundColor={'rgba(22,22,22,0.9)'} image={'triangles.png'}>
            <div className={classes.root}>
                <div style={{flex: 1}}>
                    <Title text={'what to ask'} color={'#e8e8e8'} icon={'questionCircle'} align={'center'} noPadding />
                </div>
                <div className={classes.message} style={{margin: 'auto', flex: 1}}>
                    <div className={classes.question} >
                        <strong className={classes.subTitle} style={{fontSize: 16, textTransform: 'uppercase', marginTop: 0}}>Want to be a sponsor or
                            founder?</strong>
                        <div style={{marginTop: 5}}>
                            On the form below, choose the corresponding inquiry and provide us with your company's name
                            and email. In your
                            message, let us know which sponsor/founder package you are interested in. If you're unsure,
                            click below to review the available packages.
                        </div>
                        <Button text='View Packages'
                                onClick={() => {
                                    props.scrollPosition({packages: true});
                                    window.scrollTo(0,0);
                                    history.push('/sponsor');
                                }}
                                color={'#e8e8e8'}
                                hover={'rgba(22,22,22,0.9)'}
                                style={{margin: '12 0', fontSize: 12}}/>
                    </div>
                    <div className={classes.question} >
                        <strong className={classes.subTitle} style={{fontSize: 16, textTransform: 'uppercase'}}>Got a ticket question?</strong>
                        <div style={{marginTop: 5}}>
                            Click below to view all of our ticket info. If you're still unsure about something shoot us a message!
                        </div>
                        <Button text='Ticket Info'
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                    props.scrollPosition({opacity: 0, transition: false});
                                    history.push('/tickets');
                                }}
                                color={'#e8e8e8'}
                                hover={'rgba(22,22,22,0.9)'}
                                style={{margin: '12 0', fontSize: 12}}/>
                    </div>
                    <div className={classes.question} >
                        <strong className={classes.subTitle} style={{fontSize: 16, textTransform: 'uppercase'}}>Wanna tell us we're awesome?</strong>
                        <div style={{marginTop: 5}}>
                            Thanks! We welcome all feedback!
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
};

export default connect(null, {scrollPosition})(withRouter(injectSheet(styles)(ContactIntro)))