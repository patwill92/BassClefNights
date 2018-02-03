import React from 'react'
import injectSheet from 'react-jss'

import Container from '../../../components/Container'
import Title from '../../../components/TitleContainer'
import Icon from '../../../components/Icon'

const styles = theme => ({
    root: {
        textAlign: 'center'
    },
    msgContainer: {
        ...theme.flex.rowCenter
    },
    message: {
        color: 'rgba(233,233,233,0.9)',
        fontWeight: 300,
        maxWidth: 500,
        flex: 1
    },
    qLeft: {
        flex: 0,
        fontSize: 15

    },
    qRight: {
        flex: 0,
        fontSize: 15
    }
});

const Mission = props => {
    const {classes} = props;
    return (
        <Container backgroundColor={'rgba(22,22,22,0.9)'} image={'triangles.png'}>
            <div className={classes.root}>
                <Title text={'The mission'} color={'#e8e8e8'} icon={'bullseye'} align={'center'}/>
                <div className={classes.msgContainer}>
                    <div className={classes.qLeft}><Icon name={'quoteLeft'} color={'rgba(233,233,233,0.9'}/></div>
                    <div className={classes.message}>Empowering middle-aged visionary artists by developing their latent
                        potential to reach new
                        heights
                        in their careers.
                    </div>
                    <div className={classes.qRight}><Icon name={'quoteRight'} color={'rgba(233,233,233,0.9'}/></div>
                </div>
            </div>
        </Container>
    )
};

export default injectSheet(styles)(Mission)