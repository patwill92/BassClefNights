import React, {Component} from 'react'
import {connect} from 'react-redux'
import injectSheet from 'react-jss'
import moment from 'moment'

import {startCountDown} from "../../../actions/index";
import Circle from './Circle/index'
import Button from '../../ClearButton/index'

const styles = theme => ({
    root: {
        position: 'relative'
    },
    circleContainer: {
        ...theme.flex.rowEven,
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: 1
    },
    overlay: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.0)',
        minWidth: '100%',
        minHeight: '100%',
        top: 0,
        left: 0
    },
    countdownTitle: {
        fontSize: 27,
        textTransform: 'uppercase',
        fontWeight: 400,
        fontFamily: "'Montserrat', sans-serif",
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        margin: 0,
        paddingTop: 0,
        paddingBottom: 20,
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
            fontSize: 22
        }
    }
});

class Countdown extends Component {
    state = {
        date: [2018, 1,15],
        iconColor: '#fff'
    };

    fillCircle = (num, total) => {
        let percentage = num / total;
        return Math.floor(percentage * 100)
    };

    startTimer = (duration) => {
        this.props.startCountDown({
            totalDays: Math.floor(duration.asDays()) * 24 * 60 * 60,
            totalHours: duration.hours() * 60 * 60,
            totalMinutes: duration.minutes() * 60,
            totalSeconds: duration.seconds()
        });
    };

    componentDidMount = () => {
        let eventDate = new Date(Date.UTC(2018, 10, 15));
        let currentTime = Date.now();
        let duration = moment.duration((eventDate - currentTime));
        this.startTimer(duration);
        let interval = 1000;
        // setInterval(() => {
        //     duration = moment.duration(duration - interval, 'milliseconds');
        //     if (duration.seconds() < 1) {
        //         this.props.startCountDown({totalSeconds: 60})
        //     } else if (duration.minutes() * 60 < 1) {
        //         this.startTimer(duration)
        //     } else if (duration.hours() * 60 * 60 < 1) {
        //         this.startTimer(duration)
        //     } else if (Math.floor(duration.asDays()) * 24 * 60 * 60 < 1) {
        //         this.startTimer(duration)
        //     }
        //     this.props.startCountDown({
        //         days: Math.floor(duration.asDays()),
        //         hours: duration.hours(),
        //         minutes: duration.minutes(),
        //         seconds: duration.seconds()
        //     });
        // }, interval);
    };

    twoDigit = (num) => {
        return ("0" + num).slice(-2)
    };

    render() {
        let {twoDigit, fillCircle} = this;
        let {classes, countdown} = this.props;
        return (
            <div className={classes.root}>
                <div style={{textAlign: 'center'}}>
                    <h1 className={classes.countdownTitle}>
                        november <span style={{margin: '0 7'}}>15</span> 2018
                    </h1>
                </div>
                <div style={{textAlign: 'center'}}>
                    <div className={classes.countdownTitle} style={{padding: 0}}>
                        <Button color={'#fff'} hover={'#161616'} style={{fontSize: 13}} text={'tickets'} icon={'ticketAlt'}
                                iconColor={this.state.iconColor}/>
                    </div>
                </div>
                <div className={classes.overlay}/>
                <div className={classes.circleContainer}>
                    <Circle unit={'Days'}
                            text={countdown.days < 10 ? twoDigit(countdown.days) : countdown.days}
                            percent={fillCircle(countdown.totalDays, 60 * 60 * 24 * 365)}
                            timer={countdown.totalDays}/>
                    <Circle unit={'hours'}
                            text={countdown.hours < 10 ? twoDigit(countdown.hours) : countdown.hours}
                            percent={fillCircle(countdown.totalHours, 60 * 60 * 24)}
                            timer={countdown.totalHours}/>
                    <Circle unit={'minutes'}
                            text={twoDigit(countdown.minutes)}
                            percent={fillCircle(countdown.totalMinutes, 60 * 60)}
                            timer={countdown.totalMinutes}/>
                    <Circle unit={'seconds'}
                            text={twoDigit(countdown.seconds)}
                            percent={fillCircle(countdown.totalSeconds, 60)}
                            timer={countdown.totalSeconds}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ui}) => {
    return {
        countdown: ui.countdown
    }
};

export default connect(mapStateToProps, {startCountDown})(injectSheet(styles)(Countdown))