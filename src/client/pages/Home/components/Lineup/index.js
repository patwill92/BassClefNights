import React, {Fragment} from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux';

import TitleContainer from '../../../../components/TitleContainer'
import LineupGrid from './LineupGrid'
import lineupData from './data'

const root = {
    overflow: 'hidden',
    margin: 'auto'
};

const styles = theme => ({
    root: {
        ...root,
        backgroundColor: '#fff',
    },
    '@media (max-width: 942px)': {
        overlay: {
            padding: '30px 15px',
            maxWidth: '100%',
        }
    },
    overlay: {
        margin: 'auto',
        padding: '60px 5% 80px 5%',
        textAlign: 'center',
    },
    wrap: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%'
    },
    '@media (max-width: 500px)': {
        overlay: {
            maxWidth: '100%',
            padding: 0,
            background: `#fff`
        },
        root: {
            background: `#fff`
        }
    }
});

@connect(({ui}) => ({scroll: ui.scroll}))
@injectSheet(styles)
class Lineup extends React.PureComponent {
    // state = {
    //     title: false
    // };
    // componentDidMount = async () => {
    //     await document.addEventListener('scroll', this.matchScroll);
    //     this.matchScroll();
    // };
    //
    // isInViewport = (element) => {
    //     let rect = element.getBoundingClientRect();
    //     let size = (rect.bottom - rect.top) / 2;
    //     return (window.innerHeight - rect.top) >= size;
    // };
    //
    // matchScroll = () => {
    //     let title = document.getElementById('lineupTitle');
    //     if (this.isInViewport(title)) {
    //         this.setState({title: true})
    //     }
    // };

    render() {
        const {classes} = this.props;
        let length = lineupData.length;
        return (
            <Fragment>
                <div className={classes.root}>
                    <div className={classes.overlay}>
                        <div>
                            <TitleContainer text='The lineup' color='#222' icon='musicSax' y={180} noBorder/></div>
                        <div id='wrap' className={classes.wrap}>
                            {lineupData.map((artist, i) => {
                                let direction = i%2 ? 0 : 1;
                                return (
                                    <LineupGrid name={artist.name}
                                                image={artist.image}
                                                key={artist.name}
                                                dir={direction}
                                                lenth={length}
                                                i={i}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    };
}

export default Lineup