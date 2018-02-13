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
        backgroundColor: '#2d2d2d'
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

const VIP = props => {
    let {classes} = props;
    return (
        <div className={classes.root}>
            {ticketData.vip.subtype.map((vip, i) => {
                    return (
                        <Fragment key={vip.type}>
                            <div style={{margin: i > 0 ? i === 1 ? '0 0 30 0.5%' : 0 : '0 0.5% 30 0'}}
                                className={classes.card}>
                                <div className={classes.header}>
                                    {vip.type} <Icon name={'circleSolid'} color={vip.color}/>
                                </div>
                                <div className={classes.content}>
                                    <div className={classes.priceTitle}>Price</div>
                                    <div className={classes.price}>
                                        {Object.entries(vip.price).map((price, i) => {
                                            return (
                                                <div key={i} className={classes.priceChild}>
                                                    <div>{price[0]}</div>
                                                    <div style={{marginTop: 10}}><strong>${price[1]}</strong></div>
                                                </div>
                                            )
                                        })}
                                    </div>
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

export default injectSheet(styles)(VIP)