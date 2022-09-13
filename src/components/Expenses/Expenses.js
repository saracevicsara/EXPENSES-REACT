import ExpensItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFIlter";
import { useState } from "react";
function Expenses(props) {
  const [filteredYear, setFiltereYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFiltereYear(selectedYear);
  };
  return (
    <div>
      <Card className="Expenses">
        <ExpensesFilter
          selected={filteredYear}
          donChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpensItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
export default Expenses;
