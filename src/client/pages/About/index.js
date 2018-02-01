import React, {Component, Fragment} from 'react'
import injectSheet from 'react-jss'


import Hero from './components/Hero'
import Container from '../components/Container'
import Background from '../components/Background'
import Title from '../components/TitleContainer'

const styles = theme => ({
    root: {

    }
});

@injectSheet(styles)
class About extends Component {
    componentDidMount = () => {
        window.scrollTo(0, 0);
    };
    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Container>
                    <Hero/>
                </Container>
                <Background image='about2.jpeg'/>
            </Fragment>
        )
    };

}


export default {
    component: About
}