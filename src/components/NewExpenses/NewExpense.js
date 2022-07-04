import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpenses = (props) => {

  const [showForm, setShowForm] = useState(false);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const handleShowForm = () => {
    setShowForm(true);
  }

  const cancelShowForm = () => {
    setShowForm(false);
  }

  return (
    <div className='new-expense'>
      {!showForm && <button type="button" onClick={handleShowForm}>Add New Expense</button>}
      {showForm && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={cancelShowForm} />}
    </div>
  )
};

export default NewExpenses;