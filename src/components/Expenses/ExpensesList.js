import ExpensItem from "./ExpenseItem";
const ExpensesList = (props) => {
  let expensesContent = <p>no expenses found</p>;
  if (props.items.length > 0) {
    expensesContent = props.items.map((expense) => (
      <ExpensItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return <ul className="expenses-list"></ul>;
};

export default ExpensesList;
