import React from 'react'
import injectSheet from 'react-jss'

import Container from '../../../../components/Container'

const styles = theme => ({
    root: {
        minHeight: 250,
        backgroundSize: 'cover',
        backgroundPosition: '0 -50px',
        backgroundRepeat: 'no-repeat'
    },
    '@media (max-width: 1300px)': {
        root: {
            backgroundPosition: 'center'
        }
    },
    '@media (max-width: 1080px)': {
        root: {
            minHeight: 200,
        }
    }
});

const ImageBanner = props => {
    const {classes} = props;
    return (
        <Container image={'miami.jpg'} style={classes.root}>

        </Container>
    )
};

export default injectSheet(styles)(ImageBanner)