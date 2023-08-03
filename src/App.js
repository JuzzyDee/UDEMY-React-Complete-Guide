import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [filterYear, setFilterYear] = useState("2020");

  const filterUpdateHandler = (enteredFilterValue) => {
    setFilterYear(enteredFilterValue);
  };

  const saveExpenseHandler = (enteredExpenseData) => {
    setExpenses((prev) => {
      return [enteredExpenseData, ...prev];
    });
  };

  const filteredExpenses = () => {
    return expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === filterYear;
    });
  };

  return (
    <div>
      <NewExpense onSaveExpense={saveExpenseHandler} />
      <Expenses
        expenses={filteredExpenses()}
        selected={filterYear}
        onFilterUpdate={filterUpdateHandler}
      />
    </div>
  );
}

export default App;
