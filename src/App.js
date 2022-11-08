import Input from './components/Input';
import Button from './components/Button'

import { Container, Content, Row} from "./styles";
import { useState } from 'react';

const App = () => {

  const [currentNumber,setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [clearDisplay, setClearDisplay] = useState(false)

  const handleAddNumber = (number) => {
    if(clearDisplay || currentNumber === '0'){
      setCurrentNumber('');
      setClearDisplay(false);
    }
    setCurrentNumber(prev => `${prev}${number}`);
  }

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setClearDisplay(false);
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setOperation('+');
      setClearDisplay(true);
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber(sum);
      setOperation('+');
      setClearDisplay(true);
    }
  }

  const handleMinusNumbers = () => {  
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setOperation('-');
      setClearDisplay(true);
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setFirstNumber(minus);
      setOperation('-');
      setClearDisplay(true);
    }
  }

  const handleMultNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setOperation('x');
      setClearDisplay(true);
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setFirstNumber(mult);
      setOperation('x');
      setClearDisplay(true);
    }
  }

  const handleDivNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setOperation('/');
      setClearDisplay(true);
    } else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setFirstNumber(div);
      setOperation('/');
      setClearDisplay(true);
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== ''){
      switch(operation){
        case '+': 
          handleSumNumbers();
          break;
        case '-': 
          handleMinusNumbers();
          break;
        case 'x': 
          handleMultNumbers();
          break;
        case '/': 
          handleDivNumbers();
          break;
        default:
          break;
      }
      setFirstNumber('0');
      setOperation('');
    }
  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label={7} onClick={() => handleAddNumber('7')} />
          <Button label={8} onClick={() => handleAddNumber('8')} />
          <Button label={9} onClick={() => handleAddNumber('9')} />
          <Button label="/" onClick={handleDivNumbers} />
        </Row>
        <Row>
          <Button label={4} onClick={() => handleAddNumber('4')} />
          <Button label={5} onClick={() => handleAddNumber('5')} />
          <Button label={6} onClick={() => handleAddNumber('6')} />
          <Button label="*" onClick={handleMultNumbers} />
        </Row>
        <Row>
          <Button label={1} onClick={() => handleAddNumber('1')} />
          <Button label={2} onClick={() => handleAddNumber('2')} />
          <Button label={3} onClick={() => handleAddNumber('3')} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="C" onClick={handleClear} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="=" onClick={handleEquals} />
          <Button label="+" onClick={() => handleSumNumbers('+')} />
          
        </Row>
      </Content>
    </Container>
  );
}

export default App;
