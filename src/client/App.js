import React, {PureComponent, Fragment} from 'react'
import injectSheet from 'react-jss'
import {renderRoutes} from 'react-router-config'
import {connect} from 'react-redux'
import moment from 'moment'
import axios from 'axios'

import Navbar from './components/Nav/NavBar'
import Menu from './components/Nav/NavMenu'
import Footer from './components/Footer'
import Modal from './components/Modal'
import {startCountDown, toggleNav, scrollPosition} from "./actions";

const styles = theme => ({
    '@global': {
        '*': {
            fontFamily: theme.font.secondary,
            boxSizing: 'border-box'
        },
        body: {
            margin: 0,
            position: 'relative',
            backgroundColor: 'rgba(0,0,0,0.0)'
        },
        html: {
            margin: 0,
            '-webkit-font-smoothing': 'antialiased'
        }
    },
    bodyOverlayChild: {
        height: '100vh',
        minWidth: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
});

class App extends PureComponent {

    componentDidMount = () => {
        this.props.toggleNav(false);
        window.addEventListener("beforeunload", this.onRefresh)
    };

    onRefresh = () => {
        axios.post('/test', this.props.scroll)
    };

    render() {
        const {classes, route, menu, modal, scroll: {scroll}} = this.props;
        return (
            <Fragment>
                <Navbar onClick={() => this.props.toggleNav(!menu)}/>
                {renderRoutes(route.routes)}
                <Menu scroll={menu ? scroll : null} />
                <Footer/>
                {modal && <Modal scroll={scroll}/>}
            </Fragment>
        )
    }
}

const mapStateToProps = ({ui}) => {
    return {
        menu: ui.nav,
        scroll: ui.scroll,
        color: ui.navColor,
        modal: ui.modal
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
    return [
        {
            data: initialCountdown,
            func: startCountDown
        }
    ]

};

export default {
    component: connect(mapStateToProps, {toggleNav, scrollPosition})(injectSheet(styles)(App)),
    loadData
};
