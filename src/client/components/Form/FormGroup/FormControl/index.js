import React, {Fragment} from 'react'
import injectSheet from 'react-jss'

import Icon from '../../../Icon'

const absolute = {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    content: '""',
    pointerEvents: 'none'
};

const before = {
    ...absolute,
    transition: 'background-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
};

const after = {
    ...absolute,
    height: 2,
    transform: 'scaleX(0)',
    transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    backgroundColor: '#222',
};

const styles = theme => ({
    inputWrapper: {
        marginTop: 16,
        color: '#333',
        display: 'inline-flex',
        position: 'relative',
        fontSize: '1rem',
        '&:before': {
            ...before,
            height: 1,
            backgroundColor: '#333'
        },
        '&:after': {
            ...after
        }
    },
    textAreaWrapper: {
        padding: '8px 0 10px'
    },
    textArea: {
        resize: 'none',
        padding: 0 + ' !important',
        flexDirection: 'column',
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        '&:focus': {
            outline: 0
        }
    },
    inputWrapper2: {
        marginTop: 16,
        color: '#333',
        display: 'inline-flex',
        position: 'relative',
        fontSize: '1rem',
        '&:before': {
            ...before
        },
        '&:after': {
            ...after,
            transform: 'scale(1)'
        }
    },
    inputText: {
        color: '#222',
        width: '100%',
        border: 0,
        margin: 0,
        padding: '8px 0 10px',
        display: 'block',
        minWidth: 0,
        boxSizing: 'content-box',
        background: 'none',
        verticalAlign: 'middle',
        fontSize: '1rem',
        '&:focus': {
            outline: 0
        }
    },
    select: {
        width: 'calc(100% - 32px) !important',
        cursor: 'pointer',
        minWidth: '16px !important',
        '-moz-appearance': 'none',
        '-webkit-appearance': 'none',
        '-webkit-user-select': 'none',
        borderRadius: 0,
        paddingRight: '32px !important',
        whiteSpace: 'pre',
        alignItems: 'center',
        '-webkit-rtl-ordering': 'logical',
        '&:focus': {
            background: 'rgba(0, 0, 0, 0.05)',
            border: 'none !important',
            outline: 'none !important',
        },
        '&:-moz-focusring': {
            color: 'transparent',
            textShadow: '0 0 0 #000'
        },
        '-webkit-tap-highlight-color': 'transparent'
    }
});

class FormControl extends React.Component {
    componentDidMount =() => {
        if(this.props.name === 'name' || this.props.name === 'email') {
            let name = document.getElementById(this.props.name);
            name.addEventListener('change', () => this.props.onAutofill(this.props.name, name.value));
        }
    };
    render() {
        let {props} = this;
        let {classes, type, onFocus, onChange, onBlur, name, value, focus} = props;
        let myProps = {
            type,
            onFocus,
            onChange,
            onBlur,
            name,
            value
        };
        let regular = type !== 'textarea' && type !== 'select';
        let textArea = type === 'textarea';
        let select = type === 'select';
        let textAreaClass = focus ? classes.inputWrapper2 + ' ' + classes.textAreaWrapper : classes.inputWrapper
            + ' ' + classes.textAreaWrapper;
        let textClass = focus ? classes.inputWrapper2 : classes.inputWrapper;
        return (
            <div className={(regular || select) ? textClass : textAreaClass}>
                {regular && <input type="text"
                                   id={name}
                                   {...myProps}
                                   className={classes.inputText}/>}
                {textArea && <textarea rows={4}
                                       {...myProps}
                                       className={classes.inputText + ' ' + classes.textArea}/>}
                {select && <Fragment>
                    <select {...myProps}
                            className={classes.inputText + ' ' + classes.select}>
                        <option value=""/>
                        <option value={1}>Become a Founder</option>
                        <option value={2}>Become a Sponsor</option>
                        <option value={3}>Tickets</option>
                        <option value={4}>General</option>
                    </select>
                    <Icon name='caretDownSolid'
                          color={props.focus ? '#222' : '#333'}
                          style={{
                              position: 'absolute',
                              top: 'calc(50% - 12px)',
                              right: 0,
                              cursor: 'pointer',
                              pointerEvents: 'none'
                          }}/>
                </Fragment>
                }
            </div>
        )
    };
}

export default injectSheet(styles)(FormControl)