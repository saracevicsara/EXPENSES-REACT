import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useState } from "react";
//
function ExpensItem(props) {
  const [title, setTitle] = useState(props.title);
  console.log("expenseoItem are eveluated by react");
  const clickhandler = () => {
    setTitle("updated title");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      <button onClick={clickhandler}>change title</button>
    </Card>
  );
}
export default ExpensItem;
