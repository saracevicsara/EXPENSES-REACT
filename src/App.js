import "./App.css";
import ExpnesItem from "./components/ExpenseItem";

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
      <ExpnesItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpnesItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpnesItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpnesItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
