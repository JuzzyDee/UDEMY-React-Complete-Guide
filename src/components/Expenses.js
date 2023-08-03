import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const filterSelectHandler = (userSelectedFilter) => {
    props.onFilterUpdate(userSelectedFilter);
  };
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={props.selected}
          onFilterSelect={filterSelectHandler}
        />
        {props.expenses.map((exp) => (
          <ExpenseItem
            key={exp.id}
            title={exp.title}
            date={exp.date}
            amount={exp.amount}
          />
        ))}
      </Card>
    </>
  );
}

export default Expenses;
