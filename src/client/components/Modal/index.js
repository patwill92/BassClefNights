import React, {Component, Fragment} from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'

import {openModal} from "../../actions";
import Button from '../ClearButton'
import Title from '../TitleContainer'

const animation = (name, property, from, to) => {
    return {
        [`@keyframes ${name}`]: {
            from: `${property}: ${from}`,
            to: `${property}: ${to}`
        }
    }
};

const drop = animation('dropModal', 'top', '-30vh', '7.5%');
const back = animation('dropBackModal', 'top', '7.5%', '-50vh');
const fade = animation('fadeModal', 'opacity', 0.3, 1.0);
const fadeOverlay = animation('fadeOverlay', 'opacity', 0.0, 0.5);
const fadeOutOverlay = animation('fadeOutOverlay', 'opacity', 0.5, 0.0);
const fadeOut = animation('fadeOutModal', 'opacity', 1.0, 0.0);

const styles = theme => ({
    root: {
        position: 'fixed',
        minHeight: '85vh',
        maxHeight: '85vh',
        minWidth: '80vw',
        maxWidth: '80vw',
        margin: 'auto',
        top: '7.5%',
        animationFillMode: 'forwards !important',
        left: '10%',
        zIndex: 10,
        backgroundColor: '#fff',
        ...theme.flex.colCenter,
        alignItems: 'center',
        boxShadow: theme.shadows[10]
    },
    bodyOverlay: {
        position: 'fixed',
        minHeight: '100vh',
        minWidth: '100vw',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9,
        backgroundColor: 'rgb(0,0,0)',
        animationFillMode: 'both !important'
    },
    modalChild: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        padding: '50 30 50 30',
        overflow: 'auto',
        textAlign: 'center',
        '& p': {
            color: 'rgba(22,22,22,0.9)',
            fontWeight: 300,
            fontSize: 15,
            lineHeight: 2,
            marginTop: 0,
            textAlign: 'left'
        }
    },
    '@media (max-width: 500px)': {
        root: {
            minHeight: '85vh',
            maxHeight: '85vh',
            minWidth: '90vw',
            maxWidth: '90vw',
            top: '7.5%',
            left: '5%',
        },
        modalChild: {
            padding: '30 20 30 20',
            '-webkit-overflow-scrolling': 'touch',
            textAlign: 'center',
            '& p': {
                color: 'rgba(22,22,22,0.9)',
                fontWeight: 300,
                fontSize: 15,
                lineHeight: 1.5,
                marginTop: 0,
                textAlign: 'left'
            }
        }
    },
    ...drop,
    ...back,
    ...fadeOut,
    ...fade,
    ...fadeOverlay,
    ...fadeOutOverlay
});

const mapStateToProps = ({ui}) => {
    return {
        modal: ui.modal
    }
};

@connect(mapStateToProps, {openModal})
@injectSheet(styles)
class Modal extends Component {
    state = {
        animation: '',
        overlay: ''
    };

    componentDidMount = () => {
        this.setState({
            animation: 'dropModal 0.3s ease-in-out, fadeModal 0.3s ease-in-out',
            overlay: 'fadeOverlay 0.3s ease-in-out'
        })
    }

    render() {
        const {classes, scroll} = this.props;
        return (
            <Fragment>
                <div className={classes.root} style={{animation: this.state.animation, animationFillMode: 'forwards'}}>
                    <div className={classes.modalChild}>
                        <Title text={'The Festival'} color={'#161616'} icon={'musicSax'} align={'center'} y={180}
                               noPadding/>
                        <p>Allow yourself to experience an evening in Old Miami, when its name defined a time rich in
                            the finest in cuisine and musical entertainment. Bass Clef Nights will provide you with an
                            evening
                            filled with food prepared by master chefs,
                            full bar and bottle service, cigar lounge, and
                            several areas to enjoy the musical history
                            which defines this magical place.</p>
                        <p>Enter through a red-carpet journey, the
                            lounge with table seating for our VIP Guests
                            & Founders, full liquor bars and bottle
                            service, and roving cigar servers. Enter the
                            open quarters featuring a multi-piece Latin
                            Jazz Band onstage, with projector screens
                            and dance floor. Savor culinary
                            masterpieces freshly prepared by creative
                            artisan chefs, and enjoy exquisite cocktails
                            prepared by master bartenders that linger
                            shamelessly on your palate.</p>
                        <p>When you step outside you will experience Miami nights listening to the best of Latin Jazz
                            soloists, with spontaneous jam sessions at the edge of Biscayne Bay looking upon the moon as
                            it
                            glistens on the water. The first snap of fingers launches the beat, the ringing of the
                            timbales,
                            the
                            harmonies of the piano, melodic tones of the brass horns - together in syncopation that will
                            seduce
                            and move you with inimitable sensation.
                            Now imagine that your pleasure has benefited the 100% non-profit Bass Clef Nights
                            Foundation,
                            whose purpose is to provide opportunity for the study and expression of culture through
                            music.
                            Bass Clef Nights will be celebrating its first event at Vizcaya Museum and Gardens in
                            beautiful
                            Miami, Florida in November 2018.</p>
                        <p>Join us for this musical journey into the history
                            that is carved into the essence of this truly
                            magical place, as we give new life to the emotive
                            performances and undisputed talent of the
                            timeless greats like Tito Puente and Dizzy
                            Gillespie, their emotive performances, artistic
                            passion and musical craftsmanship which their
                            undisputed talent continues to inspire.</p>
                        <Button text='close'
                                onClick={() => {
                                    window.scrollTo(0, scroll);
                                    this.setState({
                                        animation: 'dropBackModal 0.3s ease-in-out, fadeOutModal 0.3s ease-in-out',
                                        overlay: 'fadeOutOverlay 0.3s ease-in-out'
                                    }, () => {
                                        setTimeout(() => this.props.openModal(false, scroll), 300)
                                    })
                                }}
                                color={'rgba(22,22,22,0.9)'}
                                hover={'#e8e8e8'}
                                style={{marginTop: 30}}/>
                    </div>
                </div>
                <div className={classes.bodyOverlay}
                     style={{animation: this.state.overlay}}/>
            </Fragment>
        )
    }
}

export default Modal