import React, { useState } from 'react';
import './Styles/Calculator.css';
import Button from './Button';
import { evaluate } from 'mathjs';

function Calculator() {
    const [input, setInput] = useState('');

    const alterInput = digit => {

    let stringInput = digit;
    if(input.length < 12){
    setInput(input + stringInput);
    }
    }

    const clearInput = () => {
        setInput('');
    }

    const calculateInput = () => {
        if(input !==""){
        let operationResult = evaluate(input);
        setInput(operationResult.toString());
        }
    }

  return (
    <div className='calculator col cent s-p rad-b-s bord-green' translate='no'> 
        <div className='input-cont s-p bg-black bord-green rad-b-s separate-b size-b col cent bold just-c' id='display'>
        {input.length >= 12? <h5 className='adv'>Err</h5> : null}{input}
        </div>
        <div className='col s-gap'>
        <div className='row cent s-gap'>
        <Button onClick = {alterInput} needPropsChild = {true} id = "one">1</Button>
        <Button onClick = {alterInput} needPropsChild = {true} id = "two">2</Button>
        <Button onClick = {alterInput} needPropsChild = {true} id = "three">3</Button>
        <Button onClick = {alterInput} needPropsChild = {true} id = "add">+</Button>
        </div>
        <div className='row cent s-gap'>
        <Button onClick = {alterInput} needPropsChild = {true} id = "four">4</Button>
        <Button onClick = {alterInput} needPropsChild = {true} id = "five">5</Button>
        <Button onClick = {alterInput} needPropsChild = {true} id = "six">6</Button>
        <Button onClick = {alterInput} needPropsChild = {true} id = "subtract">-</Button>
        </div>
        <div className='row cent s-gap'>
        <Button onClick = {alterInput} needPropsChild = {true} id = "seven">7</Button>
        <Button onClick = {alterInput} needPropsChild = {true} id = "eight">8</Button>
        <Button onClick = {alterInput} needPropsChild = {true} id = "nine">9</Button>
        <Button onClick = {alterInput} needPropsChild = {true} id = "multiply">*</Button>
        </div>
        <div className='row cent s-gap'>
        <Button onClick = {alterInput} id = "decimal">.</Button>
        <Button onClick = {alterInput} id = "zero">0</Button>
        <Button onClick = {calculateInput} id = "equals">=</Button>
        <Button onClick = {alterInput} id = "divide">/</Button>
        </div>
        <div className='row cent just-c'>
        <Button onClick = {clearInput} id = "clear">Clear</Button>
        </div>
    </div>
    </div>
  )
}

export default Calculator
