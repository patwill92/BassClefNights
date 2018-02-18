import React, {PureComponent} from 'react';
import injectSheet from 'react-jss';

import TitleContainer from '../../../../components/TitleContainer'
import AnimationHOC from '../../../../components/AnimationHOC'
import Icon from '../../../../components/Icon'
import VenueSlides from './VenueSlides'

const styles = theme => ({
    root: {
        backgroundColor: '#fff'
    },
    overlay: {
        ...theme.flex.rowEven,
        alignItems: 'center',
        '& #venueSlides': {
            flex: 1,
            minHeight: 500,
            left: 0,
            position: 'relative'
        },
        maxWidth: '100%',
        margin: 'auto',
        padding: '30 5%',
        textAlign: 'center',
    },
    venueInfo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
        marginRight: 0
    },
    textInfo: {
        fontFamily: '\'Montserrat\'',
        letterSpacing: 2,
        lineHeight: '1.7em',
        fontSize: '1.0em',
        fontWeight: 300,
        margin: '20px auto',
        maxWidth: 600,
        padding: '0 15px',
        color: '#161616',
        textDecoration: 'none'
    },
    textWrapper: {
        transition: 'transform 600ms ease-in-out, opacity 600ms ease-in-out'
    },
    '@media (max-width: 942px)': {
        overlay: {
            '& #venueSlides': {
                left: 0,
                position: 'relative',
                minHeight: 350
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
                height: 350
            },
            background: `#fff`,
        },
        venueInfoInner: {
            paddingBottom: 20
        }
    }
});

@AnimationHOC
@injectSheet(styles)
class Venue extends PureComponent {
    render() {
        const {classes} = this.props;
        let directions = 'https://www.google.com/maps/dir/?api=1&destination=3251+S+Miami+Ave+Miami+FL+33129&travelmode=driving';
        return (
            <div className={classes.root}>
                <div className={classes.overlay}>
                    <div className={classes.venueInfo}>
                        <div style={{width: '100%'}}>
                            <TitleContainer text='The venue' color='#161616' icon='martini'/>
                        </div>
                        <VenueSlides type='mobile'/>
                        <div className={classes.textWrapper} style={{
                            transform: this.props.visible ? 'translateY(0%)' : 'translateY(10%)',
                            opacity: this.props.visible ? 1 : 0,
                            paddingBottom: 30
                        }}
                             ref={title => this.props.this.element = title}>
                            <p className={classes.textInfo}>Allow yourself to experience an evening in Old Miami at Vizcaya
                                Museum and Gardens in beautiful
                                Miami, Florida. Bass Clef Nights will provide you with an evening
                                filled with food prepared by master chefs,
                                full bar and bottle service, cigar lounge, and
                                several areas to enjoy the musical history
                                which defines this magical place.</p>
                            <p style={{padding: '10 0'}}><img src="images/logoFilled.png" alt="" style={{maxWidth: 25, height: 'auto'}}/></p>
                            <a href={directions} className={classes.textInfo}
                               style={{fontSize: '0.9rem', cursor: 'pointer'}}><Icon color='#2962FF' name='mapPin'/> 3251 S
                                Miami
                                Ave, Miami, FL 33129</a>
                        </div>

                    </div>
                </div>
            </div>
        )
    };
}

export default Venue