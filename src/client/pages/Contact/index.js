import React, {Component, Fragment} from 'react'
import injectSheet from 'react-jss'
import {connect} from "react-redux";
import {Helmet} from 'react-helmet'


import Hero from './components/Hero'
import Background from '../../components/Background'
import {setNavColor, scrollPosition} from "../../actions";
import ContactIntro from './components/ContactIntro'
import Form from './components/Contact'

const styles = theme => ({
    root: {}
});

@connect(null, {setNavColor, scrollPosition})
@injectSheet(styles)
class Contact extends Component {
    componentDidMount = () => {
        this.props.setNavColor(255);
        this.props.scrollPosition({transition: true})
    };

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Helmet>
                    <title>CONTACT - BASS CLEF NIGHTS</title>
                    <meta name={'description'} content={'Contact page for Bass Clef Nights Festival'} />
                    <meta property={'og:title'} content={'Contact - BASS CLEF NIGHTS'} />
                    <meta property={'og:description'} content={"Miami's most exclusive jazz festival"} />
                    <meta property={'og:url'} content={"https://bassclefnights.herokuapp.com/contact"} />
                    <meta property={'og:image'} content={"https://bassclefnights.herokuapp.com/images/blackBack.jpg"} />
                </Helmet>
                <Hero/>
                <ContactIntro/>
                <Form/>
                <Background image='about2.jpeg' overlay={'rgba(255, 255, 255, 0.97)'}/>
            </Fragment>
        )
    };

}

const loadData = () => {
    return [
        {
            data: 255,
            func: setNavColor
        }
    ]
};

export default {
    component: Contact,
    loadData
}