import React, {Fragment} from 'react'
import injectSheet from 'react-jss'

import Container from '../../../../components/Container'
import Form from './Form'

const root = {
    overflow: 'hidden',
    padding: '30 5%',
    textAlign: 'center',
    margin: 'auto',
    background: '#ffffff'
};

const styles = theme => ({
    root: {
        padding: '50 15',
        '& form': {
            marginBottom: '0 !important'
        }
    },
    '@media (max-width: 500px)': {
        root: {
            padding: '45 15'
        }
    }
});

class Contact extends React.PureComponent {
    render() {
        const {classes} = this.props;
        return (
            <Container backgroundColor={'rgba(255,255,255,1.0)'}>
                <div className={classes.root}>
                    <Form/>
                </div>
            </Container>
        )
    };
}

export default injectSheet(styles)(Contact)