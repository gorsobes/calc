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
            <div className='digits'>
            <button onClick={() => updateCalc('7'.toString())} key='7'>7</button>
            <button onClick={() => updateCalc('8'.toString())} key='8'>8</button>
            <button onClick={() => updateCalc('9'.toString())} key='9'>9</button>
            <button onClick={() => updateCalc('4'.toString())} key='4'>4</button>
            <button onClick={() => updateCalc('5'.toString())} key='5'>5</button>
            <button onClick={() => updateCalc('6'.toString())} key='6'>6</button>
            <button onClick={() => updateCalc('1'.toString())} key='1'>1</button>
            <button onClick={() => updateCalc('2'.toString())} key='2'>2</button>
            <button onClick={() => updateCalc('3'.toString())} key='3'>3</button>
            <button onClick={() => updateCalc('.')}>.</button>
                  <button onClick={() => updateCalc('0')}>0</button>
                  <button onClick={() => updateCalc('/')}>/</button>
                  <button className='reset' onClick={resetLast}>RESET</button>
                  <button className='enter' onClick={ calculate}>=</button>
                 
              </div>
              <div className='operators'>
                 
                  <button onClick={() => updateCalc('*')}>*</button>
                  <button onClick={() => updateCalc('+')}>+</button>
                  <button onClick={() => updateCalc('-')}>-</button>
                  <button onClick={deleteLast}>DEL</button>
                  
              </div>
             

            </div>


        </div>
      );
    }
  
  export default Calc;