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
        willChange: 'transform, opacity',
        position: 'relative',
        transition: 'transform 600ms ease-in-out, opacity 600ms ease-in-out'
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
           willChange: 'transform, opacity',
           transform: props => props.visible ? 'translateY(0%)' : 'translateY(20%)',
           opacity: props => props.visible ? 1 : 0
       }
    },
    '@media (max-width: 500px)': {
        root: {
            flexBasis: '100%',
            marginBottom: props => props.i === props.length - 1 ? 0 : '0.5%',
            marginLeft: 0 + ' !important',
            marginRight: 0 + ' !important',
            minHeight: 300,
            transform: props => {
                let angle = props.dir > 0 ? 'translateY(5%) translateX(5%)' : 'translateY(5%) translateX(-5%)';
                return props.visible ? 'translateY(0%) translateX(0%)' : angle
            }
        }
    },
});

@AnimationHOC
@injectSheet(styles)
class LineupGrid extends React.Component {
    render() {
        let {classes, name} = this.props;
        return (
            <div className={classes.root} ref={title => this.props.this.element = title}  style={{
                opacity: this.props.visible ? 1 : 0
            }}>
                <div className={classes.overlay}>{name}</div>
            </div>
        )
    };
}

export default LineupGrid