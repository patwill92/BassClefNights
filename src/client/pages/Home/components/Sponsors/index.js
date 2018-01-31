import React, {Fragment} from 'react'
import injectSheet from 'react-jss'

import TitleContainer from '../../../components/TitleContainer'

const root = {
    overflow: 'hidden',
    padding: '30 5%',
    textAlign: 'center',
    margin: 'auto',
    background: '#161616'
};

const styles = theme => ({
    root: {
        ...root,
        backgroundColor: '#151515'
    },
    '@media (max-width: 942px)': {
        root: {
            padding: '30px 15px',
            maxWidth: '100%',
        }
    },
    '@media (max-width: 500px)': {
        root: {
            padding: '0 15px'
        }
    }
});

class Sponsors extends React.Component {
    render(){
        const {classes} = this.props;
        return (
            <Fragment>
                <div className={classes.root}>
                    <div className={classes.title} >
                        <TitleContainer text='questions?' color={'#fff'} icon='musicSax' y={180} />
                    </div>

                </div>
            </Fragment>
        )
    };
}

export default injectSheet(styles)(Sponsors)