import React, {Component, PureComponent} from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: props => props.backgroundColor ? props.backgroundColor : 'transparent',
        backgroundImage: props => props.image ? `url("images/${props.image}")` : null
    },
    rootChild: {
        width: '100%',
        maxWidth: 'calc(1280px + 10%)',
        margin: '0 auto',
        padding: '0 5% 0 5%',
    },
    '@media (max-width: 942px)': {
        root: {
            paddingRight: 0 + ' !important'
        },
        rootChild: {
            padding: '0 15px',
        }
    },
    '@media (max-width: 500px)': {
        rootChild: {
            padding: 0,
        }
    }
});

const mapStateToProps = ({ui}) => {
    return {
        modal: ui.modal
    }
};

@connect(mapStateToProps)
@injectSheet(styles)
class Container extends PureComponent {
    render() {
        const {classes, children, noPadding} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.rootChild} style={{padding: noPadding ? 0 : undefined, maxWidth: noPadding ? '100%' : undefined}}>
                    {children}
                </div>
            </div>
        )
    };
}

export default Container