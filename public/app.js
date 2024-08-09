import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState('');

  useEffect(() => {
    axios.get('/api/expenses')
      .then(response => {
        setExpenses(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/expenses', { description: newExpense, amount: 0 })
      .then(response => {
        setExpenses([...expenses, response.data]);
        setNewExpense('');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newExpense} onChange={(event) => setNewExpense(event.target.value)} />
        <button type="submit">Add Expense</button>
      </form>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>{expense.description} - ${expense.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;