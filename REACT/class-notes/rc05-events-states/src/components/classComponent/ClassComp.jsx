import React, { Component } from 'react'

export default class ClassComp extends Component {

    constructor(props){
        super(props)
        this.state={counter:0}
        this.azalt= this.azalt.bind(this)
    }
    //! 1. Binding Yöntemi | En kolay bind işlemi | Arrow Function
    arttir=()=>{
        this.setState({counter:this.state.counter+1})
    }
    azalt(){
        this.setState({counter:this.state.counter-1})
    }

    render() {
        return (
            <div>
                <h2>Class Component</h2>
                <p>Count: {this.state.counter}</p>
                <button className="btn btn-primary m-2" onClick={this.arttir}>Arttır</button>
                {/* //! 2. Binding Yöntemi */}
                {/* <button className="btn btn-primary m-2" onClick={this.azalt.bind(this)}>Azalt</button> */}
                {/* //! 3. Binding Yöntemi | Constructor içinde */}
                <button className="btn btn-primary m-2" onClick={(this.azalt)}>Azalt</button>
            </div>
        )
    }
}
