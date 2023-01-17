import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './ExpenseItem.css';
import React, { useState } from 'react';
function ExpenseItem(props){
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle='Car insurance';
    // const expenseAmount = 256;
    const LocationOfExpenditure =  window.location.hostname;
    
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);
   const EditHandler =()=>{
    setTitle('updated');
    console.log(title);
   }
   const DeleteHandler=()=>{
    console.log('Deleted')
   }
   
    
   const setAmountHandler =()=>{
    setAmount(100);
    console.log(amount);
   }
    return (
        <>

        {/* <h2>Expense Item!!</h2> */}
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div>{LocationOfExpenditure}</div>
            <div className="expense-item__description"> 
                <ExpenseDetails title={title}></ExpenseDetails>
                <ExpenseDetails amount={amount}></ExpenseDetails>
                
            </div>
            <button onClick={EditHandler}>Change</button>
            <button onClick={DeleteHandler}>Delete</button>
            <button onClick={setAmountHandler}>add100</button>
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