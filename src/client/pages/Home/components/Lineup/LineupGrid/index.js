import React from 'react'
import injectSheet from 'react-jss'

import AnimationHOC from '../../../../../components/AnimationHOC'

const styles = theme => ({
    root: {
        flexBasis: '33%',
        minHeight: 400,
        backgroundImage: props => `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: props => props.i <= 2 ? '0.5%' : 0,
        marginLeft: props => (props.i === 1 || props.i === 4) ? '0.5%' : 0,
        marginRight: props => (props.i === 1 || props.i === 4) ? '0.5%' : 0,
        position: 'relative',
        transition: 'all 600ms ease-in-out'
    },
    overlay: {
        width: '100%',
        height: 300,
        background: 'linear-gradient(rgba(0,0,0,0) 30%, rgba(0, 0, 0, 0.7) 70%)',
        fontSize: 20,
        fontFamily: theme.font.secondary,
        color: '#fff',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '0 20 30 20',
        letterSpacing: 1.5,
        fontWeight: 300
    },
    '@media (min-width: 501px) and (max-width: 942px)': {
        root: {
            flexBasis: '49%',
            marginBottom: props => props.i !== props.length - 1 ? '1%' : 0,
            marginLeft: props => (props.i + 1) % 2 === 0 ? '0.5%' : 0,
            marginRight: props => (props.i + 1) % 2 === 0 ? 0 : props.i !== props.length - 1 ? '0.5%' : 0,
            minHeight: 300
        }
    },
    '@media (min-width: 501px)': {
       root: {
           left: '0 !important',
           right: '0 !important',
           bottom: props => props.visible ? 0 : '-30px',
           opacity: props => props.visible ? 1 : 0
       }
    },
    '@media (max-width: 500px)': {
        root: {
            flexBasis: '100%',
            marginBottom: props => props.i === props.length - 1 ? 0 : '0.5%',
            marginLeft: 0 + ' !important',
            marginRight: 0 + ' !important',
            minHeight: 300
        }
    },
});

@AnimationHOC
@injectSheet(styles)
class LineupGrid extends React.Component {
    render() {
        let {classes, name, dir} = this.props;
        let angle = dir > 0 ? 'left' : 'right';
        return (
            <div className={classes.root} ref={title => this.props.this.element = title}  style={{
                [angle]: this.props.visible ? 0 : '-30px',
                bottom: this.props.visible ? 0 : '-30px',
                opacity: this.props.visible ? 1 : 0
            }}>
                <div className={classes.overlay}>{name}</div>
            </div>
        )
    };
}

export default LineupGrid