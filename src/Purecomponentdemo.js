import React, { PureComponent } from "react";

class Purecomponentdemo extends PureComponent {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    render() {
        console.log(this.state.count)

        return (
            <>
            <div>
                <h1>Pure Component</h1>
                <h1>Count : {this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count})} >Click</button>
            </div>
            </>
        )
    }

}

export default Purecomponentdemo