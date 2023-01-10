import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import ExpenseLiItems from './components/ExpenseLiItems';
function App() {
  return (
    <div className="App">
        <h2>lets get started </h2> 
        <ExpenseItem></ExpenseItem>
        <ExpenseLiItems></ExpenseLiItems>
        
    </div>
  );
}

export default App;
