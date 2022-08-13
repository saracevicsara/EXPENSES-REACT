import ExpensItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  //   const expenses = [
  //     {
  //       title: "Car Insurance",
  //       amount: 294.67,
  //       date: new Date(2021, 2, 28),
  //     },
  //     {
  //       title: "toilet paper",
  //       amount: 94.67,
  //       date: new Date(2021, 2, 25),
  //     },
  //     {
  //       title: "New TV",
  //       amount: 350.87,
  //       date: new Date(2021, 7, 28),
  //     },
  //     {
  //       title: "New Desk (Wooden)",
  //       amount: 120.67,
  //       date: new Date(2021, 3, 15),
  //     },
  //   ];
  return (
    <div className="Expenses">
      <ExpensItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpensItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpensItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpensItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </div>
  );
}
export default Expenses;
