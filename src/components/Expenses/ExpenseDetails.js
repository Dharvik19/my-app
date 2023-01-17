
function ExpenseDetails(props){
    return(
        <>
        <div  className="expense-item__description"> 
           <h2>{props.title}</h2> 
        </div>
        <div>{props.amount}</div>
        </>
    )
}
export default ExpenseDetails;