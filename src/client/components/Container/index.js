import React, {Component} from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: props => props.backgroundColor ? props.backgroundColor : 'transparent',
        backgroundImage: props => props.image ? `url("images/${props.image}")` : null,
        paddingRight: props => props.modal ? 17 : 0
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
class Container extends Component {
    render(){
        const {classes, children} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.rootChild}>
                    {children}
                </div>
            </div>
        )
    };
}

export default Container