import React, {Fragment} from 'react'
import injectSheet from 'react-jss'
import PropTypes from "prop-types";

import LineBreak from '../LineBreak/index'
import AnimationHoc from '../AnimationHOC'

const styles = theme => ({
    root: {
        '& div': {
            fontSize: props => props.fontSize ? props.fontSize : '14px'
        },
        textAlign: props => props.align ? props.align : 'center',
        display: 'inline-block',
        marginBottom: 20,
        paddingBottom: 50,
        paddingTop: 20,
        position: 'relative',
        transition: 'transform 600ms ease-in-out, opacity 600ms ease-in-out'
    },
    title: {
        fontFamily: theme.font.primary,
        textTransform: 'uppercase',
        letterSpacing: 3,
        fontSize: props => props.big ? '4.0em' : '2.5em',
        fontWeight: 300,
        margin: 0,
        display: 'inline-block',
    },
    '@media (max-width: 800px)': {
        title: {
            fontSize: props => props.big && '3.5rem'
        }
    },
    '@media (max-width: 660px)': {
        title: {
            fontSize: props => props.big && '2.5rem'
        }
    },
    '@media (max-width: 550px)': {
        root: {
            paddingTop: 40,
            paddingBottom: 20
        },
        title: {
            fontSize: props => props.big ? '1.9rem' : '1.5rem !important',
            fontWeight: props => props.big ? 400 : 300,
        }
    }
});

@AnimationHoc
@injectSheet(styles)
class TitleContainer extends React.PureComponent {
    render() {
        const {classes, text, color, icon, y, x, z, noPadding, noLine, style, margin} = this.props;
        return (
            <Fragment>
                <div ref={title => this.props.this.element = title} className={classes.root} style={{
                    transform: this.props.visible ? 'translateY(0%)' : 'translateY(50%)',
                    opacity: this.props.visible ? 1 : 0,
                    padding: noPadding && 0,
                    margin
                }}>
                    <h1 className={classes.title} style={style ? {color, ...style} : {color}}>{text}</h1>
                    {!noLine &&
                    <LineBreak icon={icon} color={color} rotateY={y && y} rotateX={x && x} rotateZ={z && z}/>}
                </div>
            </Fragment>
        )
    };
}

TitleContainer.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    icon: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number,
    noPadding: PropTypes.bool,
    margin: PropTypes.string,
    noLine: PropTypes.bool,
    style: PropTypes.object,
    align: PropTypes.string
};

export default TitleContainer