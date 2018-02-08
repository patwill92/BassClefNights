import React from 'react'

import Container from '../../../../components/Container'
import Artist from './Artist'
import artistList from './data'

export default () => {
    return (
        <Container backgroundColor={'rgba(255,255,255,1.0)'}>
            {
                artistList.map((artist, i) => {
                    let order = (i + 1) % 2;
                    order = order ? 0 : 1;
                    return <Artist {...artist} key={artist.name} order={order}/>
                })
            }
        </Container>
    )
}