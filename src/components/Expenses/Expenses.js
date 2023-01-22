import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
// import './Expenses.css';
import Card from "../UI/Card";
// import App from '../../App';
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <>
      <Card>
        <h2>Expense Tracker</h2>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        {/* { 
              expenses.map(expense =>{
                return (

                  <Card key={expense.id} className="App">

                    <ExpenseItem 
                      title={expense.title}
                      amount={expense.amount}
                      date = {expense.date}

                      ></ExpenseItem>
                  </Card>
                );
              })
            } */}
      </Card>
    </>
  );
}

export default Expenses;
