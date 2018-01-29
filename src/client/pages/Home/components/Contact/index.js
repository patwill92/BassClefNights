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
        backgroundImage: 'url("images/triangles.png")',
        backgroundColor: 'rgba(7,7,7,0.9)'
    },
    '@media (max-width: 942px)': {
        root: {
            padding: '30px 15px',
            maxWidth: '100%',
        }
    },
    '@media (max-width: 500px)': {
        root: {
            maxWidth: '100%',
            padding: 0
        }
    }
});

class Contact extends React.Component {
    render(){
        const {classes} = this.props;
        return (
            <Fragment>
                <div className={classes.root}>
                    <TitleContainer text='questions?' color={'#fff'} icon='musicSax' y={180}/>
                    <Form/>
                </div>
            </Fragment>
        )
    };
}

export default injectSheet(styles)(Contact)