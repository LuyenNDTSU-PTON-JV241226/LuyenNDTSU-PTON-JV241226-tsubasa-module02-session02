import React from 'react'

export default function Calculation() {
    function Sum (firstNumber,secondNumber){
       return firstNumber + secondNumber;
    };
    function Subtraction(firstNumber,secondNumber){
        return firstNumber - secondNumber;
    }
    function Multiplication(firstNumber,secondNumber){
        return firstNumber * secondNumber;
    }
    function Division(firstNumber,secondNumber){
        return firstNumber / secondNumber;
    }

        
  return (
    <div>
        <h1>Danh sách kết quả</h1>
        <ul>
            <li>10 + 10 = {Sum(10,10)}</li>
            <li>10 - 10 = {Subtraction(10,10)}</li>
            <li>10 * 10 = {Multiplication(10,10)}</li>
            <li>10 / 10 = {Division(10,10)}</li>
        </ul>
    </div>
  )
}

    
