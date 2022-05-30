import logo from './logo.svg';
import './App.css';
import React from 'react';

const HolaMundo = (props:{name:string, age: number}) =>{
  return(
    <a
    className ="App-link"
    href="https://react.js.org"
    target="_blank"
    rel="noopener noreferrer"
>
  Hola  {props.name} :{props.age}
</a>
  )
}
const App: React.FC =() =>{

  const [age, setAge]=React.useState(20)
  return(
    <div className="App">
      <header className="App-header">
       <img src ={logo} className ="App-logo" alt ="logo" /> 
        <HolaMundo name={ 'mi nombre es ariz y esto es un contador' } age={age}/>
      <button className="button" onClick={()=> {
        console.log("click")
        setAge(age +1)
        }}>
        Actualizar
      </button>
      </header>
    </div>
  )
}
export default App;
