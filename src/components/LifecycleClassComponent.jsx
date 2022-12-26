import { Component } from "react";


export default class LifecycleCLassComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            counter : 8
        }
    }


    componentDidMount() {
        console.log("LifecycleClassComponent => componentDidMount")
    }

    componentWillUnmount() {
        console.log("LifecycleClassComponent => componentWillUnmount")
    }


    increment = () => {
        // this.state.counter = 20 NE TAKA
        this.setState((state) => ({counter : state.counter + 10}))

    }


    render() {

        

        return <div>
            <hr />
            Class Component
            <br />

            counter : {this.state.counter}

            <br />
            <button onClick={this.increment}>Increment</button>
        </div>
    }
}