import React, { Component } from 'react';
import './Game.css';

class Game extends Component {
    constructor() {
        super()
        this.state = {
            number: "",
            message: "",
            random: generateeRandomNumber(100)
        }
    }

    handleOnChange = e => {
        //conts value =e.target
        const {target: {value}} = e;
        console.log(value);

        if (value.trim() > 0){
         this.setState( {
            number: value,
            });
        }
    
    }

    handleOnClick = () => {
        const number = parsentInt(this.state.number);
        const random = parsentInt(this.state.random);
        console.log(random)

        const text = calculateText(number, random);

        this.setState({
            message: text
        })
    }

    render() {
        return (
            <div className="Game">
                <input
                    type="number"
                    value = {this.state.number}
                    onChange = {this.handleOnChange}
                />
                <button onClick={this.handleOnClick}>Probar</button>
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default Game;

function generateeRandomNumber(max, min=1) {
    return Math.floor(Math.random()*(max - min) + min);
}

function calculateText(number, random) {
    if (number === random) {
        return "Felicidades has acertado!!!"
    }

    
}