import React, {Component, Fragment} from 'react'
import injectSheet from 'react-jss'
import {connect} from "react-redux";
import {Helmet} from 'react-helmet'


import Hero from './components/Hero'
import SponsorIntro from './components/SponsorIntro'
import Packages from './components/Packages'
import Background from '../../components/Background'
import ImageBanner from './components/ImageBanner'
import WhySponsor from './components/WhySponsor'
import LineBreak from '../../components/LineBreak'
import {setNavColor, scrollPosition} from "../../actions";

const styles = {
    '@media (max-width: 690px)': {
        lineBreak: {
            display: 'none'
        }
    }
};

@connect(({ui}) => ({scroll: ui.scroll}), {setNavColor, scrollPosition})
@injectSheet(styles)
class Sponsor extends Component {
    componentDidMount = () => {
        this.props.setNavColor(255);
        this.props.scrollPosition({transition: true});
        if (this.props.scroll.packages) {
            setTimeout(async () => {
                let element = await document.getElementById('packages').offsetTop;
                window.scrollTo(0, element)
            }, 1);
        }
    };

    componentWillUnmount = () => {
        this.props.scrollPosition({packages: false})
    };

    render() {
        let {classes} = this.props;
        return (
            <Fragment>
                <Helmet>
                    <title>SPONSOR - BASS CLEF NIGHTS</title>
                    <meta name={'description'} content={'Sponsor page for Bass Clef Nights Festival'}/>
                    <meta property={'og:title'} content={'SPONSOR - BASS CLEF NIGHTS'}/>
                    <meta property={'og:description'} content={"Miami's most exclusive jazz festival"}/>
                    <meta property={'og:url'} content={"https://bassclefnights.herokuapp.com/sponsor"}/>
                    <meta property={'og:image'} content={"https://bassclefnights.herokuapp.com/images/blackBack.jpg"}/>
                </Helmet>
                <Hero/>
                <ImageBanner/>
                <SponsorIntro scrollPosition={this.props.scrollPosition}/>
                <div className={classes.lineBreak} style={{backgroundColor: '#fff', padding: '20px 20%'}}>
                    <LineBreak icon={'square'} color={'#161616'}/>
                </div>
                <WhySponsor/>
                <Packages/>
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
    component: Sponsor,
    loadData
}