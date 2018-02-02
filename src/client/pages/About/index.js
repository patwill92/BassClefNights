import React, {Component, Fragment} from 'react'
import injectSheet from 'react-jss'
import {connect} from "react-redux";


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