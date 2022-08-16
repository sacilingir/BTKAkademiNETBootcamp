import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const[numbers,setNumbers]=useState([1,2,3,4,5]); }




const sayHello=() => { 
  setNumbers([]);
  console.log(numbers);
};

const showNumber = (number) => {
 setNumbers(numbers.filter(num => num!==number))
}
  return (
    <>
    <div>
      Merhaba React.
    </div>
    {
      numbers.map((num,index) =>(
      <div key={index}>
        {num}
        <button onClick={() => showNumber(num) }>{num}</button>
        </div>))     
    }    
    <button onClick={() =>sayHello() }>Clear All!</button>
    </>
  );
  

export default App;
