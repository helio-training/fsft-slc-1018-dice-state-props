import React, { Component, Fragment } from 'react'
import Die from './Die'

class Dice extends Component {
    state = {
        bag: [{ sides: 8 }, { sides: 10 }, { sides: 12 }, { sides: 6 }, { sides: 20 } ]
    }
    render() {
        const showBag = this.state.bag.map((die) => (<Die sideCount={die.sides}/>))
        return (
            <div>
                This Bag has {this.state.bag.length} Dice
                <button onClick={this.rollAll}>Roll Dice</button>
                <ul>
                    {showBag}
                </ul>
            </div>
        )
    }
}

export default Dice