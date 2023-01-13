import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './ExpenseItem.css';
import React from 'react';
function ExpenseItem(props){
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle='Car insurance';
    // const expenseAmount = 256;
    const LocationOfExpenditure =  window.location.hostname;
   
    return (
        <>
        {/* <h2>Expense Item!!</h2> */}
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div>{LocationOfExpenditure}</div>
            <div className="expense-item__description"> 
                <ExpenseDetails title={props.title}></ExpenseDetails>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
        </>
        
    );
    
    // return React.createElement(
    //     'div',
    //     {},
    //     React.createElement('h2', {}, 'lets get started'),
    //     // React.createElement(ExpenseDate,{date:date}),
    //     React.createElement(Expenses,{items:expenses})
    //   );

}
export default ExpenseItem;