import { useState } from 'react';
import './Calc.css';

function Calc() {
    const [calc,setCalc] = useState("");
    const [result,setResult] = useState("");
    const ops = ['/','*','+','-','.'];

    const updateCalc = value => {
        if(
           (ops.includes(value) && calc === '') ||
          ( ops.includes(value) && ops.includes(calc.slice(-1)))
        ){
          return;
        }
      setCalc(calc + value);
if(!ops.includes(value)){
    setResult(eval(calc + value).toString());
}
    }
    const createDigits = () => {
      const digits = [];

      for(let i =1; i < 10; i++){
        digits.push(
          <button 
          onClick={() => updateCalc(i.toString())}
          key={i}>
            {i}
            </button>
        )
      }
      return digits;
    }
  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {
      if(calc === ''){
        return;
      }
      const value = calc.slice(0,-1);
      setCalc(value);
  }
  const resetLast = () => {
    if(calc === ''){
      return;
    }
    setCalc('');
    setResult('');
}

   /* useEffect(() => {
     
    }, [])*/

      return (
        <div className='calc'>
            <h2>calc</h2>
            <div className='put'>
            <div className='display'>
                { result ? <span>({result})</span> : '' }&nbsp; 
                {calc || '0'}
            </div>
            </div>
            <div className='keyboard'>
              <div className='operators'>
                  <button onClick={() => updateCalc('/')}>/</button>
                  <button onClick={() => updateCalc('*')}>*</button>
                  <button onClick={() => updateCalc('+')}>+</button>
                  <button onClick={() => updateCalc('-')}>-</button>
                  <button onClick={deleteLast}>DEL</button>
              </div>
              <div className='digits'>
                {createDigits()}
                  <button onClick={() => updateCalc('0')}>0</button>
                  <button onClick={() => updateCalc('.')}>.</button>
                  <button onClick={ calculate}>=</button>
                  <button onClick={resetLast}>RESET</button>
                 
              </div>

            </div>


        </div>
      );
    }
  
  export default Calc;