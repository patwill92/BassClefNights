import React, {Component} from 'react';
import injectSheet from 'react-jss';

import TitleContainer from '../../../components/TitleContainer'
import Icon from '../../../components/Icon'
import VenueSlides from './VenueSlides'

const styles = theme => ({
    root: {
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='46' viewBox='0 0 70 46'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23cccccc' fill-opacity='0.18'%3E%3Cpolygon points='68 44 62 44 62 46 56 46 56 44 52 44 52 46 46 46 46 44 40 44 40 46 38 46 38 44 32 44 32 46 26 46 26 44 22 44 22 46 16 46 16 44 12 44 12 46 6 46 6 44 0 44 0 42 8 42 8 28 6 28 6 0 12 0 12 28 10 28 10 42 18 42 18 28 16 28 16 0 22 0 22 28 20 28 20 42 28 42 28 28 26 28 26 0 32 0 32 28 30 28 30 42 38 42 38 0 40 0 40 42 48 42 48 28 46 28 46 0 52 0 52 28 50 28 50 42 58 42 58 28 56 28 56 0 62 0 62 28 60 28 60 42 68 42 68 0 70 0 70 46 68 46'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundColor: '#fff'
    },
    overlay: {
        ...theme.flex.rowEven,
        alignItems: 'center',
        '& #venueSlides': {
            flex: 1,
            height: 500,
            left: 0,
            position: 'relative',
            color: '#800000'
        },
        maxWidth: '100%',
        background: `linear-gradient(to right bottom,  rgba(54, 69, 79, 0.5) 50%, rgba(0,0,0,0) 50%)`,
        margin: 'auto',
        padding: '30 5%',
        textAlign: 'center',
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
        overlay: {
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
        overlay: {
            padding: '0 0',
            '& #venueSlides': {
                top: -10,
                height: 350
            },
            background: `#fff`,
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
               <div className={classes.overlay}>
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
            </div>
        )
    };
}

export default injectSheet(styles)(Venue)