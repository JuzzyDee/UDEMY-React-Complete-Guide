import ExpenseItem from "../ExpenseItem";

import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((exp) => (
        <ExpenseItem
          key={exp.id}
          title={exp.title}
          date={exp.date}
          amount={exp.amount}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
