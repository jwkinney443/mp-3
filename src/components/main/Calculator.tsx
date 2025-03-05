import { useState } from "react";
import styled from "styled-components";

const addNumbers = () => (first: number, second: number) => first + second;

const subtractNumbers = () => (first: number, second: number) => first - second;

const multiplyNumbers = () => (first: number, second: number) => first * second;

const divideNumbers = () => (first: number, second: number) => (second !== 0 ? first / second : NaN);

const powerNumbers = () => (first: number, second: number): number => {
    let result = 1;
    let flag = 0;

    if (second < 0) {
        flag = 1;
        second = -second;
    }

    for (let i = 0; i < second; i++) {
        result *= first;
    }

    return flag === 1 ? 1 / result : result;
};

const useOperation = () => {

    const add = addNumbers();
    const subtract = subtractNumbers();
    const multiply = multiplyNumbers();
    const divide = divideNumbers();
    const power = powerNumbers();

    return (operation: string, num1: number, num2: number): number => {
        if (operation === "add") {
            return add(num1, num2);
        } else if (operation === "subtract") {
            return subtract(num1, num2);
        } else if (operation === "multiply") {
            return multiply(num1, num2);
        } else if (operation === "divide") {
            return divide(num1, num2);
        } else if (operation === "power") {
            return power(num1, num2);
        } else {
            return 0;
        }
    };
};

const CalcH = styled.h3`
    font-size: calc(3px + 3vw);
    color: #853ebd;
    margin: 2vh 0;
`;

const CalcNumText = styled.h2`
    font-size: calc(2px + 2vh);
    color: #000000;
`;

const CalculatorContainer = styled.div`
    background: #ffffff;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 325px;
    margin: 2vh auto;
`;

const Input = styled.input`
    width: 85%;
    padding: 10px;
    margin: 5px 0;
`;

const Button = styled.button`
    background: #390765;
    border-radius: 20px;
    color: white;
    margin: 5px;
    padding: 10px;
`;

const Output = styled.h3<{ value: number }>`
    font-size: calc(6px + 1vw);
    margin-top: 10px;
    color: ${(props) => (props.value < 0 ? "red" : "black")};
`;

export default function Calculator() {
    const [firstNumber, setFirstNumber] = useState<string>("");
    const [secondNumber, setSecondNumber] = useState<string>("");
    const [output, setOutput] = useState<number>(0);
    const operate = useOperation();

    const calculate = (operation: string) => {
        const num1 = Number(firstNumber);
        const num2 = Number(secondNumber);
        setOutput(operate(operation, num1, num2));
    };

    const clearResults = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOutput(0);
    };

    return (
        <CalculatorContainer>
            <CalcH>Calculator</CalcH>

            <CalcNumText>First Number:</CalcNumText>

            <Input
                type="number"
                value={firstNumber}
                onChange={(e) => setFirstNumber(e.target.value)}
                placeholder="First Number"
            />

            <CalcNumText>Second Number:</CalcNumText>

            <Input
                type="number"
                value={secondNumber}
                onChange={(e) => setSecondNumber(e.target.value)}
                placeholder="Second Number"
            />

            <div>
                <Button onClick={() => calculate("add")}>+</Button>
                <Button onClick={() => calculate("subtract")}>-</Button>
                <Button onClick={() => calculate("multiply")}>*</Button>
                <Button onClick={() => calculate("divide")}>/</Button>
                <Button onClick={() => calculate("power")}>**</Button>
            </div>

            <Output value={output}>{isNaN(output) ? "Error! Division by Zero" : output}</Output>

            <Button onClick={clearResults}>Clear</Button>
        </CalculatorContainer>
    );
}
