import React, {Component} from 'react'
import injectSheet from 'react-jss'

import Input from './Input'
import Button from '../../../../components/ClearButton'
import inputList from './data'

const styles = theme => ({
    form: {
        ...theme.flex.colCenter,
    }
})


class Form extends Component {
    state = {
        myName: '',
        blah: '',
        message: '',
        inquiry: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    onChange = (e) => {
        let {name, value} = e.target;
        this.setState({[name]: value})
    };

    render() {
        const {classes} = this.props;
        return (
            <form onSubmit={this.onSubmit} className={classes.form}  autoComplete={'nope'}>
                {inputList.map(input => {
                    return <Input type={input.type}
                                  name={input.name}
                                  value={this.state[input.name]}
                                  placeholder={input.ph}
                                  key={input.name}
                                  onChange={this.onChange}/>
                })}
                <div><Button text='send' icon='envelope' iconColor='#161616' color={'#161616'} hover={'#fff'} submit/></div>
            </form>
        )
    }
}

export default injectSheet(styles)(Form)