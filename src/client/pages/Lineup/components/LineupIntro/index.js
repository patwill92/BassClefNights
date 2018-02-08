import React from 'react'
import injectSheet from 'react-jss'

import Container from '../../../../components/Container'
import Title from '../../../../components/TitleContainer'

const styles = theme => ({
    root: {
        textAlign: 'center',
        padding: '100 0'
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
            fontSize: 15
        },
        root: {
            padding: '40 15'
        }
    }
});

const LineupIntro = props => {
    const {classes} = props;
    return (
        <Container backgroundColor={'rgba(22,22,22,0.9)'} image={'triangles.png'}>
            <div className={classes.root}>
                <Title text={'The Lineup'} color={'#e8e8e8'} icon={'badge'} align={'center'} noPadding />
                <div className={classes.message} style={{margin: 'auto'}}>
                    This year Bass Clef Nights brings you giants in the Latin Jazz community. With each musician being
                    a master at their craft, this is a lineup you wont want to miss.
                </div>
            </div>
        </Container>
    )
};

export default injectSheet(styles)(LineupIntro)