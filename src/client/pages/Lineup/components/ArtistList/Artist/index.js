import React, {Component} from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'

import Container from '../../../../../components/Container/index'
import Title from '../../../../../components/TitleContainer/index'
import Button from '../../../../../components/ClearButton/index'
import {openModal} from "../../../../../actions/index";

const styles = theme => ({
    root: {
        textAlign: 'center',
        padding: '90 0'
    },
    contentContainer: {
        ...theme.flex.rowBetween

    },
    image: {
        order: props => props.order,
        minWidth: 295
    },
    imageMobile: {
        order: props => props.order,
        minWidth: 295,
        display: 'none'
    },
    title: {
        flexBasis: '50%'
    },
    artistInfo: {
        color: 'rgba(22,22,22,0.9)',
        fontWeight: 300,
        fontSize: 15,
        lineHeight: 2,
        marginRight: 0,
        marginLeft: 'auto',
        textAlign: 'center'
    },
    '@media (max-width: 1000px)': {
        title: {
            '& h1': {
                fontSize: '2.0em'
            }
        },
        root: {
            padding: '50 0'
        }
    },
    '@media (min-width: 768px)': {
        contentContainer: {
            flexWrap: 'wrap'
        },
        image: {
            flexBasis: '40%'
        }
    },
    '@media (max-width: 767px)': {
        contentContainer: {
            ...theme.flex.colCenter,
            alignItems: 'center'
        },
        image: {
            display: 'none'
        },
        imageMobile: {
            maxWidth: 375,
            display: 'block',
            margin: '0 auto 30 auto'
        },
        root: {
            padding: '40 0'
        },
    },
    '@media (max-width: 500px)': {
        root: {
            padding: '30 0'
        }
    }
});

@connect(null, {openModal})
@injectSheet(styles)
class Artist extends Component {
    render() {
        const {classes, name, image, info} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.contentContainer}>
                    <div className={classes.image}>
                        <img src={`images/${image}`} alt="" style={{width: '100%', height: 'auto'}}/>
                    </div>
                    <div className={classes.title}>
                        <div style={{padding: '0 15 0 15'}}>
                            <Title text={name} color={'#161616'} icon={'music'}
                                   align={'center'}
                                   noPadding/>
                        </div>
                        <div className={classes.imageMobile}>
                            <img src={`images/${image}`} alt="" style={{width: '100%', height: 'auto'}}/>
                        </div>
                        <div className={classes.artistInfo} style={{padding: '0 15 0 15'}}>{info}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Artist