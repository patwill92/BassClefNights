import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import injectSheet from 'react-jss'

import {startCountDown} from "../../actions/index";

const styles = theme => ({
    root: {
        position: 'relative'
    },
    circleContainer: {
        ...theme.flex.rowCenter,
        position: 'relative',
        zIndex: 1,
        marginBottom: 20
    },
    units: {
      color: props => props.color
    },
    countdownTitle: {
        fontSize: 24,
        textTransform: 'uppercase',
        fontWeight: 400,
        fontFamily: "'Montserrat', sans-serif",
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        margin: 0,
        paddingTop: 0,
        paddingBottom: 10,
        letterSpacing: '1px'
    },
    image: {
        maxWidth: 100,
        height: 'auto',
        position: 'relative',
        zIndex: 1,
        marginTop: 10
    },
    '@media(max-width: 500px)': {
        countdownTitle: {
            fontSize: 24
        }
    }
});

const mapStateToProps = ({ui}) => {
    return {
        countdown: ui.countdown
    }
};

@connect(mapStateToProps, {startCountDown})
@injectSheet(styles)
class Countdown extends Component {
    twoDigit = (num) => {
        return ("0" + num).slice(-2)
    };

    render() {
        let {twoDigit} = this;
        let {classes, countdown, noTitle} = this.props;
        let length = Object.entries(countdown).length;
        return (
            <div className={classes.root}>
                {!noTitle &&
                <div style={{textAlign: 'center'}}>
                    <h1 className={classes.countdownTitle}>
                        november <span style={{margin: '0 7'}}>15</span> 2018
                    </h1>
                </div>}
                <div className={classes.circleContainer}>
                    {Object.entries(countdown).map((timer, i) => {
                        let unit = timer[0];
                        let num = timer[1];
                        return (
                            <Fragment key={unit}>
                                <div className={classes.units}>
                                    <div
                                        style={{minWidth: 39}}>{num < 10 ? twoDigit(num) : num}</div>
                                    <div style={{fontSize: 10, marginTop: 5, textTransform: 'uppercase'}}>{unit}</div>
                                </div>
                                {i < length - 1 &&
                                <div style={{flex: 0, margin: '0 10 0 10', color: this.props.color}}>:</div>}
                            </Fragment>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Countdown