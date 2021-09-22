import React, { Component } from 'react'
import {Col} from 'react-bootstrap'
import CounterButton from './CounterButton'
class CounterComponent extends Component {
    constructor(props){
        super(props);
        console.log('Constructor called');
    }
    state = {
        count: 1
    }
    handleChange = (newValue) => {
        this.setState({
            count: this.state.count + newValue
        })
    }
    componentDidMount(){
        console.log('componentDidMount called');
    }
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate called');
    }
    render() {
        console.log('render called');
        return (
            <Col className="mt-5">
                <h3>{this.state.count}</h3>
                <CounterButton onHandleChange={(value) => this.handleChange(value)} />
            </Col>
        )
    }
}

export default CounterComponent;