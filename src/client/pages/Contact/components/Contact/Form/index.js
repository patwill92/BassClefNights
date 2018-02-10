import React, {Component} from 'react'
import injectSheet from 'react-jss'
import axios from 'axios'

import Input from './Input'
import Button from '../../../../../components/ClearButton'
import inputList from './data'

const styles = theme => ({
    form: {
        ...theme.flex.colCenter,
        textAlign: 'center'
    }
})


class Form extends Component {
    state = {
        nm: '',
        em: '',
        message: '',
        inquiry: '',
        sent: false,
        emailConfirmation: '',
        formHeight: ''
    };

    componentDidMount = () => {
        this.setState({formHeight: this.myForm.clientHeight - this.myBtn.clientHeight})
    };

    onSubmit = async (e) => {
        e.preventDefault();
        let {nm, em, message, inquiry} = this.state;
        let email = {
            name: nm,
            email: em,
            message,
            inquiry
        };
        try {
            let {data} = await axios.post('/email/send', email);
            this.setState({
                sent: true,
                emailConfirmation: data,
                nm: '',
                em: '',
                message: '',
                inquiry: ''
            })
        } catch (e) {
            console.log(e);
        }
    };

    onChange = (e) => {
        let {name, value} = e.target;
        this.setState({[name]: value})
    };

    render() {
        const {classes} = this.props;
        let {message, error} = this.state.emailConfirmation;
        return (
            <form ref={input => this.myForm = input} onSubmit={this.onSubmit} className={classes.form}
                  autoComplete={'nope'}>
                {!this.state.sent ?
                    inputList.map(input => {
                        return <Input type={input.type}
                                      name={input.name}
                                      value={this.state[input.name]}
                                      placeholder={input.ph}
                                      key={input.name}
                                      onChange={this.onChange}/>
                    }) :
                    <div style={{
                        maxWidth: 500,
                        minHeight: this.state.formHeight,
                        alignSelf: 'center',
                        width: '100%',
                        margin: 'auto'
                    }}>
                        <h1 style={{color: message ? '#161616' : '#860000'}}>{message ? 'EMAIL SENT!' : 'ERROR!'}</h1>
                        <h4>{message ? message : error}</h4>
                    </div>
                }
                {!this.state.sent &&
                <div ref={input => this.myBtn = input}><Button text='send' icon='envelope' iconColor='#161616' color={'#161616'} hover={'#fff'} submit/>
                </div>}
                {this.state.sent &&
                <div>
                    <Button text='back'
                            onClick={() => this.setState({sent: false})}
                            icon={'undo'}
                            iconColor='#161616'
                            color={'#161616'}
                            hover={'#fff'}/>
                </div>}
            </form>
        )
    }
}

export default injectSheet(styles)(Form)