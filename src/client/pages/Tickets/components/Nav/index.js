import React from 'react'
import injectSheet from 'react-jss'

import Container from '../../../../components/Container'

const styles = theme => ({
    root: {

    },
    '@media (max-width: 500px)': {

    }
});

const TicketNav = props => {
    const {classes} = props;
    return (
        <Container backgroundColor={'rgba(22,22,22,0.9)'} image={'triangles.png'}>
            <div className={classes.root}>

            </div>
        </Container>
    )
};

export default injectSheet(styles)(TicketNav)