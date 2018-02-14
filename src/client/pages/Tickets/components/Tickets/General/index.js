import React from 'react'

import ticketData from '../data'
import TicketCard from '../../../../../components/SponsorTicketCard'

export default () => {
    let list = ticketData.general.subtype;
    return <TicketCard list={list} icon={'circleSolid'} />
};

