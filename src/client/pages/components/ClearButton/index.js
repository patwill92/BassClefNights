import React from 'react'
import injectSheet from 'react-jss'

import Icon from '../Icon'

const styles = theme => ({
    heroBtn: {
        backgroundColor: 'rgba(0,0,0,0)',
        border: '1px solid #fff',
        color: '#fff',
        fontFamily: theme.font.secondary,
        letterSpacing: 1,
        fontWeight: 300,
        fontSize: '1.0rem',
        textTransform: 'uppercase',
        padding: '10px',
        transition: 'background-color 500ms, color 500ms',
        '&:hover': {
            cursor: 'pointer',
            color: '#000',
            backgroundColor: '#fff'
        }
    }
});


class ClearButton extends React.Component {
    state = {
        iconColor: this.props.iconColor
    };

    render() {
        const {classes, text, style, icon, submit} = this.props;
        return (
            <button onMouseOver={() => this.setState({iconColor: '#000'})}
                    onMouseOut={() => this.setState({iconColor: this.props.iconColor})}
                    type={submit ? 'submit' : 'button'}
                    className={classes.heroBtn} style={style && {...style}}>
                {icon && <Icon name={icon} color={this.state.iconColor} style={{marginRight: 10, transition: 'fill 0.5s'}}/>}
                {text}
            </button>
        )
    }
}

export default injectSheet(styles)(ClearButton)