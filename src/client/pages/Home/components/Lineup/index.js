import React, {Fragment} from 'react'
import injectSheet from 'react-jss'

import LineupList from './LineupList'
import TitleContainer from '../../../components/TitleContainer'

const root = {
    overflow: 'hidden',
    padding: '30 0',
    textAlign: 'center',
    maxWidth: '90%',
    margin: 'auto'
};

const styles = theme => ({
    root: {
        ...root
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

const Lineup = props => {
    const {classes} = props;
    return (
        <Fragment>
            <div className={classes.root}>
                <TitleContainer text='The lineup' color='#222' icon='musicSax' y={180}/>
                <LineupList/>
            </div>
        </Fragment>
    )
};

export default injectSheet(styles)(Lineup)