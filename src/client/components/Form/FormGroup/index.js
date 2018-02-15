import React, {Component} from 'react'
import injectSheet from 'react-jss'

import FormControl from './FormControl'

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
        lineHeight: 1
    }
});

class FormGroup extends Component {
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
            return {
                color: '#222', transform: 'translate(0,0) scale(0.8)',
                transformOrigin: 'top left'
            }
        }
        if (!focus && !!value) {
            return {
                color: '#333', transform: 'translate(0,0) scale(0.8)',
                transformOrigin: 'top left'
            }
        }
        return {
            transform: 'translate(0,24px) scale(1)',
            transformOrigin: 'top left',
            color: '#333',
            fontSize: '1.0rem'
        }
    };

    onChange = (e) => {
        this.props.onChange(e);
        this.labelFocus(this.state.focus, this.props.value)
    };

    render() {
        const {focus} = this.state;
        const {classes, type, name, value, onAutofill} = this.props;
        return (
            <div className={classes.inputContainer}>
                <label className={classes.label}
                       style={this.labelFocus(focus, value)}
                       htmlFor={name}>{this.props.placeholder}</label>
                <FormControl type={type}
                             focus={this.state.focus}
                             onFocus={this.onFocus}
                             name={name}
                             value={value}
                             onAutofill={onAutofill}
                             onChange={this.onChange}
                             onBlur={this.onBlur}/>
            </div>
        )
    }
}

export default injectSheet(styles)(FormGroup)