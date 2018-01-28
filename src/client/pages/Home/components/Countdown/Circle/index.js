import React, {Component} from 'react'
import injectSheet, {jss} from 'react-jss'

const sheet = theme => ({
    circle: {
        maxWidth: 200,
        minWidth: 200,
        margin: '20 10',
        position: 'relative',
        zIndex: 3
    },
    circleOverlay: {
        position: 'absolute',
        maxWidth: 176.8,
        minWidth: 176.8,
        border: '1px solid rgba(255,255,255,0.4)',
        height: 176.8,
        top: `${(200 - 176.8) / 2}`,
        left: `${(200 - 176.8) / 2}`,
        fontSize: 30,
        color: '#ffffff',
        ...theme.flex.colCenter,
        alignItems: 'center',
        borderRadius: '50%',
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 300
    },
    circlePath: {
        stroke: '#ffffff',
        fill: 'none',
        strokeWidth: 0.5,
        strokeLinecap: 'round',
        animation: props => `progress${props.unit} ${props.timer}s linear infinite`
    },
    circlePath2: {
        stroke: '#ffffff',
        fill: 'none',
        strokeWidth: 0.5,
        strokeLinecap: 'round',
        animation: props => `progress2${props.unit} 60s linear infinite`
    },
    unit: {
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: 300,
        fontFamily: "'Montserrat', sans-serif"
    },
    '@media(max-width: 500px)': {
        circle: {
            maxWidth: 110,
            minWidth: 110,
            margin: '5 10'
        },
        circleOverlay: {
            maxWidth: 97.25,
            minWidth: 97.25,
            height: 97.25,
            top: `${(110 - 97.25) / 2}`,
            left: `${(110 - 97.25) / 2}`,
            fontSize: 20,
        },
        unit: {
            fontSize: 12
        }
    }
});


class Countdown extends Component {
    componentDidMount = () => {
        const sheet = jss.createStyleSheet({
            [`@keyframes progress${this.props.unit}`]: {
                from: {
                    strokeDasharray: `${this.props.percent} 100`
                },
                to: {
                    strokeDasharray: `0 100`,
                }
            },
            [`@keyframes progress2${this.props.unit}`]: {
                '0%': {
                    strokeDasharray: `100 100`
                },
                '100%': {
                    strokeDasharray: `0 100`
                }
            }
        }).attach()
    };

    render() {
        let {props} = this;
        let {classes, text} = this.props;
        let path = "M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831";
        return (
            <div className={classes.circle}>
                {props.percent === 100 ?
                    <svg viewBox="0 0 36 36">
                        <path className={classes.circlePath2}
                              strokeWidth="1"
                              d={path}
                              fill="none"
                              stroke="#444"/>
                    </svg>
                    :
                    <svg viewBox="0 0 36 36">
                        <path className={classes.circlePath}
                              strokeWidth="1"
                              strokeDasharray={`${this.props.percent}, 100`}
                              d={path}
                              fill="none"
                              stroke="#444"/>
                    </svg>
                }
                <div className={classes.circleOverlay}>
                    <span>{text}</span>
                    <span className={classes.unit}>{this.props.unit}</span>
                </div>
            </div>
        )
    }
};

export default injectSheet(sheet)(Countdown)