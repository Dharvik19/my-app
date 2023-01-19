import React from "react";
import "./ExpenseForm.css";
import './NewExpense.css'
function ExpenseForm() {
  const titleChangeHandler = (e) => {
    console.log(e.target.value);
  };
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
            <input type="number" name="amount" />
          </div>
          <div className="new-expense__control">
            <label>Date:</label>
            <input type="date" name="date" />
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
