import React, {Component, Fragment} from 'react'
import injectSheet from 'react-jss'
import {renderRoutes} from 'react-router-config'
import {connect} from 'react-redux'

import Navbar from './components/Navbar'
import Menu from './components/NavMenu'
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
            ...root
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
                {!menu && <Navbar/>}
                {renderRoutes(route.routes)}
                <Menu/>
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
