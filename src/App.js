import "./App.css";

import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
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
      date: new Date(2021, 7, 28),
    },
    {
      title: "New Desk (Wooden)",
      amount: 120.67,
      date: new Date(2021, 3, 15),
    },
  ];
  return (
    <div className="App">
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
