import React,{Component} from 'react'
import './App.css';
import Main from './components/mainComponent.jsx';
import { BrowserRouter } from 'react-router-dom';
import {Context, gallarystate} from './context/gallarycontext';
import { wholestate } from './context/wholecontext';


function App () {
  
    return (
      <Context.Provider value={wholestate}>
            
      <div className="" >
          <BrowserRouter>
            <div className="App">
              <Main />
            </div>
          </BrowserRouter>
      </div>
      </Context.Provider >
    );
  
  
}

export default App;
