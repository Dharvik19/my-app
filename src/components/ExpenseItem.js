import './ExpenseItem.css';
function ExpenseItem(){
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle='Car insurance';
    const expenseAmount = 256;
    const LocationOfExpenditure =  window.location.hostname;
    return (
        <>
        <h2>Expense Item!!</h2>
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div>{LocationOfExpenditure}</div>
            <div className="expense-item__description"> 
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
        </>
        
    );

}
export default ExpenseItem;