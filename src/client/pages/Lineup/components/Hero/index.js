import React from 'react'

import Hero from '../../../../components/Hero'
import Container from '../../../../components/Container'

const LineupHero = () => {
    return (
        <Container>
            <Hero height={'600px'}
                  mobile={'400px'}
                  image={"images/logoFilled.png"}
                  title={'Bass clef nights'}
                  subtitle={'2018 Lineup'}/>
        </Container>
    )
};

export default LineupHero