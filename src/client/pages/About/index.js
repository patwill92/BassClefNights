import React, {Component, Fragment} from 'react'
import injectSheet from 'react-jss'
import {connect} from "react-redux";
import {Helmet} from 'react-helmet'


import Hero from './components/Hero'
import Background from '../components/Background'
import {setNavColor} from "../../actions";

const styles = theme => ({
    root: {}
});

@connect(null, {setNavColor})
@injectSheet(styles)
class About extends Component {
    componentDidMount = () => {
        this.props.setNavColor(233);
        window.scrollTo(0, 0);
    };

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Helmet>
                    <title>ABOUT - BASS CLEF NIGHTS</title>
                    <meta name={'description'} content={'About page for Bass Clef Nights Festival'} />
                    <meta property={'og:title'} content={'ABOUT - BASS CLEF NIGHTS'} />
                    <meta property={'og:description'} content={"Miami's most exclusive jazz festival"} />
                    <meta property={'og:url'} content={"https://bassclefnights.herokuapp.com/about"} />
                    <meta property={'og:image'} content={"https://bassclefnights.herokuapp.com/images/logoFilled.jpg"} />
                </Helmet>
                <Hero/>
                <Background image='about2.jpeg'/>
            </Fragment>
        )
    };

}

const loadData = () => {
    return [
        {
            data: 233,
            func: setNavColor
        }
    ]
};

export default {
    component: About,
    loadData
}