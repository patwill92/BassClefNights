import React from 'react'

import Hero from '../../../../components/Hero'
import Container from '../../../../components/Container'

const SponsorHero = props => {
    return (
        <Container>
            <Hero height={'450px'}
                  mobile={'300px'}
                  image={"images/logoFilled.png"}
                  title={'Bass clef nights'}
                  subtitle={'sponsor'}/>
        </Container>
    )
};

export default SponsorHero