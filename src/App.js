import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";

import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";
const DUMMY_EXPENSES = [
  {
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    title: "toilet paper",
    amount: 94.67,
    date: new Date(2021, 2, 25),
  },
  {
    title: "New TV",
    amount: 350.87,
    date: new Date(2021, 7, 29),
  },
  {
    title: "New Desk (Wooden)",
    amount: 120.67,
    date: new Date(2021, 3, 15),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
