import React, { Component } from 'react'

class CounterButton extends Component {
    handleChangeCounter = (newValue) => this.props.onHandleChange(newValue);
    handleChangeCounter2 = (newValue) => this.props.onHandleChange(newValue*-1);
    render() {
        return (
            <div>
                <button onClick={() => this.handleChangeCounter(1)} className="btn btn-outline btn-info mt-3">+</button>
                <button onClick={() => this.handleChangeCounter2(1)} className="btn btn-outline btn-info mt-3 mx-1">-</button>
            </div>
        )
    }
}
export default CounterButton;