import React, {Component} from 'react'
import injectSheet from 'react-jss'
import {renderRoutes} from 'react-router-config'
import {connect} from 'react-redux'
import moment from 'moment'

import Navbar from './pages/components/NavBar'
import Menu from './pages/components/NavMenu'
import Footer from './pages/components/Footer'
import {startCountDown, toggleNav} from "./actions";

const styles = theme => ({
    '@global': {
        '*': {
            fontFamily: theme.font.secondary,
            boxSizing: 'border-box'
        },
        body: {
            margin: 0,
            height: '100%',
            width: '100%',
            minHeight: '100%',
            position: 'relative',
            backgroundColor: 'rgba(0,0,0,0.0)'
        },
        html: {
            margin: 0
        }
    },
    root: {
        margin: 0,
        height: '100%',
        width: '100%',
        minHeight: '100%',
        position: 'relative'
    },
    bodyOverlay: {
        position: 'fixed',
        minHeight: '100vh',
        minWidth: '100vw',
        top: 0,
        left: 0,
        right: 0,
        zIndex: -10,
        backgroundImage: 'url("images/home.jpg")',
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover',
        backgroundPosition: 'center',
    },
    bodyOverlayChild: {
        height: '100vh',
        minWidth: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
});

class App extends Component {
    componentDidMount = () => {
        this.props.toggleNav(false);
    };

    render() {
        const {classes, route, menu} = this.props;
        return (
            <div className={classes.root} id='main'>
                {!menu && <Navbar onClick={() => this.props.toggleNav(!menu)}/>}
                {renderRoutes(route.routes)}
                <Menu scroll={this.props.scroll} menu={menu}/>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = ({ui}) => {
    return {
        menu: ui.nav,
        scroll: ui.scroll
    }
};


const loadData = () => {
    let eventDate = new Date(Date.UTC(2018, 10, 15));
    let currentTime = Date.now();
    let duration = moment.duration((eventDate - currentTime));
    let initialCountdown = {
        totalDays: Math.floor(duration.asDays()) * 24 * 60 * 60,
        totalHours: duration.hours() * 60 * 60,
        totalMinutes: duration.minutes() * 60,
        totalSeconds: duration.seconds(),
        days: Math.floor(duration.asDays()),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds()
    };
    console.log(initialCountdown);
    return [
        {
            data: initialCountdown,
            func: startCountDown
        }
    ]

};

export default {
    component: connect(mapStateToProps, {toggleNav})(injectSheet(styles)(App)),
    loadData
};
