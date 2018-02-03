import React, {Component} from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'

import Container from '../../../../components/Container'
import Title from '../../../../components/TitleContainer'
import Button from '../../../../components/ClearButton'
import {openModal} from "../../../../actions";

const styles = theme => ({
    root: {
        textAlign: 'center',
        padding: '90 0'
    },
    contentContainer: {
        ...theme.flex.rowBetween
    },
    msgContainer: {
        textAlign: 'center',
        alignSelf: 'center',
        maxWidth: 600,
        flexBasis: '48%',
        marginLeft: 10
    },
    message: {
        color: 'rgba(22,22,22,0.9)',
        fontWeight: 300,
        fontSize: 15,
        lineHeight: 2,
        marginRight: 0,
        marginLeft: 'auto',
        textAlign: 'center'
    },
    img: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'flex-start',
        '& div': {
            flexBasis: '48%'
        },
        '& #saxContainer': {
            boxShadow: theme.shadows[3]
        },
        flexBasis: '48%'
    },
    image: {
        boxShadow: theme.shadows[3],
        width: '100%'
    },
    '@media (max-width: 768px)': {
        root: {
            padding: '80 15'
        },
        contentContainer: {
            ...theme.flex.colBetween
        },
        msgContainer: {
            textAlign: 'center',
            alignSelf: 'center',
            maxWidth: 500,
            flexBasis: 'auto',
            order: 1,
            marginBottom: 40,
            marginLeft: 0
        },
        img: {
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'space-between',
            '& div': {
                flexBasis: '48%',
            },
            '& #sax': {
                maxHeight: 'auto' + ' !important',
                width: '100% !important',
                right: 0 + ' !important'
            },
            flexBasis: 'auto',
            order: 2
        },
    },
    '@media (max-width: 500px)': {
        small: {
            fontSize: 9.5
        }
    }
});

const mapStateToProps = ({ui}) => {
    return {
        scroll: ui.scroll
    }
}

@connect(mapStateToProps, {openModal})
@injectSheet(styles)
class Festival extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Container backgroundColor={'rgba(255,255,255,1.0)'}>
                <div className={classes.root}>
                    <div className={classes.contentContainer}>
                        <div className={classes.img}>
                            <div style={{position: 'relative'}}>
                                <img className={classes.image}
                                     src="images/trumpet2.jpeg" alt=""
                                     style={{height: 'auto'}}/>
                                <div style={{position: 'absolute', bottom: 0, textAlign: 'left', left: 0}}>
                                    <small className={classes.small}>&#8212;
                                        <span style={{marginLeft: 10}}>The Latin Jazz Trio. Miami, FL</span>
                                        <span style={{display: 'block', color: 'rgba(0,0,0,0)'}}>&#8212;<span
                                            style={{marginLeft: 10, color: '#161616'}}>November, 2017</span></span>
                                    </small>
                                </div>
                            </div>
                            <div id='saxContainer' style={{overflow: 'hidden'}}>
                                <img id='sax' className={classes.image}
                                     src="images/sax.jpeg" alt=""
                                     style={{
                                         maxHeight: 600,
                                         width: 'auto',
                                         position: 'relative',
                                         right: 100
                                     }}/>
                            </div>
                        </div>
                        <div className={classes.msgContainer}>
                            <Title text={'The Festival'} color={'#161616'} icon={'music'} align={'center'}
                                   noPadding/>
                            <div className={classes.message}>
                                Allow yourself to experience an evening in Old Miami, when its name defined a time rich
                                in
                                the finest in cuisine and musical entertainment. Bass Clef Nights will provide you with
                                an evening
                                filled with food prepared by master chefs,
                                full bar and bottle service, cigar lounge, and
                                several areas to enjoy the musical history
                                which defines this magical place.
                            </div>
                            <Button text='Read More'
                                    onClick={() => {
                                        this.props.openModal(true);
                                    }}
                                    color={'rgba(22,22,22,0.9)'}
                                    hover={'#e8e8e8'}
                                    style={{marginTop: 30}}/>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Festival