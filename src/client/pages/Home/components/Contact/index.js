import React, {Fragment} from 'react'
import injectSheet from 'react-jss'

import TitleContainer from '../../../components/TitleContainer'
import Form from './Form'

const root = {
    overflow: 'hidden',
    padding: '30 5%',
    textAlign: 'center',
    margin: 'auto',
    background: '#ffffff'
};

const styles = theme => ({
    root: {
        ...root,
        backgroundColor: '#fff'
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

class Contact extends React.Component {
    render(){
        const {classes} = this.props;
        return (
            <Fragment>
                <div className={classes.root}>
                    <div className={classes.title} >
                        <TitleContainer text='questions?' color={'#161616'} icon='musicSax' y={180} />
                    </div>
                    <Form/>
                </div>
            </Fragment>
        )
    };
}

export default injectSheet(styles)(Contact)