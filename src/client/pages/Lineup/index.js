import React, {Component, Fragment} from 'react'
import {connect} from "react-redux";
import {Helmet} from 'react-helmet'


import Hero from './components/Hero'
import Background from '../../components/Background'
import {setNavColor, scrollPosition} from "../../actions";
import Artists from './components/ArtistList'
import LineupIntro from './components/LineupIntro'

@connect(null, {setNavColor, scrollPosition})
class Lineup extends Component {
    componentDidMount = () => {
        this.props.setNavColor(255);
        this.props.scrollPosition({transition: true})
    };

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Helmet>
                    <title>LINEUP - BASS CLEF NIGHTS</title>
                    <meta name={'description'} content={'Lineup page for Bass Clef Nights Festival'} />
                    <meta property={'og:title'} content={'LINEUP - BASS CLEF NIGHTS'} />
                    <meta property={'og:description'} content={"Miami's most exclusive jazz festival"} />
                    <meta property={'og:url'} content={"https://bassclefnights.herokuapp.com/lineup"} />
                    <meta property={'og:image'} content={"https://bassclefnights.herokuapp.com/images/blackBack.jpg"} />
                </Helmet>
                <Hero/>
                <LineupIntro/>
                <Artists/>
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
    component: Lineup,
    loadData
}