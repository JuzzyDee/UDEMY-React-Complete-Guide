import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showExpenseFormFlag, setShowExpenseFormFlag] = useState("false");

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: crypto.randomUUID(),
    };
    props.onSaveExpense(expenseData);
  };

  const showFormHandler = () => {
    setShowExpenseFormFlag(true);
  };

  const cancelHandler = () => {
    setShowExpenseFormFlag(false);
  };

  if (showExpenseFormFlag === true) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onReset={cancelHandler}
        />
      </div>
    );
  }
  return (
    <div className="new-expense">
      <button className="new-expense button" onClick={showFormHandler}>
        Add New Expense
      </button>
    </div>
  );
};

export default NewExpense;
