import React, {PureComponent, Fragment} from 'react'
import injectSheet from 'react-jss'
import {renderRoutes} from 'react-router-config'
import {connect} from 'react-redux'

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

const mapStateToProps = ({ui}) => {
    return {
        menu: ui.nav,
        scroll: ui.scroll,
        color: ui.navColor,
        modal: ui.modal
    }
};

@connect(mapStateToProps, {toggleNav, scrollPosition, startCountDown})
@injectSheet(styles)
class App extends PureComponent {
    componentDidMount = () => {
        this.props.toggleNav(false);
        setInterval(this.props.startCountDown, 1000);
    };

    render() {
        const {route, menu, modal, scroll: {scroll}} = this.props;
        return (
            <Fragment>
                <Navbar onClick={() => this.props.toggleNav(!menu)}/>
                {renderRoutes(route.routes)}
                <Menu scroll={menu ? scroll : null}/>
                <Footer/>
                {modal && <Modal scroll={scroll}/>}
            </Fragment>
        )
    }
}

const loadData = () => {
    return [
        {
            data: null,
            func: startCountDown
        }
    ]
};

export default {
    component: App,
    loadData
};
