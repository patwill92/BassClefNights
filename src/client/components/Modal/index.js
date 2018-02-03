import React, {Component} from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'

import {openModal} from "../../actions";
import Button from '../ClearButton'
import Title from '../TitleContainer'

const styles = theme => ({
    root: {
        position: 'fixed',
        minHeight: '80vh',
        maxHeight: '80vh',
        minWidth: '80vw',
        maxWidth: '80vw',
        margin: 'auto',
        top: '10%',
        left: '10%',
        zIndex: 10,
        backgroundColor: '#fff',
        ...theme.flex.colCenter,
        alignItems: 'center',
        boxShadow: theme.shadows[10]
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
            overflow: 'auto',
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
    }
});

const mapStateToProps = ({ui}) => {
    return {
        modal: ui.modal
    }
};

@connect(mapStateToProps, {openModal})
@injectSheet(styles)
class Modal extends Component {
    render() {
        const {classes, modal, scroll} = this.props;
        return modal && (
            <div className={classes.root}>
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
                        soloists, with spontaneous jam sessions at the edge of Biscayne Bay looking upon the moon as it
                        glistens on the water. The first snap of fingers launches the beat, the ringing of the timbales,
                        the
                        harmonies of the piano, melodic tones of the brass horns - together in syncopation that will
                        seduce
                        and move you with inimitable sensation.
                        Now imagine that your pleasure has benefited the 100% non-profit Bass Clef Nights Foundation,
                        whose purpose is to provide opportunity for the study and expression of culture through music.
                        Bass Clef Nights will be celebrating its first event at Vizcaya Museum and Gardens in beautiful
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
                                this.props.openModal(false, scroll);
                            }}
                            color={'rgba(22,22,22,0.9)'}
                            hover={'#e8e8e8'}
                            style={{marginTop: 30}}/>
                </div>
            </div>
        )
    }
}

export default Modal