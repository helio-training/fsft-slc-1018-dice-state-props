import React, { Component, Fragment } from 'react'
import Dice from './Dice'
import './dice.css'

class DiceBag extends Component{
    render(){
        return(
            <div>
                Hello from Dice Bag
                <Dice/>
            </div>
        )
    }
}

export default DiceBag