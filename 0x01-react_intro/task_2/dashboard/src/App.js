import React from 'react';
import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
        <div className='form'>
          <label htmlFor='email' onClick={() => {
            document.getElementById('email').focus();
          }}>Emai </label>
          <input type='email' id='email'/>
          <label htmlFor='pass' onClick={() => {
						document.getElementById('pass').focus();
					}}>Password </label>
          <input type='password' id='pass'/>
          <button type="submit">OK</button>
        </div>
      </body>
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </footer>
    </div>
  );
}

export default App;
