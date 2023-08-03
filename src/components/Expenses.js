import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterUpdateHandler = (enteredFilterValue) => {
    setFilterYear(enteredFilterValue);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterSelect={filterUpdateHandler}
        />
        {filteredExpenses.map((exp) => (
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
