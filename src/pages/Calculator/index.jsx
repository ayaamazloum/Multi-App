import './style.css';

import { useState } from 'react';

const Calculator = () => {
    return (
        <div className='calculator-page full-width full-height flex center'>
            <div className='calc-box rounded flex column'>
                <input className='exp-input white-text' type='text' value={0} />
                <div className='buttons-container flex column'>
                    <div className="buttons-row flex row">
                        <button className='btn flex center grey-bg bold'><svg className='delete-icon' height={24} width={24} xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-delete"><path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"/><line x1="18" x2="12" y1="9" y2="15"/><line x1="12" x2="18" y1="9" y2="15"/></svg></button>
                        <button className='btn flex center grey-bg bold'>AC</button>
                        <button className='btn flex center grey-bg bold'>%</button>
                        <button className='btn flex center yellow-bg bold white-text'>/</button>
                    </div>
                    <div className="buttons-row flex row">
                        <button className='btn flex center dark-bg white-text'>7</button>
                        <button className='btn flex center dark-bg white-text'>8</button>
                        <button className='btn flex center dark-bg white-text'>9</button>
                        <button className='btn flex center yellow-bg bold white-text'>x</button>
                    </div>
                    <div className="buttons-row flex row">
                        <button className='btn flex center dark-bg white-text'>4</button>
                        <button className='btn flex center dark-bg white-text'>5</button>
                        <button className='btn flex center dark-bg white-text'>6</button>
                        <button className='btn flex center yellow-bg bold white-text'>-</button>
                    </div>
                    <div className="buttons-row flex row">
                        <button className='btn flex center dark-bg white-text'>1</button>
                        <button className='btn flex center dark-bg white-text'>2</button>
                        <button className='btn flex center dark-bg white-text'>3</button>
                        <button className='btn flex center yellow-bg bold white-text'>+</button>
                    </div>
                    <div className="buttons-row last-row flex row">
                        <button className='btn zero-btn flex center dark-bg white-text'>0</button>
                        <button className='btn flex center dark-bg white-text'>.</button>
                        <button className='btn flex center yellow-bg bold white-text'>=</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;