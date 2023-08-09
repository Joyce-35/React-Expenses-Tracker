// src/components/ExpenseForm.js
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { addExpense } from '../store/expenseSlice';

function ExpenseForm() {
  const [item, setItem] = useState('');
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newExpense = {
      id: new Date().getTime(),
      item,
      date,
      amount,
      category,
    };
    dispatch(addExpense(newExpense));
    setItem('');
    setDate(new Date());
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Item"
        value={item}
        onChange={e => setItem(e.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <DatePicker selected={date} onChange={date => setDate(date)} />
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <FormControl fullWidth required margin="normal">
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={e => setCategory(e.target.value)}>
          <MenuItem value="Food and Drink">Food and Drink</MenuItem>
          <MenuItem value="Accommodation">Accommodation</MenuItem>
          <MenuItem value="Transportation">Transportation</MenuItem>
          <MenuItem value="Housing and Rent">Housing and Rent</MenuItem>
          <MenuItem value="Miscellaneous">Miscellaneous</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Add Expense
      </Button>
    </form>
  );
}

export default ExpenseForm;
