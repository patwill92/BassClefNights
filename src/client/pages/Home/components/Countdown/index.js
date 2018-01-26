import React, {Component} from 'react'
import {connect} from 'react-redux'
import injectSheet from 'react-jss'
import moment from 'moment'

import {startCountDown} from "../../../../actions";
import Circle from './Circle'

const styles = theme => ({
    circleContainer: {
        ...theme.flex.rowEven,
        flexWrap: 'wrap',
        '& div': {
            flex: 1
        },
        backgroundColor: 'rgba(0,0,0,0.9)',
        padding: '30 0',
        boxShadow: theme.shadows[2],
        position: 'relative',
        zIndex: 2
    }
})

const mapStateToProps = ({ui}) => {
    return {
        countdown: ui.countdown
    }
};

@connect(mapStateToProps, {startCountDown})
@injectSheet(styles)
export default class extends Component {
    state = {
        date: "2018-11-15",
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
        let eventDate = moment(this.state.date);
        let currentTime = moment();
        let duration = moment.duration((eventDate - currentTime));
        this.startTimer(duration);
        let interval = 1000;
        setInterval(() => {
            duration = moment.duration(duration - interval, 'milliseconds');
            if (duration.seconds() < 1) {
                this.props.startCountDown({totalSeconds: 60})
            } else if (duration.minutes() * 60 < 1) {
                this.startTimer(duration)
            } else if (duration.hours() * 60 * 60 < 1) {
                this.startTimer(duration)
            } else if (Math.floor(duration.asDays()) * 24 * 60 * 60 < 1) {
                this.startTimer(duration)
            }
            this.props.startCountDown({
                days: Math.floor(duration.asDays()),
                hours: duration.hours(),
                minutes: duration.minutes(),
                seconds: duration.seconds()
            });
        }, interval);
    };

    twoDigit = (num) => {
        return ("0" + num).slice(-2)
    };

    render() {
        let {twoDigit, fillCircle} = this;
        let {classes, countdown} = this.props;
        return countdown ? (
            <div className={classes.circleContainer}>
                <Circle unit={'Days'}
                        text={countdown.days < 10 ? twoDigit(countdown.days) : countdown.days}
                        percent={fillCircle(countdown.totalDays, 60 * 60 * 24 * 365)}
                        timer={countdown.totalDays}/>
                <Circle unit={'hours'}
                        text={twoDigit(countdown.hours)}
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
        ) : <div/>
    }
}