import React from 'react'

import Hero from '../../../../components/Hero'
import Container from '../../../../components/Container'

const ContactHero = () => {
    return (
        <Container>
            <Hero height={'600px'}
                  mobile={'60%'}
                  image={"images/logoFilled.png"}
                  title={'Bass clef nights'}
                  subtitle={'contact'}/>
        </Container>
    )
};

export default ContactHero