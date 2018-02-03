import React from 'react'
import injectSheet from 'react-jss'

import Container from '../../../../components/Container'
import Title from '../../../../components/TitleContainer'

const styles = theme => ({
    root: {
        textAlign: 'center',
        padding: '100 0'
    },
    msgContainer: {
        ...theme.flex.rowCenter
    },
    message: {
        color: 'rgba(233,233,233,0.9)',
        fontWeight: 300,
        maxWidth: 500,
        fontSize: 15,
        lineHeight: 2
    },
    qLeft: {
        fontSize: 45,
        color: 'rgba(233,233,233,0.9)',
        position: 'relative',
        top: 10,
        lineHeight: 0.5,

    },
    qRight: {
        fontSize: 45,
        color: 'rgba(233,233,233,0.9)',
        position: 'relative',
        top: 10,
        lineHeight: 0.5,
    },
    '@media (max-width: 500px)': {
        message: {
            fontSize: 17
        },
        root: {
            padding: '40 15'
        }
    }
});

const Mission = props => {
    const {classes} = props;
    return (
        <Container backgroundColor={'rgba(22,22,22,0.9)'} image={'triangles.png'}>
            <div className={classes.root}>
                <Title text={'The mission'} color={'#e8e8e8'} icon={'bullseye'} align={'center'} noPadding />
                <div className={classes.msgContainer}>
                    <span className={classes.qLeft}>&ldquo;</span>
                    <div className={classes.message}>
                        Empowering middle-aged visionary artists by developing their latent
                        potential to reach new
                        heights
                        in their careers.
                    </div>
                    <span className={classes.qRight}>&rdquo;</span>
                </div>
            </div>
        </Container>
    )
};

export default injectSheet(styles)(Mission)