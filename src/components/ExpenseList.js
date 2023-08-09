import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, ListSubheader } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense } from '../store/expenseSlice';

function ExpenseList() {
  const expenses = useSelector(state => state.expenses.expenses);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteExpense(id));
  };

  return (
    <List subheader={<ListSubheader>Expense List</ListSubheader>}>
      {expenses.map(expense => (
        <ListItem key={expense.id}>
          <ListItemText
            primary={expense.item}
            secondary={`Amount: ${expense.amount} - Category: ${expense.category}`}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={() => handleDelete(expense.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default ExpenseList;
