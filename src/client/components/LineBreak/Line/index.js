import React from 'react'
import injectSheet from 'react-jss'

import AnimationHOC from '../../AnimationHOC'

const styles = {
    line: {
        padding: '0.5 0',
        transition: 'width 600ms ease-in-out'
    }
};

@AnimationHOC
@injectSheet(styles)
class Line extends React.PureComponent {
    render() {
        const {classes, color, visible} = this.props;
        return <div ref={line => this.props.this.element = line} className={classes.line}
                    style={{backgroundColor: color, width: visible ? '40%' : 0}}/>
    };
}

export default Line