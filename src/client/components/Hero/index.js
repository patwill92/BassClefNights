import React from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'

import Title from '../TitleContainer'
import {scrollPosition} from "../../actions";

const styles = theme => ({
    root: {
        minHeight: props => props.height
    },
    child: {
        ...theme.flex.rowCenter,
        alignItems: 'center',
        minHeight: 'inherit'
    },
    title: {
        ...theme.flex.colCenter,
        flex: 1,
        '& *': {
            margin: 0,
            textAlign: 'left',
            fontSize: 30
        }
    },
    message: {
        fontFamily: theme.font.secondary,
        fontWeight: 400,
        color: '#161616',
        textTransform: 'uppercase',
        lineHeight: 2
    },
    logo: {
        maxWidth: 100,
        height: 'auto',
        flex: 1,
        opacity: 0.8,
        marginRight: 15
    },
    '@media (max-width: 500px)': {
        root: {
            minHeight: props => props.mobile
        },
        title: {
            '& *': {
                margin: 0,
                textAlign: 'left',
                fontSize: 20
            }
        },
        logo: {
            maxWidth: 60,
            height: 'auto',
            flex: 0,
            opacity: 0.8,
            marginRight: 15
        },
    }
});

@connect(null, {scrollPosition})
@injectSheet(styles)
class Hero extends React.PureComponent {
    componentDidMount = () => {
        this.props.scrollPosition({max: this.root.clientHeight});
        window.addEventListener("resize", this.onResize);
    };

    onResize = () => {
        this.props.scrollPosition({
            height: this.root.clientHeight
        })
    };
    render() {
        const {classes, image, title, subtitle} = this.props;
        return (
            <div ref={root => this.root = root} className={classes.root}>
                <div className={classes.child}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div>
                            <img src={image} className={classes.logo} alt=""/>
                        </div>
                        <div className={classes.title} style={{justifyContent: 'center'}}>
                            <Title text={title} noLine color='#161616' noPadding/>
                            <Title text={subtitle} noLine color='#161616' noPadding/>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}


export default Hero