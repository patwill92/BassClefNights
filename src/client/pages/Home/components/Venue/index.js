import React, {Component} from 'react';
import injectSheet from 'react-jss';

import TitleContainer from '../../../components/TitleContainer'
import Icon from '../../../components/Icon'
import VenueSlides from './VenueSlides'

const styles = theme => ({
    root: {
        ...theme.flex.rowEven,
        textAlign: 'center',
        alignItems: 'center',
        '& #venueSlides': {
            flex: 1,
            height: 500,
            left: 0,
            position: 'relative'
        },
        maxWidth: '100%',
        padding: '60px 5%',
        backgroundColor: '#fff'
    },
    venueInfo: {
        order: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginRight: 0
    },
    textInfo: {
        fontFamily: theme.font.secondary,
        letterSpacing: 2,
        lineHeight: '1.7em',
        fontSize: '1.0em',
        fontWeight: 300,
        margin: '20px auto',
        maxWidth: '85%',
        color: '#333',
        textDecoration: 'none'
    },
    '@media (max-width: 942px)': {
        root: {
            '& #venueSlides': {
                left: 0,
                position: 'relative',
                top: -20
            },
            padding: '30px 15px',
        }
    },
    '@media (max-width: 500px)': {
        venueInfo: {
            padding: '0px'
        },
        root: {
            padding: '0 0',
            '& #venueSlides': {
                top: -10,
                height: 350
            }
        },
        venueInfoInner: {
            paddingBottom: 20
        }
    }
});

class Venue extends Component {
    static testFunc = () => {
        console.log('Venue');
    }
    render() {
        const {classes} = this.props;
        let directions = 'https://www.google.com/maps/dir/?api=1&destination=3251+S+Miami+Ave+Miami+FL+33129&travelmode=driving';
        return (
            <div className={classes.root}>
                <div className={classes.venueInfo}>
                    <div className={classes.venueInfoInner}>
                        <TitleContainer text='The venue' color='#222' icon='martini'/>
                        <VenueSlides type='mobile' />
                        <p className={classes.textInfo}>Allow yourself to experience an evening in Old Miami at Vizcaya
                            Museum and Gardens in beautiful
                            Miami, Florida. Bass Clef Nights will provide you with an evening
                            filled with food prepared by master chefs,
                            full bar and bottle service, cigar lounge, and
                            several areas to enjoy the musical history
                            which defines this magical place.</p>
                        <p><img src="images/logoFilled.png" alt="" style={{maxWidth: 25, height: 'auto'}}/></p>
                        <a href={directions} className={classes.textInfo}
                           style={{fontSize: '0.9rem', cursor: 'pointer'}}><Icon color='#2962FF' name='mapPin'/> 3251 S Miami
                            Ave, Miami, FL 33129</a>
                    </div>
                </div>
                <VenueSlides type='desktop'/>
            </div>
        )
    };
}

export default injectSheet(styles)(Venue)