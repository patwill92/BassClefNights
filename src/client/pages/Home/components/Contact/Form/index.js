import React, {Component} from 'react'
import injectSheet from 'react-jss'

import Input from './Input'
import Button from '../../../../components/ClearButton'

const styles = theme => ({
    form: {
        ...theme.flex.colCenter,
    }
})


class Form extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        category: ''
    }
    onChange = (e) => {
        let {name, value} = e.target;
        this.setState({[name]: value})
    }

    render() {
        const {classes} = this.props;
        return (
            <form action="" className={classes.form}>
                <div>
                    <Input type='text' placeholder='Name' name='name' onChange={this.onChange} value={this.state.name}/>
                </div>
                <div>
                    <Input type='email' placeholder='Email' name='email' onChange={this.onChange}
                           value={this.state.email}/>
                </div>
                <div>
                    <Input type='select' placeholder='Inquiry Type' name='category' onChange={this.onChange}
                           value={this.state.category}/>
                </div>
                <div>
                    <Input type='textarea' placeholder='Message' name='message' onChange={this.onChange}
                           value={this.state.message}/>
                </div>
                <div>
                    <Button text='send' icon='envelope' iconColor='#fff'/>
                </div>
            </form>
        )
    }
}

export default injectSheet(styles)(Form)