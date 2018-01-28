import React, {Component} from 'react'
import injectSheet from 'react-jss'

import Icon from '../Icon'

const styles = theme => ({
    root: {
        display: 'flex',
        height: '47px',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 2
    },
    menu: {
        textTransform: 'uppercase',
        cursor: 'pointer',
        fontWeight: 300,
        marginLeft: 10,
        border: '1px solid #e9e9e9',
        borderRadius: 2,
        '&:hover': {
            '& #underline': {
                width: '100%'
            }
        }
    },
    underline: {
        paddingTop: 3,
        width: '90%',
        display: 'block',
        marginTop: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        transition: 'width 0.2s'
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '20px'
    }
});

class ToggleNav extends Component {
    state = {
        window: {},
        shadow: 0,
        color: 'rgba(0, 0, 0, 0)',
        border: ''
    };

    componentDidMount = () => {
        let myScroll = window.pageYOffset;
        let max = window.innerHeight;
        this.setState({
            window: {
                innerHeight: window.innerHeight,
                innerWidth: window.innerWidth,
                pageYOffset: window.pageYOffset,
                shadow: (myScroll / max) >= 1.0 ? 2 : 0,
                color: `rgba(0, 0, 0, ${window.pageYOffset / window.innerHeight})`
            }
        });
        this.opacity();
        window.addEventListener("resize", this.getDimensions);
        window.addEventListener("scroll", this.opacity);
        window.addEventListener("scroll", this.getScroll);
    };

    opacity = () => {
        let myScroll = window.pageYOffset && window.pageYOffset;
        let max = window.innerHeight && window.innerHeight;
        if (myScroll >= 0 && (myScroll / max) < 1.0) {
            this.setState({shadow: 0, color: `rgba(0, 0, 0, ${myScroll / max})`});
            return this.state
        } else if ((myScroll / max) >= 1.0) {
            this.setState({shadow: 2, color: 'rgba(0, 0, 0, 1.0)', border: 'rgba(233, 233, 233, 1.0)'});
        } else {
            this.setState({shadow: 2, color: 'rgba(0, 0, 0, 0)'});
        }
    };

    getDimensions = () => {
        let state = this.state.window;
        this.setState({
            window: {
                ...state,
                innerHeight: window.innerHeight,
                innerWidth: window.innerWidth
            }
        });
    };

    getScroll = () => {
        let state = this.state.window;
        this.setState({
            window: {
                ...state,
                pageYOffset: window.pageYOffset
            }
        });
    };

    render() {
        const {classes, text, color, onClick} = this.props;
        console.log(this.state.window.innerHeight, this.state.window.pageYOffset, this.state.color);
        return (
            <div className={classes.root} style={{
                backgroundColor: this.state.color
            }}>
            <span onClick={onClick}
                  className={classes.menu}>
                    <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center',
                        color,
                        fontSize: 16,
                        height: 28,
                        width: 34
                    }}><Icon name='bars' color='#e9e9e9' style={{bottom: 2}}/></span>
                {/*<span id='underline' className={classes.underline} style={{backgroundColor: color}}/>*/}
            </span>
            </div>
        )
    };
}

export default injectSheet(styles)(ToggleNav)