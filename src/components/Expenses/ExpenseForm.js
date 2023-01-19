import React,{useState} from "react";
import "./ExpenseForm.css";
import './NewExpense.css'
function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    console.log(enteredTitle);
  };

  const amountChangeHandler = (e) =>{
    setEnteredAmount(e.target.value);
    console.log(enteredAmount);
  }
  const dateChangeHandler = (e) =>{
    setEnteredDate(e.target.value);
    console.log(enteredDate);
  }
  return (
    <>
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>title:</label>
            <input type="text" name="name" onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount:</label>
            <input type="number" name="amount" onChange={amountChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Date:</label>
            <input type="date" min="2019-01-01" max="2023-12-31" name="date" onChange={dateChangeHandler} />
          </div>
          <div className='new-expense__actions'>
            <button  type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </>
  );
}
export default ExpenseForm;
