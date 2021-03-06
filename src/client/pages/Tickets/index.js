import React, {Component, Fragment} from 'react'
import {connect} from "react-redux";
import {Helmet} from 'react-helmet'

import Hero from './components/Hero'
import Nav from './components/Nav'
import TicketType from './components/Tickets'
import Background from '../../components/Background'
import {setNavColor, scrollPosition} from "../../actions";

@connect(({ui}) => ({scroll: ui.scroll}), {setNavColor, scrollPosition})
class Tickets extends Component {
    state = {
        type: 0
    };

    componentDidMount = () => {
        this.props.setNavColor(255);
        this.props.scrollPosition({transition: true})
    };

    changeType = type => {
        this.setState({type})
    };

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Helmet>
                    <title>TICKETS - BASS CLEF NIGHTS</title>
                    <meta name={'description'} content={'Tickets page for Bass Clef Nights Festival'}/>
                    <meta property={'og:title'} content={'TICKETS - BASS CLEF NIGHTS'}/>
                    <meta property={'og:description'} content={"Miami's most exclusive jazz festival"}/>
                    <meta property={'og:url'} content={"https://bassclefnights.herokuapp.com/tickets"}/>
                    <meta property={'og:image'} content={"https://bassclefnights.herokuapp.com/images/blackBack.jpg"}/>
                </Helmet>
                <Hero/>
                <Nav type={this.state.type} onClick={this.changeType} sticky={this.props.scroll}/>
                <TicketType type={this.state.type}/>
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