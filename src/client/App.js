import React, {Component, Fragment} from 'react'
import injectSheet from 'react-jss'
import {renderRoutes} from 'react-router-config'
import {connect} from 'react-redux'

import ToggleNav from './pages/components/ToggleNav'
import Menu from './pages/components/NavMenu'
import Footer from './pages/components/Footer'
import {toggleNav} from "./actions";


const root = {
    margin: 0
};


const styles = theme => ({
    '@global': {
        '*': {
            fontFamily: 'Roboto',
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
            ...root
        }
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
        this.props.toggleNav(false)
    };

    render() {
        const {classes, route, menu} = this.props;
        return (
            <Fragment>
                {!menu && <ToggleNav color='#e8e8e8' text='menu' onClick={() => this.props.toggleNav(!menu)}/>}
                {renderRoutes(route.routes)}
                <Menu/>
                <Footer/>
                <div className={classes.bodyOverlay}>
                    <div className={classes.bodyOverlayChild}/>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ui}) => {
    return {
        menu: ui.nav
    }
};

export default {
    component: connect(mapStateToProps, {toggleNav})(injectSheet(styles)(App))
};
