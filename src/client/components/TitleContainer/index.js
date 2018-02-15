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
        transition: 'bottom 600ms ease-in-out, opacity 600ms ease-in-out'
    },
    title: {
        fontFamily: theme.font.primary,
        textTransform: 'uppercase',
        letterSpacing: 3,
        fontSize: '2.5em',
        fontWeight: 300,
        margin: 0,
        display: 'inline-block',
    },
    titleContainer: {
        '& div': {
            fontSize: props => props.fontSize ? props.fontSize : '14px'
        },
        textAlign: 'center',
        display: 'inline-block',
        marginBottom: 20
    },
    '@media (max-width: 500px)': {
        root: {
            paddingTop: 40,
            paddingBottom: 20
        },
        title: {
            fontSize: '1.5rem !important'
        }
    }
});

@AnimationHoc
@injectSheet(styles)
class TitleContainer extends React.PureComponent {
    render() {
        const {classes, text, color, icon, y, x, z, noPadding, noLine, style} = this.props;
        return (
            <Fragment>
                <div ref={title => this.props.this.element = title} className={classes.root} style={{
                    bottom: this.props.visible ? 0 : '-30px',
                    opacity: this.props.visible ? 1 : 0,
                    padding: noPadding && 0
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
    noLine: PropTypes.bool,
    style: PropTypes.object,
    align: PropTypes.string
};

export default TitleContainer