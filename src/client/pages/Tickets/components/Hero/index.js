import React from 'react'

import Hero from '../../../../components/Hero'
import Container from '../../../../components/Container'

const TicketsHero = () => {
    return (
        <Container>
            <Hero height={'600px'}
                  mobile={'400px'}
                  image={"images/logoFilled.png"}
                  title={'Bass clef nights'}
                  subtitle={'Ticket Info'}/>
        </Container>
    )
};

export default TicketsHero