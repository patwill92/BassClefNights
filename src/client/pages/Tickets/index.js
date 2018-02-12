import React, {Component, Fragment} from 'react'
import {connect} from "react-redux";
import {Helmet} from 'react-helmet'

import Hero from './components/Hero'
import Background from '../../components/Background'
import {setNavColor, scrollPosition} from "../../actions";

@connect(null, {setNavColor, scrollPosition})
class Tickets extends Component {
    componentDidMount = () => {
        this.props.setNavColor(255);
        this.props.scrollPosition({transition: true})
    };

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Helmet>
                    <title>TICKETS - BASS CLEF NIGHTS</title>
                    <meta name={'description'} content={'Tickets page for Bass Clef Nights Festival'} />
                    <meta property={'og:title'} content={'TICKETS - BASS CLEF NIGHTS'} />
                    <meta property={'og:description'} content={"Miami's most exclusive jazz festival"} />
                    <meta property={'og:url'} content={"https://bassclefnights.herokuapp.com/tickets"} />
                    <meta property={'og:image'} content={"https://bassclefnights.herokuapp.com/images/blackBack.jpg"} />
                </Helmet>
                <Hero/>
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
    component: Tickets,
    loadData
}