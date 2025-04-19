import React, { createContext, useState } from "react";

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [income, setIncome] = useState(500); // Example monthly income
  const [expenses, setExpenses] = useState([]);
  const [goal, setGoal] = useState({
    name: "Concert Ticket",
    target: 120,
    saved: 30,
  });

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const totalSpent = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <BudgetContext.Provider
      value={{
        income,
        setIncome,
        expenses,
        addExpense,
        goal,
        setGoal,
        totalSpent,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
