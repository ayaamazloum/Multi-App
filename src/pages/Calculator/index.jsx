import './style.css';

import { useState } from 'react';

const Calculator = () => {
    const [expression, setExpression] = useState("");
    const [answer, setAnswer] = useState();
    const [isAnswer, setIsAnswer] = useState(false);

    const handleButtonClick = (value) => {
        console.log(isAnswer);
        switch (value) {
            case "delete":
                !isAnswer && setExpression(expression.substring(0, expression.length - 1))
                break;
            case "AC":
                setExpression("");
                break;
            case "+":
                isNaN(parseInt(expression.slice(-1))) ? setExpression(expression.substring(0, expression.length - 1) + value)
                    :setExpression(expression + value);
                break;
            case "-":
                isNaN(parseInt(expression.slice(-1))) ? setExpression(expression.substring(0, expression.length - 1) + value)
                    :setExpression(expression + value);
                break;
            case "*":
                isNaN(parseInt(expression.slice(-1))) ? setExpression(expression.substring(0, expression.length - 1) + value)
                    :setExpression(expression + value);
                break;
            case "/":
                isNaN(parseInt(expression.slice(-1))) ? setExpression(expression.substring(0, expression.length - 1) + value)
                    :setExpression(expression + value);
                break;
            case "%":
                isNaN(parseInt(expression.slice(-1))) ? setExpression(expression.substring(0, expression.length - 1) + value)
                    :setExpression(expression + value);
                break;
            case "0":
                !isAnswer && !isNaN(parseInt(expression.slice(-1))) && setExpression(expression + "0");
                break;
            default:
                setIsAnswer(false);
                isAnswer ? setExpression(value) : setExpression(expression + value);
                break;
        }
    };
    
    const evaluate = () => {
        setExpression(String(eval(expression)));
        setIsAnswer(true);
    };
    return (
        <div className='calculator-page full-width full-height flex center'>
            <div className='calc-box rounded flex column'>
                <input className='exp-input white-text' type='text' value={expression=="" ? 0 : expression} />
                <div className='buttons-container flex column'>
                    <div className="buttons-row flex row">
                        <button className='btn flex center grey-bg bold' onClick={()=>handleButtonClick("delete")}><svg className='delete-icon' height={24} width={24} xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-delete"><path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"/><line x1="18" x2="12" y1="9" y2="15"/><line x1="12" x2="18" y1="9" y2="15"/></svg></button>
                        <button className='btn flex center grey-bg bold' onClick={()=>handleButtonClick("AC")}>AC</button>
                        <button className='btn flex center grey-bg bold' onClick={()=>handleButtonClick("%")}>%</button>
                        <button className='btn flex center yellow-bg bold white-text' onClick={()=>handleButtonClick("/")}>/</button>
                    </div>
                    <div className="buttons-row flex row">
                        <button className='btn flex center dark-bg white-text' onClick={()=>handleButtonClick("7")}>7</button>
                        <button className='btn flex center dark-bg white-text' onClick={()=>handleButtonClick("8")}>8</button>
                        <button className='btn flex center dark-bg white-text' onClick={()=>handleButtonClick("9")}>9</button>
                        <button className='btn flex center yellow-bg bold white-text' onClick={()=>handleButtonClick("*")}>x</button>
                    </div>
                    <div className="buttons-row flex row">
                        <button className='btn flex center dark-bg white-text' onClick={()=>handleButtonClick("4")}>4</button>
                        <button className='btn flex center dark-bg white-text' onClick={()=>handleButtonClick("5")}>5</button>
                        <button className='btn flex center dark-bg white-text' onClick={()=>handleButtonClick("6")}>6</button>
                        <button className='btn flex center yellow-bg bold white-text' onClick={()=>handleButtonClick("-")}>-</button>
                    </div>
                    <div className="buttons-row flex row">
                        <button className='btn flex center dark-bg white-text' onClick={()=>handleButtonClick("1")}>1</button>
                        <button className='btn flex center dark-bg white-text' onClick={()=>handleButtonClick("2")}>2</button>
                        <button className='btn flex center dark-bg white-text' onClick={()=>handleButtonClick("3")}>3</button>
                        <button className='btn flex center yellow-bg bold white-text' onClick={()=>handleButtonClick("+")}>+</button>
                    </div>
                    <div className="buttons-row last-row flex row">
                        <button className='btn zero-btn flex center dark-bg white-text' onClick={()=>handleButtonClick("0")}>0</button>
                        <button className='btn flex center dark-bg white-text' onClick={()=>handleButtonClick(".")}>.</button>
                        <button className='btn flex center yellow-bg bold white-text' onClick={evaluate}>=</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;