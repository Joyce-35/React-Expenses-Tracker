// src/App.js
import React from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <div className="App">
        <div className='form' ><ExpenseForm /></div>
        <hr />
        <div className='list' ><ExpenseList /></div>
        
        
      </div>
    </div>
  );
}

export default App;
