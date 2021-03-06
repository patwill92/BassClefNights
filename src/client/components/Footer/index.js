import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import injectSheet from 'react-jss'

import Icon from '../Icon'
import Countdown from '../Countdown'
import nav from '../data'
import {scrollPosition} from "../../actions";

const styles = theme => ({
    root: {
        backgroundImage: 'url("images/triangles.png")',
        backgroundColor: 'rgba(22,22,22,0.9)'
    },
    overlay: {
        ...theme.flex.colCenter,
        padding: '30 5%',
        width: '100%',
        '& *': {
            color: '#e8e8e8',
            textAlign: 'center',
            fontFamily: theme.font.secondary,
            textTransform: 'uppercase',
            fontWeight: 300
        },
        '& h3': {
            fontSize: 14
        }
    },
    nav: {
      '& a': {
          textDecoration: 'none !important'
      }
    },
    logoSection: {
        ...theme.flex.colStart,
        '& h3': {
            fontFamily: theme.font.primary,
            fontSize: 24,
            position: 'relative',
            textAlign: 'center',
            marginBottom: 10,
        },
        '& *': {
            textAlign: 'center',
            textDecoration: 'none'
        },
        '& h4, & a': {
            fontSize: 14,
        }
    },
    social: {
        ...theme.flex.rowCenter,
        marginTop: 10
    },
    end: {
        width: '80%',
        borderTop: '0.5px solid rgba(232,232,232,0.7)',
        margin: 'auto',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: 'rgba(232,232,232,0.7)',
        padding: '30 0',
        fontSize: 12
    }
});

@connect(null, {scrollPosition})
@injectSheet(styles)
class Footer extends React.PureComponent {
    render() {
        const {classes} = this.props;
        let directions = 'https://www.google.com/maps/dir/?api=1&destination=3251+S+Miami+Ave+Miami+FL+33129&travelmode=driving';
        return (
            <div className={classes.root}>
                <div className={classes.overlay}>
                    <div className={classes.logoSection}>
                        <div style={{position: 'relative'}}>
                            <img src="images/logoWhiteFilled.png" alt="logo" style={{maxWidth: 50, height: 'auto'}}/>
                            <h3>Bass Clef Nights</h3>
                        </div>
                        <div style={{fontSize: 35}}><Countdown color={'#e8e8e8'}/></div>
                    </div>
                    <div className={classes.nav}>
                        {nav.map(({name, link}) => {
                            return (
                                <h3 onClick={() => {
                                    window.scrollTo(0, 0);
                                    this.props.scrollPosition({opacity: 0, transition: false});
                                }}
                                    key={name}>
                                    <Link to={link}>{name}</Link>
                                </h3>
                            )
                        })}
                        <h3 onClick={() => {
                            window.scrollTo(0, 0);
                            this.props.scrollPosition({opacity: 0, transition: false});
                        }}>
                            <Link to={'/news'}>news</Link>
                        </h3>
                    </div>
                    <div>
                        <a href={directions} style={{position: 'relative', textDecoration: 'none'}}>
                            <h4 style={{marginLeft: 22, marginTop: 10, marginBottom: 10}}>
                                <Icon color='#e8e8e8' name='mapPin' style={{marginRight: 7}}/>
                                Vizcaya Museum and Gardens Miami, FL</h4>
                        </a>
                    </div>
                    <div className={classes.social}>
                        <Icon color='#e8e8e8' name='facebookF'/>
                        <Icon color='#e8e8e8' name='twitter' style={{marginLeft: 20}}/>
                        <Icon color='#e8e8e8' name='instagram' style={{marginLeft: 20}}/>
                    </div>
                </div>
                <div className={classes.end}>
                    &#169; Bass Clef Nights. All rights reserved.
                </div>
            </div>
        )
    }
}

export default Footer