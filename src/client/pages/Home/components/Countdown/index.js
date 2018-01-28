import React, {Component} from 'react'
import {connect} from 'react-redux'
import injectSheet from 'react-jss'
import moment from 'moment'

import {startCountDown} from "../../../../actions";
import Circle from './Circle'
import Button from '../../../components/ClearButton'

const styles = theme => ({
    root: {
        position: 'relative',
        backgroundImage: 'url("images/countdownDesktop.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    circleContainer: {
        ...theme.flex.rowEven,
        flexWrap: 'wrap',
        paddingBottom: 15,
        position: 'relative',
        zIndex: 1
    },
    overlay: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.4)',
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
        zIndex: 3,
        margin: 0,
        padding: '20 0',
        letterSpacing: '1px'
    },
    image: {
        maxWidth: 100,
        height: 'auto',
        position: 'relative',
        zIndex: 3,
        marginTop: 10
    },
    '@media(max-width: 500px)': {
        root: {
            backgroundImage: 'url("images/countdown.jpeg")',
        },
        countdownTitle: {
            fontSize: 22,
            padding: '20 0'
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
export default class extends Component {
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
        return (
            <div className={classes.root}>
                <div style={{textAlign: 'center'}}>
                    <h1 className={classes.countdownTitle}>
                        november <span style={{margin: '0 7'}}>15</span> 2018
                    </h1>
                </div>
                <div style={{textAlign: 'center'}}>
                    <div className={classes.countdownTitle} style={{padding: 0}}>
                        <div style={{display: 'inline-block'}}
                             onMouseOut={() => this.setState({iconColor: '#fff'})}
                             onMouseOver={() => this.setState({iconColor: '#000'})}>
                            <Button style={{fontSize: 13}} text={'tickets'} icon={'ticketAlt'}
                                    iconColor={this.state.iconColor}/>
                        </div>
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