
// import './App.css';
import ExpenseItem from './components/ExpenseItem';
// import ExpenseLiItems from './components/ExpenseLiItems';
function App() {
  let expenses = [
    { 
      id:1,
      title:'toilet paper',
      amount:'94',
      date: new Date(2021, 11,0)
    },
    {
      id:2,
      title:'car service',
      amount:'300',
      date: new Date(2022, 0,1)
    },
    {
      id:3,
      title:'snacks ',
      amount:'10',
      date: new Date(2022, 0,1)
    },
    {
      id:4,
      title:'movies',
      amount:'500',
      date: new Date(2022, 0,1)
    }
  ]
  // return (
  //   <div className="App">
  //       <h2>lets get started </h2> 
  //       <ExpenseItem 
  //       title={expenses[0].title}
  //       amount={expenses[0].amount}
  //       date = {expenses[0].date}
  //       ></ExpenseItem>
  //       <ExpenseItem 
  //       title={expenses[1].title}
  //       amount={expenses[1].amount}
  //       date = {expenses[1].date}
  //       ></ExpenseItem>
  //       <ExpenseItem 
  //       title={expenses[2].title}
  //       amount={expenses[2].amount}
  //       date = {expenses[2].date}
  //       ></ExpenseItem>
  //       <ExpenseItem 
  //       title={expenses[3].title}
  //       amount={expenses[3].amount}
  //       date = {expenses[3].date}
        
  //       ></ExpenseItem>
        
       
  //       <ExpenseLiItems></ExpenseLiItems>
  //   </div>
  // );
  return (
         <div >
            <h2>Expense Tracker</h2>
            { 
              expenses.map(expense =>{
                return (
                 
                  <div key={expense.id} className="App">
                     
                    <ExpenseItem 
                      title={expense.title}
                      amount={expense.amount}
                      date = {expense.date}

                      ></ExpenseItem>
                  </div>
                );
              })
            }
         </div> 
    );
}
export default App;
