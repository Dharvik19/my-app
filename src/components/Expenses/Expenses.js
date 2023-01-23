import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
// import './Expenses.css';
import Card from "../UI/Card";
// import App from '../../App';
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found</p>
  if(filteredExpenses.length>1){
      expensesContent = filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ));
  }
  if(filteredExpenses.length>0 && filteredExpenses.length<2){
    expensesContent = filteredExpenses.map((expense) => (
      
      <>
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      <p>It has only one expense please add more expenses</p>
      </>
    ));
}
  return (
    <div>
      <Card className='expenses'>
        <h2>Expenses</h2>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;