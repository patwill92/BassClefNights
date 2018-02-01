import React, {Fragment} from 'react'
import injectSheet from 'react-jss'

import TitleContainer from '../../../components/TitleContainer'

const root = {
    overflow: 'hidden',
    padding: '30 5%',
    textAlign: 'center',
    margin: 'auto',
    backgroundImage: 'url("images/triangles.png")',
    backgroundColor: '#161616'
};

const styles = theme => ({
    root: {
        ...root,
        backgroundColor: '#151515'
    },
    sponsors: {
        ...theme.flex.rowBetween,
        flexWrap: 'wrap'
    },
    sponsor: {
        opacity: 0.7,
        ...theme.flex.colCenter,
        marginBottom: 20,
        flexBasis: '33%'

    },
    img: {
        width: '100%',
        maxWidth: 150,
        margin: 'auto',
        height: 'auto'
    },
    '@media (max-width: 942px)': {
        root: {
            padding: '30px 15px',
            maxWidth: '100%',
        }
    },
    '@media (max-width: 650px)': {
        sponsor: {
            flexBasis: '49%'
        },
        sponsors: {
            ...theme.flex.rowCenter,
            flexWrap: 'wrap'
        },
    },
    '@media (max-width: 500px)': {
        root: {
            padding: '0 15px'
        },
        img: {
            maxWidth: 100
        }
    }
});

class Sponsors extends React.Component {
    render() {
        const {classes} = this.props;
        let sponsors = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return (
            <Fragment>
                <div className={classes.root}>
                    <div className={classes.title}>
                        <TitleContainer text='The Sponsors' color={'#fff'} icon='sponsor'/>
                    </div>
                    <div className={classes.sponsors}>
                        {sponsors.map(sponsor => {
                            return <div key={sponsor} className={classes.sponsor}><img className={classes.img}
                                                                                       src={`images/s${sponsor}.png`}/>
                            </div>
                        })}
                    </div>
                </div>
            </Fragment>
        )
    };
}

export default injectSheet(styles)(Sponsors)