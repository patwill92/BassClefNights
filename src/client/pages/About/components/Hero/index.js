import React from 'react'

import Hero from '../../../../components/Hero'
import Container from '../../../../components/Container'

const AboutHero = props => {
    const {classes} = props;
    return (
        <Container>
            <Hero height={'600px'}
                  mobile={'400px'}
                  image={"images/logoFilled.png"}
                  title={'Bass clef nights'}
                  subtitle={'EST. 2014'}/>
        </Container>
    )
};

export default AboutHero