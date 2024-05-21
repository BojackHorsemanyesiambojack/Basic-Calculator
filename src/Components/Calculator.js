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
        setInput("");
    }

    const calculateInput = () => {
        if(input !==""){
        let operationResult = evaluate(input);
        setInput(operationResult.toString());
        }
    }

  return (
    <div className='calculator col cent s-p rad-b-s bord-green'> 
        <div className='input-cont s-p bg-black bord-green rad-b-s separate-b size-b col cent bold just-c'>
        {input.length >= 12? <h5 className='adv'>Err</h5> : null}{input}
        </div>
        <div className='col s-gap'>
        <div className='row cent s-gap'>
        <Button onClick = {alterInput} needPropsChild = {true}>1</Button>
        <Button onClick = {alterInput} needPropsChild = {true}>2</Button>
        <Button onClick = {alterInput} needPropsChild = {true}>3</Button>
        <Button onClick = {alterInput} needPropsChild = {true}>+</Button>
        </div>
        <div className='row cent s-gap'>
        <Button onClick = {alterInput} needPropsChild = {true}>4</Button>
        <Button onClick = {alterInput} needPropsChild = {true}>5</Button>
        <Button onClick = {alterInput} needPropsChild = {true}>6</Button>
        <Button onClick = {alterInput} needPropsChild = {true}>-</Button>
        </div>
        <div className='row cent s-gap'>
        <Button onClick = {alterInput} needPropsChild = {true}>7</Button>
        <Button onClick = {alterInput} needPropsChild = {true}>8</Button>
        <Button onClick = {alterInput} needPropsChild = {true}>9</Button>
        <Button onClick = {alterInput} needPropsChild = {true}>*</Button>
        </div>
        <div className='row cent s-gap'>
        <Button onClick = {alterInput}>.</Button>
        <Button onClick = {alterInput}>0</Button>
        <Button onClick = {calculateInput}>=</Button>
        <Button onClick = {alterInput}>/</Button>
        </div>
        <div className='row cent just-c'>
        <Button onClick = {clearInput}>Clear</Button>
        </div>
    </div>
    </div>
  )
}

export default Calculator
