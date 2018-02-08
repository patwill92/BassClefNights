import React from 'react'
import injectSheet from 'react-jss'

import Icon from '../Icon'

const styles = theme => ({
    heroBtn: {
        backgroundColor: 'rgba(0,0,0,0)',
        border: props => `1px solid ${props.color}`,
        color: props => props.color,
        fontFamily: theme.font.secondary,
        letterSpacing: 1,
        fontWeight: 300,
        fontSize: '1.0rem',
        textTransform: 'uppercase',
        padding: '10px',
        transition: 'background-color 500ms, color 500ms',
        '&:hover': {
            cursor: 'pointer',
            color: props => props.hover,
            backgroundColor: props => props.color
        },
        '&:active': {
            backgroundColor: 'rgba(255, 255, 255, 1.0) !important',
            border: props => `1px solid ${props.color}`,
            color: props => props.color,
        }
    }
});


class ClearButton extends React.Component {
    state = {
        iconColor: this.props.color
    };

    render() {
        const {classes, text, style, icon, submit, onClick} = this.props;
        return (
            <button onMouseOver={() => this.setState({iconColor: this.props.hover})}
                    onFocus={() => this.setState({iconColor: this.props.color})}
                    onClick={onClick ? onClick : null}
                    onMouseOut={() => this.setState({iconColor: this.props.color})}
                    type={submit ? 'submit' : 'button'}
                    className={classes.heroBtn} style={style && {...style}}>
                {icon && <Icon name={icon} color={this.state.iconColor} style={{marginRight: 10}}/>}
                {text}
            </button>
        )
    }
}

export default injectSheet(styles)(ClearButton)