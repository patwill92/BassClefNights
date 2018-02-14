import React, {Fragment} from 'react'
import injectSheet from 'react-jss'

import Icon from '../../../../../components/Icon'
import ticketData from '../data'

const styles = theme => ({
    root: {
        padding: '40 0',
        ...theme.flex.rowCenter,
        flexWrap: 'wrap'
    },
    card: {
        boxShadow: theme.shadows[2],
        marginBottom: 30,
        width: '49%'
    },
    header: {
        color: '#fff',
        fontWeight: 400,
        fontSize: 15,
        letterSpacing: 1.5,
        textTransform: 'uppercase',
        padding: '15 10',
        backgroundColor: '#2d2d2d',
        ...theme.flex.rowBetween
    },
    content: {
        padding: 0,
    },
    price: {
        ...theme.flex.rowBetween,
    },
    priceTitle: {
        color: '#2d2d2d',
        fontWeight: 400,
        fontSize: 14,
        letterSpacing: 1.5,
        textTransform: 'uppercase',
        padding: '10 10',
        textAlign: 'left',
        backgroundColor: '#ececec'
    },
    priceChild: {
        color: '#2d2d2d',
        fontWeight: 400,
        fontSize: 13,
        letterSpacing: 1.5,
        textTransform: 'uppercase',
        padding: '10 10',
        flexBasis: '50%',
        textAlign: 'left'
    },
    '@media (max-width: 768px)': {
        root: {
            padding: '40 0',
            ...theme.flex.colCenter,
            flexWrap: 'wrap'
        },
        card: {
            margin: '0 0 30 0 !important',
            boxShadow: theme.shadows[2],
            width: '100%'
        }
    }
});

const General = props => {
    let {classes} = props;
    return (
        <div className={classes.root}>
            {ticketData.general.subtype.map((vip, i) => {
                return (
                    <Fragment key={vip.type}>
                        <div style={{margin: i > 0 ? '0 0 30 0.5%' : '0 0.5% 30 0'}}
                             className={classes.card}>
                            <div className={classes.header}>
                                <div>{vip.type} <Icon name={'circleSolid'} color={vip.color}/></div>
                                <div><strong>${vip.price['1-Day']}</strong></div>
                            </div>
                            <div className={classes.content}>
                                <div className={classes.priceTitle}>Includes</div>
                                <div>
                                    {vip.perks.map((perk, i) => {
                                        let length = vip.perks.length - 1;
                                        return (
                                            <div className={classes.priceTitle}
                                                 key={perk}
                                                 style={{
                                                     backgroundColor: '#fff',
                                                     padding: '12 10',
                                                     fontSize: 12,
                                                     lineHeight: 1.5,
                                                     borderBottom: i < length ? '0.5px solid #ccc' : 'none'
                                                 }}>{perk}</div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )
            })
            }
        </div>
    )

};

export default injectSheet(styles)(General)