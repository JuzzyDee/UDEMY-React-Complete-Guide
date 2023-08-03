import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

import "./Expenses.css";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterUpdateHandler = (enteredFilterValue) => {
    setFilterYear(enteredFilterValue);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  const expenseContent = () => {
    if (filteredExpenses.length === 0) {
      return <p>No Expenses Found</p>;
    }
    return filteredExpenses.map((exp) => (
      <ExpenseItem
        key={exp.id}
        title={exp.title}
        date={exp.date}
        amount={exp.amount}
      />
    ));
  };

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterSelect={filterUpdateHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {expenseContent()}
      </Card>
    </>
  );
}

export default Expenses;
