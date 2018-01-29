import React, {Component, Fragment} from 'react'
import injectSheet from 'react-jss'
import {renderRoutes} from 'react-router-config'
import {connect} from 'react-redux'

import ToggleNav from './pages/components/ToggleNav'
import Menu from './pages/components/NavMenu'
import Footer from './pages/components/Footer'
import {toggleNav} from "./actions";


const root = {
    margin: 0,
    minHeight: '100%'
};


const styles = theme => ({
    '@global': {
        '*': {
            fontFamily: 'Roboto',
            boxSizing: 'border-box'
        },
        body: {
            ...root,
            backgroundColor: '#fff',
            backgroundImage: 'url("images/home.jpg")',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        },
        html: {
            ...root
        }
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
