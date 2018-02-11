import React, {Component, Fragment, PureComponent} from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'
import {Helmet} from 'react-helmet'

import Lineup from './components/Lineup'
import Hero from './components/Hero'
import Venue from './components/Venue'
import Contact from './components/Contact'
import Sponsors from './components/Sponsors'
import Background from '../../components/Background'
import {setNavColor, scrollPosition} from "../../actions";

const styles = theme => ({
    root: {
        overflow: 'hidden',
        zIndex: 1,
        position: 'relative'
    }
});

@connect(null, {setNavColor, scrollPosition})
@injectSheet(styles)
class Home extends PureComponent {
    componentDidMount = () => {
        this.props.setNavColor(22);
        this.props.scrollPosition({transition: true})
    };
    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Helmet>
                    <title>HOME - BASS CLEF NIGHTS</title>
                    <meta name={'description'} content={'Home page for Bass Clef Nights Festival'} />
                    <meta property={'og:title'} content={'HOME - BASS CLEF NIGHTS'} />
                    <meta property={'og:description'} content={"Miami's most exclusive jazz festival"} />
                    <meta property={'og:url'} content={"https://bassclefnights.herokuapp.com/"} />
                    <meta property={'og:image'} content={"https://bassclefnights.herokuapp.com/images/blackBack.jpg"} />
                </Helmet>
                <div className={classes.root}>
                    <Hero/>
                    <Lineup/>
                    <Venue/>
                    <Sponsors/>
                    <Contact/>
                </div>
                <Background image='home.jpg' overlay={'rgba(0,0,0,0.5)'}/>
            </Fragment>
        )
    };

}

const loadData = () => {
    return [
        {
            data: 22,
            func: setNavColor
        }
    ]

};

export default {
    component: Home,
    loadData
}