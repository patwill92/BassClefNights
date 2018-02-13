import React from 'react'

import Container from '../../../../components/Container'
import General from './General'
import VIP from './VIP'

export default ({type}) => {
    return (
        <Container backgroundColor={'rgba(255,255,255,1.0)'}>
            <div style={{padding: '0 8'}}>
                {type ? <General/> : <VIP/>}
            </div>
        </Container>
    )
}