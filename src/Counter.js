import React from "react"
class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }
    increment = () => {
        this.setState((prevValue) => ({
            count: prevValue.count + 1
        }))
    }
    decrease = () => {
        this.setState((prevValue) => ({
            count: prevValue.count - 1
        }))
    }
    render() {
        return (
            <div className="counter">
                <p>Счетчик кликов:  {this.state.count}</p>
                <button onClick={this.increment}>Увеличить</button>
                <button onClick={this.decrease}>Уменьшить</button>
            </div>
        )
    }
}

export default Counter;