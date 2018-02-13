import React, {Component} from 'react'
import injectSheet from 'react-jss'

import Text from './Text'

let inputStyle = {
    backgroundColor: 'rgba(0,0,0,0) !important',
    border: 'none !important',
    color: '#161616 !important',
    '&:focus': {
        border: 'none',
        outline: 'none',
        '& $overlay': {
            top: -40
        }
    },
    lineHeight: '20px',
    fontSize: 15,
    fontFamily: "'Montserrat', sans-serif !important"

};

const styles = theme => ({
    inputContainer: {
        display: 'inline-flex',
        margin: '0 0 20 0',
        border: 0,
        padding: 0,
        minWidth: 0,
        flexDirection: 'column',
        position: 'relative'
    },
    label: {
        transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 0,
        fontSize: '1rem',
        lineHeight: 1
    }
});

class Input extends Component {
    state = {
        focus: false
    };

    onFocus = () => {
        this.setState({
            focus: true
        })
    };

    onBlur = () => {
        this.setState({
            focus: false
        })
    };

    labelFocus = (focus, value) => {
        if ((focus && !!value) || (focus && !value)) {
            return {color: '#222', fontSize: '0.8rem'}
        }
        if (!focus && !!value) {
            return {color: '#333', fontSize: '0.8rem'}
        }
        return {
            transform: 'translate(0,24px) scale(1)',
            transformOrigin: 'top left',
            color: '#333',
        }
    };

    render() {
        const {focus} = this.state;
        const {classes, type, name, onChange, value} = this.props;

        return (
            <div className={classes.inputContainer}>
                <label className={classes.label}
                       style={this.labelFocus(focus, value)}
                       htmlFor={name}>{this.props.placeholder}</label>
                <Text type={type}
                      focus={this.state.focus}
                      onFocus={this.onFocus}
                      name={name}
                      value={value}
                      onChange={onChange}
                      onBlur={this.onBlur}/>
            </div>
        )
    }
}

export default injectSheet(styles)(Input)