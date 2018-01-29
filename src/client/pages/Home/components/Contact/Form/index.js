import React, {Component} from 'react'
import injectSheet from 'react-jss'

import Input from './Input'

const styles = theme => ({
    form: {
        ...theme.flex.rowBetween,
    }
})


class Form extends Component {
    state = {
        name: '',
        message: '',
        email: ''
    }
    onChange = (e) => {
        let {name, value} = e.target;
        this.setState({[name]: value})
    }
    render() {
        const {classes} = this.props;
        return (
            <form action="" className={classes.form}>
                <div style={{flex: 1}}>
                    <Input type='text' placeholder='Name' name='name' onChange={this.onChange} value={this.state.name}/>
                </div>
                <div style={{flex: 1}}>
                    <Input type='email' placeholder='Email' name='email' onChange={this.onChange} value={this.state.email}/>
                </div>
            </form>
        )
    }
}

export default injectSheet(styles)(Form)