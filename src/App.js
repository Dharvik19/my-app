// import './App.css';
import React,{useState} from 'react';
// import ExpenseItem from './components/ExpenseItem';
// import Card from './components/UI/Card';
import Expenses from './components/Expenses/Expenses';
import ExpenseForm from './components/Expenses/ExpenseForm';
import NewExpense from './components/Expenses/NewExpense';
// import ExpenseDate from './components/Expenses/ExpenseDate';
// import ExpenseLiItems from './components/ExpenseLiItems';

const expenses1 = [
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
function App() {
  
  // return (
  //   <Card className="App">
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
        
       
       
  //   </Card>
  // );
  // 
  // return(
  //   <>
  //     <div> 
  //       <h2>Lets get started </h2>
  //       <Expenses items={expenses}/>
  //     </div>
  //   </>
  // )
useState(expenses1);
  const [expenses, setExpenses] = useState(expenses1);
const addExpenseHandler = expense =>{
  console.log("In app.js");
  console.log(expenses);
  setExpenses(prevExpense =>{
    return [expense, ...prevExpense];
  });
};
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'lets get started'),
  //   // React.createElement(ExpenseDate,{date:date}),
  //   React.createElement(NewExpense),
  //   React.createElement(Expenses,{items:expenses}),
  //   React.createElement(NewExpense,{onAddExpense:addExpenseHandler})
  // );
 return(
  <>
  <div>
  <NewExpense onAddExpense={addExpenseHandler}/>;
  <Expenses items={expenses}/>
  </div>
  </>
 )
}
export default App;

