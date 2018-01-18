import React, {Component} from 'react'
import injectSheet from 'react-jss'
import {renderRoutes} from 'react-router-config'


const styles = theme => ({
    '@global': {
        '*': {
            fontFamily: 'Roboto !important'
        }
    }
});

class App extends Component {
    componentDidMount = () => {
        const jssStyles = document.getElementById('server-side-styles');
        jssStyles.parentNode.removeChild(jssStyles);
    };

    render() {
        const {classes, route} = this.props;
        return (
            <div className={classes.root}>
                {renderRoutes(route.routes)}
            </div>
        )
    }
}

export default {
    component: injectSheet(styles)(App)
};
