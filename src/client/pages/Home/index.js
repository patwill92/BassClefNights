import React, {Component, Fragment} from 'react'
import injectSheet from 'react-jss'

import Lineup from './components/Lineup'
import Hero from './components/Hero'
import Venue from './components/Venue'
import Contact from './components/Contact'
import Sponsors from './components/Sponsors'
import Background from '../components/Background'

const styles = theme => ({
    root: {
        overflow: 'hidden',
        zIndex: 1,
        position: 'relative'
    }
});

@injectSheet(styles)
class Home extends Component {
    componentDidMount = () => {
        window.scrollTo(0, 0);
    };
    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <div className={classes.root}>
                    <Hero/>
                    <Lineup/>
                    <Venue/>
                    <Sponsors/>
                    <Contact/>
                </div>
                <Background image='home.jpg'/>
            </Fragment>
        )
    };

}


export default {
    component: Home
}