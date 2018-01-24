import React, {Component} from 'react';
import injectSheet from 'react-jss';

import TitleContainer from './TitleContainer'
import Icon from '../../../../components/Icon'
import VenueSlides from './VenueSlides'

const styles = theme => ({
    root: {
        ...theme.flex.rowEven,
        width: '100%',
        textAlign: 'center',
        '& $venueInfo, & #venueSlides': {
            flex: 1
        },
        padding: '50 0',
        minHeight: '600px',
        backgroundColor: '#fff'
    },
    venueInfo: {
        padding: '30px 10px',
        height: 'inherit',
        order: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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
        venueInfo: {
            paddingTop: '0px',
        },
        root: {
            paddingTop: 0
        }
    },
    '@media (max-width: 500px)': {
        venueInfo: {
            padding: '0px'
        }
    }
});

let start;

class Venue extends Component {
    render() {
        const {classes} = this.props;
        let directions = 'https://www.google.com/maps/dir/?api=1&destination=3251+S+Miami+Ave+Miami+FL+33129&travelmode=driving';
        return (
            <div className={classes.root}>
                <div className={classes.venueInfo}>
                    <div>
                        <TitleContainer text='The venue' color='#333'/>
                        <VenueSlides type='mobile' />
                        <p className={classes.textInfo}>Allow yourself to experience an evening in Old Miami at Vizcaya
                            Museum and Gardens in beautiful
                            Miami, Florida. Bass Clef Nights will provide you with an evening
                            filled with food prepared by master chefs,
                            full bar and bottle service, cigar lounge, and
                            several areas to enjoy the musical history
                            which defines this magical place.</p>
                        <a href={directions} className={classes.textInfo}
                           style={{fontSize: '0.9rem', cursor: 'pointer'}}><Icon color='#333' name='mapPin'/> 3251 S Miami
                            Ave, Miami, FL 33129</a>
                    </div>
                </div>
                <VenueSlides type='desktop'/>
            </div>
        )
    };
}

export default injectSheet(styles)(Venue)