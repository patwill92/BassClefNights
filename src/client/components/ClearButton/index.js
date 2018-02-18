import React from 'react'
import {Link} from 'react-router-dom'
import injectSheet from 'react-jss'

import Icon from '../Icon'

const styles = theme => ({
    heroBtn: {
        backgroundColor: 'rgba(0,0,0,0)',
        border: props => `1px solid ${props.color}`,
        color: props => props.color,
        fontFamily: theme.font.secondary,
        letterSpacing: 1,
        fontWeight: props => props.bold ? 400 :300,
        fontSize: '1.0rem',
        textTransform: 'uppercase',
        textDecoration: 'none',
        padding: '10px',
        transition: 'background-color 500ms, color 500ms',
        cursor: 'pointer',
        '&:active': {
            cursor: 'pointer',
            color: props => props.hover,
            backgroundColor: props => props.color,
            outline: 0
        },
        '&:focus': {
            outline: 0
        }
    },
    '@media (min-width: 769px)': {
        heroBtn: {
            '&:hover': {
                cursor: 'pointer',
                color: props => {
                    return props.hover
                },
                backgroundColor: props => props.color,
                '& path': {
                    fill: '#fff !important'
                }
            }
        }
    }
});


class ClearButton extends React.PureComponent {
    state = {
        iconColor: this.props.color
    };

    render() {
        const {classes, text, style, icon, submit, onClick, link} = this.props;
        return !link ? (
            <button onClick={onClick ? onClick : null}
                    type={submit ? 'submit' : 'button'}
                    className={classes.heroBtn} style={style && {...style}}>
                {icon && <Icon name={icon} color={this.state.iconColor} style={{marginRight: 10}}/>}
                {text}
            </button>
        ) : (
            <Link onFocus={() => this.setState({iconColor: this.props.hover})}
                  to={link}
                  onClick={onClick ? onClick : null}
                  className={classes.heroBtn} style={style && {...style}}>
                {icon && <Icon name={icon} color={this.state.iconColor} style={{marginRight: 10}}/>}
                {text}
            </Link>
        )
    }
}

export default injectSheet(styles)(ClearButton)