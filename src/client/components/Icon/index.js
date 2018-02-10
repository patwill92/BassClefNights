import React from 'react';
import PropTypes from 'prop-types';

const style = {
    height: '1em',
    width: '1em',
    position: 'absolute',
    bottom: '-0.125em',
    pointerEvents: 'none'
};

const looseSvgStyle = {
    position: 'absolute',
    bottom: '-0.125em',
    pointerEvents: 'none'
};

const svgStyle = {
    display: 'inline-flex',
    alignSelf: 'center',
    position: 'relative',
    height: '1em',
    width: '1em',
    zIndex: 0
};

const looseStyle = {
    display: 'inline-flex',
    alignSelf: 'center',
    position: 'relative',
    zIndex: 0
}

class MyIcon extends React.PureComponent {
    render() {
        const {props} = this;
        let icon = require('./icons/index')[props.name];
        let {name, path, viewBox} = icon;
        let size = viewBox.split(' ');
        let width = size[2].slice(0, 2);
        let height = size[3].slice(0, 2);
        width = props.size ? width * (props.size / height) : width;
        height = props.size ? props.size : height;
        return (
            <span id='svg-icon'
                  style={props.style ? {...svgStyle, ...props.style} : svgStyle}>
          <svg style={props.svgStyle ? {...style, ...props.svgStyle} : style} id={name}
               width={props.size ? width * (props.size / height) : width}
               height={props.size ? props.size : height} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
            <path style={{pointerEvents: 'none', transition: 'fill 0.5s'}} fill={props.color ? props.color : '#333'}
                  d={path}/>
          </svg>
        </span>
        )

    };
}

MyIcon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    style: PropTypes.object,
    color: PropTypes.string,
    hover: PropTypes.bool
};

export default MyIcon