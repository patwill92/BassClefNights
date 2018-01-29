import React, {Component} from 'react'
import injectSheet from 'react-jss'

const animation = (name, property, from, to) => {
    return {
        [`@keyframes ${name}`]: {
            from: `${property}: ${from}`,
            to: `${property}: ${to}`
        }
    }
};

const fadeIn = animation('fadeIn', 'width', '0%', '50%');

const styles = theme => ({
    root: {
        display: 'inline-block',
        position: 'relative',
        '& input': {
            position: 'relative',
            zIndex: 2
        }
    },
    text: {
        backgroundColor: 'rgba(0,0,0,0)',
        border: 'none',
        color: '#e8e8e8',
        '&:focus': {
            border: 'none',
            outline: 'none',
            '& $overlay': {
                top: -40
            }
        },
        lineHeight: '20px',
        fontSize: 20
    },
    email: {
        extend: 'text'
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        zIndex: 1,
        textAlign: 'left',
        transition: 'top 0.5s, left 0.5s, font-size 0.5s'
    },
    overlayBlur: {
        extend: 'overlay',
        top: 0,
        left: 5,
        fontSize: 20
    },
    overlayFocus: {
        extend: 'overlay',
        top: -20,
        left: 0,
        fontSize: 15
    },
    borderOverlay: {
        paddingBottom: '1px',
        backgroundColor: 'rgba(255,255,255,0.5)',
        display: 'flex',
        justifyContent: 'center',
        '& div': {
            paddingBottom: '1px',
            backgroundColor: 'rgba(255,255,255,1.0)'
        }
    },
    borderOverlayLeft: {
        marginRight: 0,
        marginLeft: 'auto',
        width: '0%',
        transition: 'width 0.5s'
    },
    borderOverlayRight: {
        marginRight: 'auto',
        marginLeft: 0,
        width: '0%',
        transition: 'width 0.5s'
    },
    extendedRight: {
        extend: 'borderOverlayRight',
        width: '50%'
    },
    extendedLeft: {
        extend: 'borderOverlayLeft',
        width: '50%'
    },
    ...fadeIn
});

@injectSheet(styles)
export default class extends Component {
    state = {
        focus: false,
        overlayClass: 'overlayBlur',
        borderLeft: 'borderOverlayLeft',
        borderRight: 'borderOverlayRight',
        inputColor: 'rgba(255,255,255,0.5)'
    };

    onFocus = () => {
        this.setState({
            overlayClass: 'overlayFocus',
            borderLeft: 'extendedLeft',
            borderRight: 'extendedRight',
            inputColor: 'rgba(255,255,255,1.0)'
        })
    };

    onBlur = () => {
        if (this.props.value) {
            this.setState({
                borderLeft: 'borderOverlayLeft',
                borderRight: 'borderOverlayRight',
                inputColor: 'rgba(255,255,255,0.5)'
            })
        } else {
            this.setState({
                overlayClass: 'overlayBlur',
                borderLeft: 'borderOverlayLeft',
                borderRight: 'borderOverlayRight',
                inputColor: 'rgba(255,255,255,0.5)'
            })
        }
    };

    render() {
        const {classes, type, placeholder, name, onChange, value} = this.props;
        console.log(this.state);
        return (
            <div className={classes.root}>
                <input onFocus={this.onFocus}
                       onBlur={this.onBlur}
                       onChange={onChange}
                       value={value}
                       name={name}
                       type={type}
                       className={classes[type]}/>
                <div id='input' className={classes[this.state.overlayClass]}
                     style={{color: this.state.inputColor}}>{placeholder}</div>
                <div className={classes.borderOverlay}>
                    <div className={classes[this.state.borderLeft]}/>
                    <div className={classes[this.state.borderRight]}/>
                </div>
            </div>
        )
    }
}