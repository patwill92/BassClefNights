import React, {Fragment} from 'react'
import {findDOMNode} from 'react-dom'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'

import Container from '../../../../components/Container'
import SponsorCard from '../../../../components/SponsorTicketCard'
import ticketData from './data'
import Title from '../../../../components/TitleContainer'
import {scrollPosition} from "../../../../actions";

const styles = theme => ({
    root: {
        textAlign: 'center',
        padding: '50 0'
    },
    message: {
        color: 'rgba(233,233,233,0.9)',
        fontWeight: 300,
        maxWidth: 500,
        fontSize: 15,
        lineHeight: 2
    },
    '@media (max-width: 500px)': {
        message: {
            fontSize: 15
        },
        root: {
            padding: '40 15'
        }
    }
});

@connect(({ui}) => ({scroll: ui.scroll}), {scrollPosition})
@injectSheet(styles)
class Packages extends React.PureComponent {
    componentDidMount = () => {
        if (this.props.scroll.packages) {
            const packages = findDOMNode(this.refs.packages);
            window.scrollTo(0, packages.offsetTop - 40);
        }
    };

    componentWillUnmount = () => {
        this.props.scrollPosition({packages: false})
    };

    render() {
        let list = ticketData.sponsor.subtype;
        let {classes} = this.props;
        return (
            <Fragment>
                <Container ref='packages' backgroundColor={'rgba(22,22,22,0.9)'} image={'triangles.png'}>
                    <div className={classes.root}>
                        <div style={{paddingTop: 20}}>
                            <Title text={'sponsor packages'} color={'#e8e8e8'} icon={'badge'} align={'center'}
                                   noPadding/>
                        </div>
                    </div>
                </Container>
                <Container backgroundColor={'rgba(255,255,255,1.0)'}>
                    <div style={{padding: '0 8'}}>
                        <SponsorCard list={list} justify={'space-between'}/>
                    </div>
                </Container>
            </Fragment>
        )
    }
}

export default Packages