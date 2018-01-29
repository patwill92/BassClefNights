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
        backgroundImage: 'url("images/triangles.png")',
        backgroundColor: 'rgba(7,7,7,0.9)'
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
        textDecoration: 'none',
        color: '#e8e8e8'

    },
    logo: {
        backgroundImage:"url('images/logoWhiteFilled.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
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
            backgroundColor: '#fff',
            '& #venueSlides': {
                top: -10,
                height: 350
            }
        },
        venueInfoInner: {
            paddingBottom: 20
        },
        textInfo: {
            color: '#222',
            '& path': {
                fill: '#222 !important'
            }
        },
        logo: {
            backgroundImage:"url('images/logoFilled.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
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
        let color = '#e8e8e8';
        return (
            <div className={classes.root}>
                <div className={classes.venueInfo}>
                    <div className={classes.venueInfoInner}>
                        <TitleContainer text='The venue' color={color} icon='martini' inverse={'#222'}/>
                        <VenueSlides type='mobile' />
                        <p className={classes.textInfo}>Allow yourself to experience an evening in Old Miami at Vizcaya
                            Museum and Gardens in beautiful
                            Miami, Florida. Bass Clef Nights will provide you with an evening
                            filled with food prepared by master chefs,
                            full bar and bottle service, cigar lounge, and
                            several areas to enjoy the musical history
                            which defines this magical place.</p>
                        <p><span className={classes.logo} style={{height: 25, width: 25, display: 'inline-block'}} /></p>
                        <a href={directions} className={classes.textInfo}
                           style={{fontSize: '0.9rem', cursor: 'pointer'}}><Icon color={color} name='mapPin'/> 3251 S Miami
                            Ave, Miami, FL 33129</a>
                    </div>
                </div>
                <VenueSlides type='desktop'/>
            </div>
        )
    };
}

export default injectSheet(styles)(Venue)