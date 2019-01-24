import React, { Component, Fragment } from 'react'

// Data: Number of Sides, Current Roll
// Behavior: Roll 
class Die extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         numSides: this.props.sideCount,
    //         current: 0
    //     }
    // }
    state = {
        numSides: this.props.sideCount,
        current: 0
    }

    roll = () => {
        const currentRoll = Math.ceil(Math.random() * this.state.numSides) 
        this.setState(() => ({current: currentRoll}))
    }
    
    render(){
        return (
            <li>
                Sides: {this.state.numSides}, Roll: {this.state.current}
                <button onClick={this.roll}>Roll Die</button>
            </li>
        )
    }
}

export default Die