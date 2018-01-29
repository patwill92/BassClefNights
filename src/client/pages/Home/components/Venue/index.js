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
        padding: '30px 5%',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='46' viewBox='0 0 70 46'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23e8e8e8' fill-opacity='0.18'%3E%3Cpolygon points='68 44 62 44 62 46 56 46 56 44 52 44 52 46 46 46 46 44 40 44 40 46 38 46 38 44 32 44 32 46 26 46 26 44 22 44 22 46 16 46 16 44 12 44 12 46 6 46 6 44 0 44 0 42 8 42 8 28 6 28 6 0 12 0 12 28 10 28 10 42 18 42 18 28 16 28 16 0 22 0 22 28 20 28 20 42 28 42 28 28 26 28 26 0 32 0 32 28 30 28 30 42 38 42 38 0 40 0 40 42 48 42 48 28 46 28 46 0 52 0 52 28 50 28 50 42 58 42 58 28 56 28 56 0 62 0 62 28 60 28 60 42 68 42 68 0 70 0 70 46 68 46'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        background: '#fff'
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
        color: '#222'

    },
    logo: {
        backgroundImage:"url('images/logoFilled.png')",
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
        let color = '#222';
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