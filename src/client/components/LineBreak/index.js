import React from 'react'
import injectSheet from 'react-jss'

import Icon from '../Icon/index'
import Line from './Line'

const styles = theme => ({
    lineContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lineCircle: {
        position: 'relative',
        minHeight: 30,
        minWidth: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

class LineBreak extends React.PureComponent {
    render() {
        const {classes, icon, color, rotateZ, rotateY, rotateX, style} = this.props;
        return (
            <div className={classes.lineContainer} style={style && {...style}}>
                <Line color={color} origin='right'/>
                <div className={classes.lineCircle}>
                    <Icon name={icon} color={color} style={{
                        bottom: 2,
                        right: rotateZ && -3,
                        transform: `rotate3d(${rotateX ? 1 : 0},${rotateY ? 1 : 0},${rotateZ ? 1 : 0}, ${rotateX || rotateY || rotateZ}deg)`
                    }}/>
                </div>
                <Line color={color} origin='left'/>
            </div>
        )
    };
}

export default injectSheet(styles)(LineBreak)