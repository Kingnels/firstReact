// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Tweet from './tweet.js'


function App() {

 const [isRed, setRed] = useState(false)
 const [count, setcount] = useState(0)

 const increment = ()=>{
    setcount(count + 1 );
    setRed(!isRed);
 }
 const decrement = ()=>{
    setcount(count - 1 );
    setRed(true);
 }

  return (
    <div className='App'>

    <h1 className ={isRed?'red': ""}>Change my color</h1>
    <button onClick ={increment}>Increment</button>
    <button onClick ={decrement}>decrement</button>
    
    <h1>{count}</h1>
    </div>


);
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>


// <h1>Hello React</h1>
// <Tweet name = "Pash B" opinion ="Nelson is my king" likes = "400 likes"/>
// <Tweet name = "Chikodi" opinion ="Nelson is a gem" likes = "300 likes"/>
// <Tweet name = "Bilhah" opinion =" Anything for Nelson" likes = "800 likes"/>
// <Tweet name = "Nelson" opinion ="Why always Nelson" likes = "1400 likes"/> */}
{/* <h1 className='h1'>the truth about this life</h1> */}