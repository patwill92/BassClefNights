import React, {Component} from 'react'
import injectSheet from 'react-jss'

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
    root: {
        display: 'inline-block',
        position: 'relative',
        width: '100%',
        maxWidth: 665,
        '& input, & textarea, & #select': {
            position: 'relative',
            zIndex: 2,
            width: '100%',
            height: props => props.type !== 'textarea' ? 30 : null,
            cursor: props => props.type === 'select' ? 'pointer' : null
        },
        '& div': {
            fontFamily: theme.font.secondary
        }
    },
    text: {
        ...inputStyle,
        caretColor: 'rgba(22, 22, 22, 1.0) !important'
    },
    textarea: {
        ...inputStyle,
        caretColor: 'rgba(22, 22, 22, 1.0) !important'
    },
    select: {
        ...inputStyle,
        caretColor: 'rgba(22, 22, 22, 1.0) !important'
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        zIndex: 1,
        textAlign: 'left',
        transition: 'top 0.5s, left 0.5s, font-size 0.5s'
    },
    overlayBlur: {
        position: 'absolute',
        width: '100%',
        zIndex: 1,
        textAlign: 'left',
        transition: 'top 0.5s, left 0.5s, font-size 0.5s',
        top: 0,
        left: 0,
        fontSize: 15
    },
    overlayFocus: {
        position: 'absolute',
        width: '100%',
        zIndex: 1,
        textAlign: 'left',
        transition: 'top 0.5s, left 0.5s, font-size 0.5s',
        top: -25,
        fontSize: 13
    },
    borderOverlay: {
        paddingBottom: '1px',
        backgroundColor: 'rgba(22,22,22,0.5)',
        display: 'flex',
        justifyContent: 'center',
        '& div': {
            paddingBottom: '1px',
            backgroundColor: 'rgba(22,22,22,1.0)'
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
        marginRight: 'auto',
        marginLeft: 0,
        transition: 'width 0.5s',
        width: '50%'
    },
    extendedLeft: {
        marginRight: 0,
        marginLeft: 'auto',
        transition: 'width 0.5s',
        width: '50%'
    }
});

class Input extends Component {
    state = {
        focus: false,
        overlayClass: 'overlayBlur',
        borderLeft: 'borderOverlayLeft',
        borderRight: 'borderOverlayRight',
        inputColor: 'rgba(22,22,22,0.5)'
    };

    onFocus = () => {
        this.setState({
            overlayClass: 'overlayFocus',
            borderLeft: 'extendedLeft',
            borderRight: 'extendedRight',
            inputColor: 'rgba(22,22,22,1.0)'
        })
    };

    onBlur = () => {
        if (this.props.value) {
            this.setState({
                borderLeft: 'borderOverlayLeft',
                borderRight: 'borderOverlayRight',
                inputColor: 'rgba(22,22,22,0.5)'
            })
        } else {
            this.setState({
                overlayClass: 'overlayBlur',
                borderLeft: 'borderOverlayLeft',
                borderRight: 'borderOverlayRight',
                inputColor: 'rgba(22,22,22,0.5)'
            })
        }
    };

    focusTextArea = () => this.myText.focus();

    render() {
        const {classes, type, placeholder, name, onChange, value} = this.props;
        let regular = type !== 'textarea' && type !== 'select';
        let textArea = type === 'textarea';
        let select = type === 'select';
        return (
            <div>
                <div className={classes.root}>
                    {regular && <input onFocus={this.onFocus}
                                       autoComplete={'nope'}
                                       onBlur={this.onBlur}
                                       style={{caretColor: '#161616'}}
                                       onChange={onChange}
                                       value={value}
                                       name={name}
                                       type={type}
                                       className={classes[type]}/>}
                    {textArea && <textarea onFocus={this.onFocus}
                                           onBlur={this.onBlur}
                                           style={{caretColor: '#161616'}}
                                           onChange={onChange}
                                           ref={input => this.myText = input}
                                           value={value}
                                           rows={4}
                                           name={name}
                                           className={classes[type]}/>}
                    {select &&
                    <select onFocus={this.onFocus}
                            style={{left: -7}}
                            id='select'
                            onBlur={this.onBlur}
                            onChange={onChange}
                            value={value}
                            name={name}
                            className={classes[type]}>
                        <option value=""/>
                        <option value="founder">Become a Founder</option>
                        <option value="sponsor">Become a Sponsor</option>
                        <option value="ticket">Tickets</option>
                        <option value="general">General</option>
                    </select>
                    }
                    <div id='input'
                         className={classes[this.state.overlayClass]}
                         onClick={textArea ? this.focusTextArea : null}
                         style={{color: this.state.inputColor}}>{placeholder}</div>
                    <div className={classes.borderOverlay} style={{marginBottom: 45}}>
                        <div className={classes[this.state.borderLeft]}/>
                        <div className={classes[this.state.borderRight]}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default injectSheet(styles)(Input)