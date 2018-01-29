import React, {Fragment} from 'react'
import injectSheet from 'react-jss'

import TitleContainer from '../../../components/TitleContainer'

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
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='46' viewBox='0 0 70 46'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23e8e8e8' fill-opacity='0.18'%3E%3Cpolygon points='68 44 62 44 62 46 56 46 56 44 52 44 52 46 46 46 46 44 40 44 40 46 38 46 38 44 32 44 32 46 26 46 26 44 22 44 22 46 16 46 16 44 12 44 12 46 6 46 6 44 0 44 0 42 8 42 8 28 6 28 6 0 12 0 12 28 10 28 10 42 18 42 18 28 16 28 16 0 22 0 22 28 20 28 20 42 28 42 28 28 26 28 26 0 32 0 32 28 30 28 30 42 38 42 38 0 40 0 40 42 48 42 48 28 46 28 46 0 52 0 52 28 50 28 50 42 58 42 58 28 56 28 56 0 62 0 62 28 60 28 60 42 68 42 68 0 70 0 70 46 68 46'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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

const Contact = props => {
    const {classes} = props;
    return (
        <Fragment>
            <div className={classes.root}>
                <TitleContainer text='questions?' color='#222' icon='musicSax' y={180} inverse='#222'/>
                <div style={{display: 'flex', minHeight: 400}}>
                    <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1px solid #222', marginRight: 5}}>
                        CONTACT FORM HERE
                    </div>
                    <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1px solid #222', marginLeft: 5}}>
                        OTHER INFO HERE
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default injectSheet(styles)(Contact)