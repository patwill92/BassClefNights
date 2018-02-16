import React from 'react'
import injectSheet from 'react-jss'

import AnimationHOC from '../../AnimationHOC'

const styles = {
    line: {
        padding: '0.5 0',
        width: '40%',
        transformOrigin: props => `${props.origin} center`,
        transition: 'transform 600ms ease-in-out',
    }
};

@AnimationHOC
@injectSheet(styles)
class Line extends React.PureComponent {
    render() {
        const {classes, color, visible} = this.props;
        return <div ref={line => this.props.this.element = line} className={classes.line}
                    style={{backgroundColor: color, transform: visible ? 'scale(1)' : 'scale(0)'}}/>
    };
}

export default Line